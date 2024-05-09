package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "booking")
@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "booking_id")
    private Long bookingId;

    @Column(name = "driver_id")
    private String driverId;

    @Column(name = "user_id")
    private Long userid;

    public Booking(Long bookingId, String driverId) {
        this.bookingId = bookingId;
        this.driverId = driverId;
    }

    public Booking(Long bookingId, String driverId, Long userid) {
        this.bookingId = bookingId;
        this.driverId = driverId;
        this.userid = userid;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }
}
