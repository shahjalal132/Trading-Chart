<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['user', 'items'])->latest()->paginate(15);
        return Inertia::render('Admin/Orders/Index', ['orders' => $orders]);
    }

    public function show(Order $order)
    {
        $order->load(['user', 'items.orderable', 'address', 'payments', 'invoice', 'coupons']);
        return Inertia::render('Admin/Orders/Show', ['order' => $order]);
    }

    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,processing,completed,failed,refunded',
            'payment_status' => 'required|in:pending,paid,failed',
        ]);

        $order->update($validated);
        return redirect()->route('admin.orders.show', $order);
    }
}

