package com.example.demo.Controller;

import com.example.demo.Entity.Drivers;
import com.example.demo.Services.DriversService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/drivers")
public class DriversController {
    private final DriversService driverService;

    @Autowired
    public DriversController(DriversService driverService) {
        this.driverService = driverService;
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Drivers driver) {
        String response = driverService.registerdr(driver);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Drivers driver) {
        String response = driverService.logindr(driver);
        return ResponseEntity.ok(response);
    }



}
