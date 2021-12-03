package com.example.employgold.Service;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.JobSeeker;

public interface EmployerService {
    Employer findEmployById(Integer id);
    void addEmployer(Employer employer);
}
