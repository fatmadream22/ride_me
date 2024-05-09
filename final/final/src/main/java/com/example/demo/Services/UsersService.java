package com.example.demo.Services;

import com.example.demo.Entity.Users;
import com.example.demo.repo.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    private userRepo repo;


    @Autowired
    public UsersService(userRepo repo) {
        this.repo = repo;
    }

    public String register(Users user) {
        Long id = user.getUserId();
        String username = user.getUsername();
        String email = user.getEmail();

        if (username == null || email == null || username.isEmpty() || email.isEmpty()) {
            return "Username and password cannot be empty.";
        }

        if (repo.existsById(id)) {
            return "Username already exists.";
        }

        repo.save(user);
        return "User registered successfully.";
    }


    public String login(Users user) {
        Long id = user.getUserId();
        String username = user.getUsername();
        String email = user.getEmail();

        if (username == null || email == null || username.isEmpty() || email.isEmpty()) {
            return "Username and password cannot be empty.";
        }
        if (repo.existsById(id)) {
            return "Username already exists.";
        }

        Users storedUser = repo.findById(id).orElse(null);
        if (storedUser == null) {
            return "Invalid login.";
        }

        return "Login successful.";
    }

}
