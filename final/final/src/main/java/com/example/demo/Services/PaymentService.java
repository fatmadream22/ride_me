package com.example.demo.Services;

import com.example.demo.Entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repo.paymentRepo;

@Service
public class PaymentService {
    @Autowired
    private static paymentRepo paymentRepository;


    public static String pay(Payment payment){
        Long id = payment.getPayId();
        Long userid = payment.getUserId();
        String cardname = payment.getCardNumber();
        Long driverid = payment.getDriverId();
        String exp = payment.getExpiryYear();
        String cvv = payment.getCvv();

        if (userid == null || cardname == null || driverid == null || id == null || cardname == null || exp == null || cvv== null ||  cardname.isEmpty() || cvv.isEmpty()) {
            return " please enter your information.";
        }

        /*Payment storedpay = paymentRepository.findById(id).orElse(null);
        if (storedpay == null) {
            return "Invalid operation.";
        }*/

        return "Payment successful.";
    }
}
