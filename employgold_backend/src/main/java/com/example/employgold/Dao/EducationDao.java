package com.example.employgold.Dao;

import com.example.employgold.Domain.Education;
import com.example.employgold.Domain.EducationId;
import com.example.employgold.Domain.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EducationDao extends JpaRepository<Education, EducationId> {
    @Query(value = "select education from Education education where education.jobSeekerId = ?1")
    List<Education> getInfoById(Integer id);
}
