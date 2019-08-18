<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testPath1()
    {
        $newOrder = [
            'name' => 'name test',
            'guest' => 'guest test',
            'email' => 'unitTest@gmail.com',
            'phone_number' => '081312341234',
            'room_id' => 19,
            'room_number' => 1,
            'homestay_id' => 77,
            'checkin_date' => '2019-08-19',
            'duration' => -1,
        ];
        $response = $this->json('POST', 'api/order', $newOrder);
        $response->assertStatus(500);
        $this->assertTrue(true);
    }
    
    public function testPath2()
    {
        $newOrder = [
            'name' => '',
            'guest' => 'guest test',
            'email' => 'unitTest@gmail.com',
            'phone_number' => '081312341234',
            'room_id' => '777',
        ];
        $response = $this->json('POST', 'api/order', $newOrder);
        $response->assertStatus(422);
        $response->assertJson(['message' => 'The given data was invalid.']);
        $this->assertTrue(true);
    }

    public function testPath3()
    {
        $newOrder = [
            'name' => 'name test',
            'guest' => 'guest test',
            'email' => 'unitTest@gmail.com',
            'phone_number' => '081312341234',
            'room_id' => 19,
            'room_number' => 1,
            'homestay_id' => 77,
            'checkin_date' => '2019-08-19',
            'duration' => 1,
        ];
        $response = $this->json('POST', 'api/order', $newOrder);
        $response->assertStatus(201);
        $this->assertTrue(true);
    }
}
