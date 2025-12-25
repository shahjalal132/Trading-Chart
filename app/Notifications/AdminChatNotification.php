<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdminChatNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        public array $chatHistory
    ) {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $lastMessage = end($this->chatHistory);
        $userMessage = $lastMessage['role'] === 'user' ? $lastMessage['content'] : 'New chat inquiry';

        return (new MailMessage)
            ->subject('New Chat Inquiry - Action Required')
            ->line('A user has asked a question that could not be answered automatically.')
            ->line("User's question: {$userMessage}")
            ->line('Please review the chat history and contact the user.')
            ->action('View Chat History', url('/admin/chat-history'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $lastMessage = end($this->chatHistory);
        $userMessage = $lastMessage['role'] === 'user' ? $lastMessage['content'] : 'New chat inquiry';

        return [
            'type' => 'chat_inquiry',
            'message' => 'A user has asked a question that requires your attention.',
            'user_question' => $userMessage,
            'chat_history' => $this->chatHistory,
            'timestamp' => now()->toDateTimeString(),
        ];
    }
}
