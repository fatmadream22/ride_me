package com.example.demo.repo;

import com.example.demo.Entity.Drivers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface driverRepo extends JpaRepository<Drivers, Long> {
    @Query("SELECT u.username FROM User u")
    List<String> findAlldriveresnames();
}
