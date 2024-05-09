package com.example.demo.repo;

import com.example.demo.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<Users, Long> {
}
