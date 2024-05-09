package com.example.demo.Services;

import com.example.demo.Entity.Drivers;
import com.example.demo.repo.driverRepo;
import com.example.demo.repo.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DriversService {

    private final driverRepo Repo;
    @Autowired
    private userRepo repo;


    @Autowired
    public DriversService(driverRepo Repo) {
        this.Repo = Repo;
    }

    public String registerdr(Drivers driver) {
        Long id= driver.getDriverId();
        String username = driver.getName();
        String Email = driver.getEmail();

        if (username == null || Email == null || username.isEmpty() || Email.isEmpty()) {
            return "Username and password cannot be empty.";
        }

        if (Repo.existsById(id)) {
            return "Username already exists.";
        }

        Repo.save(driver);
        return "User registered successfully.";
    }

    public String logindr(Drivers driver) {
        Long id = driver.getDriverId();
        String username = driver.getName();
        String email = driver.getEmail();

        if (username == null || email == null || username.isEmpty() || email.isEmpty()) {
            return "Username and password cannot be empty.";
        }
        if (Repo.existsById(id)) {
            return "Username already exists.";
        }

        Drivers storedUser = Repo.findById(id).orElse(null);
        if (storedUser == null) {
            return "Invalid login.";
        }

        return "Login successful.";
    }
}
