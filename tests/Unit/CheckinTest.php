<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

class CheckinTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testPath1()
    {
        $checkin = [
            'order_id' => 94,
            'guest_name' => 'guest test'
        ];
        $response = $this->json('POST', 'api/checkin', $checkin);
        $response->assertStatus(404);
        $this->assertTrue(true);
    }
    
    public function testPath2()
    {
        $checkin = [
            'order_id' => 92,
            'guest_name' => 'guest test'
        ];
        $response = $this->json('POST', 'api/checkin', $checkin);
        $response->assertStatus(200);
        $this->assertTrue(true);
    }
}
