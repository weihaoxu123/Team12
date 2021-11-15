package com.example.employgold.Service;

import com.example.employgold.Dao.JobSeekerDao;
import com.example.employgold.Domain.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

public interface JobSeekerService {

    void addJobSeeker(JobSeeker jobSeeker);
    void saveJobSeeker(JobSeeker jobSeeker);
    JobSeeker findJobSeeker(Integer id);
    String updateSeeker(JobSeeker jobSeeker, Map<String, Object> params);
}
