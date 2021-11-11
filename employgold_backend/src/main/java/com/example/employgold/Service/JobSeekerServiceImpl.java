package com.example.employgold.Service;

import com.example.employgold.Dao.JobSeekerDao;
import com.example.employgold.Domain.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobSeekerServiceImpl implements JobSeekerService{

    @Autowired
    private JobSeekerDao JobSeekerDao;

    @Override
    public void addJobSeeker(JobSeeker jobSeeker) {
        JobSeekerDao.save(jobSeeker);
    }
}
