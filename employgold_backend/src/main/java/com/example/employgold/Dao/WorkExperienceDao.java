package com.example.employgold.Dao;

import com.example.employgold.Domain.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WorkExperienceDao extends JpaRepository<WorkExperience,Integer> {

    @Query(value = "select experience from WorkExperience experience where experience.jobSeekerId = ?1")
    List<WorkExperience> getExperience(Integer id);
}
