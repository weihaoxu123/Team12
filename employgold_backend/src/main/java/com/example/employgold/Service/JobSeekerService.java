package com.example.employgold.Service;

import com.example.employgold.Dao.JobSeekerDao;
import com.example.employgold.Domain.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;

public interface JobSeekerService {

    void addJobSeeker(JobSeeker jobSeeker);

}
