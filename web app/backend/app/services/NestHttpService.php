<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class NestHttpService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => env('NESTJS_BASE_URI'),
        ]);
    }

    public function getUsers()
    {
        try {
            $response = $this->client->request('GET', '/users');
            return json_decode($response->getBody()->getContents());
        } catch (GuzzleException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Métodos adicionales para otras peticiones HTTP
}
