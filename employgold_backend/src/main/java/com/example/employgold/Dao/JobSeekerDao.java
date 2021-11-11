package com.example.employgold.Dao;

import com.example.employgold.Domain.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.JpaRepository;

public interface JobSeekerDao extends JpaRepository<JobSeeker,Integer> {

}
