<?php

namespace App\Http\Controllers;

use App\Services\NestHttpService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $nestHttpService;

    public function __construct(NestHttpService $nestHttpService)
    {
        $this->nestHttpService = $nestHttpService;
    }

    public function index()
    {
        $users = $this->nestHttpService->getUsers();
        return response()->json($users);
    }

    // Métodos adicionales para otras acciones
}
