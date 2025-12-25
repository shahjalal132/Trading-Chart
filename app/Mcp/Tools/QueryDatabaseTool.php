<?php

namespace App\Mcp\Tools;

use App\Models\Course;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Support\Facades\DB;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;

class QueryDatabaseTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
        Query the database to find answers about courses, prices, enrollments, and other trading platform information.
        Use this tool to answer questions like:
        - How many courses are available?
        - What is the lowest/highest price of a course?
        - What courses are available?
        - Course details and information
    MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $query = $request->get('query', '');

        if (empty($query)) {
            return Response::text('Please provide a query to search the database.');
        }

        $queryLower = strtolower($query);

        // Check for course count questions
        if (preg_match('/how many.*course/i', $queryLower)) {
            $count = Course::whereNotNull('published_at')->count();
            return Response::text("We currently have {$count} published course(s) available.");
        }

        // Check for price-related questions
        if (preg_match('/(lowest|minimum|cheapest).*price|price.*lowest|price.*minimum|price.*cheapest/i', $queryLower)) {
            $lowestPrice = Course::whereNotNull('published_at')
                ->min('price');
            
            if ($lowestPrice === null) {
                return Response::text('No courses with prices found.');
            }
            
            $course = Course::whereNotNull('published_at')
                ->where('price', $lowestPrice)
                ->first();
            
            $courseName = $course ? $course->title : 'a course';
            return Response::text("The lowest priced course is '{$courseName}' at $" . number_format($lowestPrice, 2) . ".");
        }

        if (preg_match('/(highest|maximum|most expensive).*price|price.*highest|price.*maximum|price.*expensive/i', $queryLower)) {
            $highestPrice = Course::whereNotNull('published_at')
                ->max('price');
            
            if ($highestPrice === null) {
                return Response::text('No courses with prices found.');
            }
            
            $course = Course::whereNotNull('published_at')
                ->where('price', $highestPrice)
                ->first();
            
            $courseName = $course ? $course->title : 'a course';
            return Response::text("The highest priced course is '{$courseName}' at $" . number_format($highestPrice, 2) . ".");
        }

        // Check for average price
        if (preg_match('/average.*price|price.*average/i', $queryLower)) {
            $avgPrice = Course::whereNotNull('published_at')
                ->avg('price');
            
            if ($avgPrice === null) {
                return Response::text('No courses with prices found.');
            }
            
            return Response::text("The average course price is $" . number_format($avgPrice, 2) . ".");
        }

        // Check for general questions about prices (what are the prices, what is the prices, etc.)
        // This should come after specific price queries (lowest/highest/average) but before course listing
        if (preg_match('/(?:what|tell|show|list|and).*(?:is|are).*(?:price|prices)|(?:price|prices).*(?:what|tell|show)/i', $queryLower) && 
            !preg_match('/(lowest|highest|average|minimum|maximum|cheapest|expensive)/i', $queryLower)) {
            $courses = Course::whereNotNull('published_at')
                ->orderBy('price', 'asc')
                ->get(['id', 'title', 'price']);
            
            if ($courses->isEmpty()) {
                return Response::text('No published courses with prices available at the moment.');
            }
            
            $lowestPrice = $courses->min('price');
            $highestPrice = $courses->max('price');
            $avgPrice = $courses->avg('price');
            
            $priceInfo = "Here's our pricing information:\n\n";
            $priceInfo .= "• Lowest price: $" . number_format($lowestPrice, 2) . "\n";
            $priceInfo .= "• Highest price: $" . number_format($highestPrice, 2) . "\n";
            $priceInfo .= "• Average price: $" . number_format($avgPrice, 2) . "\n\n";
            $priceInfo .= "All course prices:\n";
            
            $priceList = $courses->map(function ($course) {
                return "- {$course->title}: $" . number_format($course->price, 2);
            })->implode("\n");
            
            return Response::text($priceInfo . $priceList);
        }

        // Check for course listing
        if (preg_match('/list.*course|course.*list|what.*course|show.*course|available.*course/i', $queryLower)) {
            $courses = Course::whereNotNull('published_at')
                ->orderBy('title')
                ->get(['id', 'title', 'price', 'rating', 'total_reviews']);
            
            if ($courses->isEmpty()) {
                return Response::text('No published courses available at the moment.');
            }
            
            $courseList = $courses->map(function ($course) {
                return "- {$course->title} (Price: $" . number_format($course->price, 2) . ", Rating: {$course->rating}/5.0, Reviews: {$course->total_reviews})";
            })->implode("\n");
            
            return Response::text("Here are our available courses:\n\n{$courseList}");
        }

        // Check for specific course search
        if (preg_match('/course.*(?:about|on|for|named|called|titled)\s+([^?]+)/i', $queryLower, $matches)) {
            $searchTerm = trim($matches[1] ?? '');
            $courses = Course::whereNotNull('published_at')
                ->where(function ($q) use ($searchTerm) {
                    $q->where('title', 'like', "%{$searchTerm}%")
                      ->orWhere('description', 'like', "%{$searchTerm}%");
                })
                ->get();
            
            if ($courses->isEmpty()) {
                return Response::text("No courses found matching '{$searchTerm}'.");
            }
            
            $courseInfo = $courses->map(function ($course) {
                $info = "**{$course->title}**\n";
                $info .= "Price: $" . number_format($course->price, 2) . "\n";
                $info .= "Rating: {$course->rating}/5.0 ({$course->total_reviews} reviews)\n";
                if ($course->description) {
                    $info .= "Description: " . substr($course->description, 0, 200) . "...\n";
                }
                return $info;
            })->implode("\n\n");
            
            return Response::text($courseInfo);
        }

        // If no specific pattern matches, return null to indicate answer not found
        return Response::text('');
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->title('Query')
                ->description('The user\'s question or query to search the database')
                ->required(),
        ];
    }
}
