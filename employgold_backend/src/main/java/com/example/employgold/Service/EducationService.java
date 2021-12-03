package com.example.employgold.Service;

import com.example.employgold.Domain.Education;

import java.util.List;

public interface EducationService {

    List<Education> getInfoById(Integer id);
}
