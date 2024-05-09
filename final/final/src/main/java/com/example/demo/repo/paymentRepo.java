package com.example.demo.repo;

import com.example.demo.Entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface paymentRepo extends JpaRepository<Payment, Long> {

}
