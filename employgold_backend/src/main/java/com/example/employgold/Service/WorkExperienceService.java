package com.example.employgold.Service;

import com.example.employgold.Domain.WorkExperience;

import java.util.List;

public interface WorkExperienceService {
    List<WorkExperience> getExperience(Integer id);
}
