<?php

use App\Mcp\Servers\TradingChatServer;
use Laravel\Mcp\Facades\Mcp;

Mcp::web('/mcp/trading-chat', TradingChatServer::class);
