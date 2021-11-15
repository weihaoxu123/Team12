package com.example.employgold.Dao;

import com.example.employgold.Domain.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerDao extends JpaRepository<Employer, Integer> {
}
