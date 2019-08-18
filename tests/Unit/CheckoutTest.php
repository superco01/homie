<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CheckoutTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testPath1()
    {
        $checkout = [
            'order_id' => 92,
            'guest_name' => 'guest test'
        ];
        $response = $this->json('POST', 'api/checkout', $checkout);
        $response->assertStatus(404);
        $this->assertTrue(true);
    }
    
    public function testPath2()
    {
        $checkout = [
            'order_id' => 94,
            'guest_name' => 'guest test'
        ];
        $response = $this->json('POST', 'api/checkout', $checkout);
        $response->assertStatus(200);
        $this->assertTrue(true);
    }
}
