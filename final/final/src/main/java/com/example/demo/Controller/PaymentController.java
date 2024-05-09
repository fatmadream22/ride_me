package com.example.demo.Controller;

import com.example.demo.Entity.Payment;
import com.example.demo.Services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")

public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/pay")
    public ResponseEntity<String> pay(@RequestBody Payment payment) {
        String response = PaymentService.pay(payment);
        return ResponseEntity.ok(response);
    }
}
