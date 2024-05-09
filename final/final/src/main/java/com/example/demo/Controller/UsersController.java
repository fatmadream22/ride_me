package com.example.demo.Controller;

import com.example.demo.Entity.Users;
import com.example.demo.Services.UsersService;
import com.example.demo.repo.driverRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsersController {
    private final UsersService userService;

    @Autowired
    public UsersController(UsersService userService) {
        this.userService = userService;
    }

    @Autowired
    private driverRepo userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users user) {
        String response = userService.register(user);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Users user) {
        String response = userService.login(user);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/driversnames")
    public ResponseEntity<List<String>> getAlldriversnames() {
        List<String> driversnames = userRepository.findAlldriveresnames();
        return ResponseEntity.ok(driversnames);
    }
}
