package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "payment")

public class Payment {
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "operation_id")
    private Long payId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "driver_id")
    private Long driverId;

    @Column(name = "cardNumber")
    private String cardNumber;

    @Column(name = "expYear")
    private String expiryYear;

    @Column(name = "cvv")
    private String cvv;

    public Payment() {
    }

    public Payment(Long payId, Long userId, Long driverId, String cardNumber, String expiryYear, String cvv) {
        this.payId = payId;
        this.userId = userId;
        this.driverId = driverId;
        this.cardNumber = cardNumber;
        this.expiryYear = expiryYear;
        this.cvv = cvv;
    }

    public Long getPayId() {
        return payId;
    }

    public void setPayId(Long payId) {
        this.payId = payId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpiryYear() {
        return expiryYear;
    }

    public void setExpiryYear(String expiryYear) {
        this.expiryYear = expiryYear;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }
}

