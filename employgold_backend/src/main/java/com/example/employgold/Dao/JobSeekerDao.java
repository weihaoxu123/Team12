package com.example.employgold.Dao;

import com.example.employgold.Domain.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobSeekerDao extends JpaRepository<JobSeeker,Integer> {
//    JobSeeker findJobSeeker(@Param("id") Integer id);
}
