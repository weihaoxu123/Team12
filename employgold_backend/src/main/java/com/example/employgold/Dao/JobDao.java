package com.example.employgold.Dao;

import com.example.employgold.Domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface JobDao extends JpaRepository<Job, Integer> {
//    @Query(value = "select job from Job job where job.jobSeeker_id = ?1")
//    Job getMatchByCandidate(Integer id);
}
