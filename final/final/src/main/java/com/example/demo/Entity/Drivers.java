package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "drivers")
public class Drivers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="driver_id")
    private Long driverId;
    @Column(name="driver_name")
    private String name;
    @Column(name="email")
    private String email;


    public Drivers() {
    }

    public Drivers(Long driverId, String name, String email) {
        this.driverId = driverId;
        this.name = name;
        this.email = email;
    }

    public Long getDriverId() {
        return driverId;
    }
    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

}
