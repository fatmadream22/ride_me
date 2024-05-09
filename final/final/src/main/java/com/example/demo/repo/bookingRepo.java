package com.example.demo.repo;

import com.example.demo.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRepo extends JpaRepository<Booking, Long> {
}
