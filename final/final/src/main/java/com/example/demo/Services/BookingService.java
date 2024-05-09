package com.example.demo.Services;

import com.example.demo.Entity.Booking;
import com.example.demo.repo.bookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private static bookingRepo bookingRepository;

    public static String createBooking(Booking booking) {
        bookingRepository.save(booking);
        return "success";
    }
}
