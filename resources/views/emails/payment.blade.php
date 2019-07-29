@component('mail::message')
# Payment Confirmation
<br>
Payment has been done by
<br>
Costumer Name:          {{ $order->name }}<br>
Costumer Email:         {{ $order->email }}<br>
Costumer Phone Number:  {{ $order->phone_number }}<br>
<br>
<br>
Guest Name:             {{ $order->guest }}
<br>
<br>
<br>
For Room Number {{ $order->room_number }} from {{ $order->checkin_date }} until {{ $order->checkout_date }}.

@component('mail::button', ['url' => $url])
Open Website
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
