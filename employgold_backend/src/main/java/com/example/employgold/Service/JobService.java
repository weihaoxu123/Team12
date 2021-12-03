package com.example.employgold.Service;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.Job;

import java.util.List;

public interface JobService {
    Job getJobById(Integer id);
    void addJob(Job job);
}
