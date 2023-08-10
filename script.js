document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    const guests = document.getElementById('guests').value;
    const rooms = document.getElementById('rooms').value;

    const bookingResult = document.getElementById('booking-result');
    bookingResult.textContent = `Booking Details:\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}\nRooms: ${rooms}`;
});
