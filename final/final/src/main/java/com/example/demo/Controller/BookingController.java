package com.example.demo.Controller;

import com.example.demo.Entity.Booking;
import com.example.demo.Services.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class BookingController {
    BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/{driverId}/book")
    public ResponseEntity<String> book(@PathVariable Long driverId, @RequestBody Booking booking) {
        String response = bookingService.createBooking(booking);
        return ResponseEntity.ok(response);
    }

}
