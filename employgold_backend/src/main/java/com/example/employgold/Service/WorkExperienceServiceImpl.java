package com.example.employgold.Service;

import com.example.employgold.Dao.WorkExperienceDao;
import com.example.employgold.Domain.WorkExperience;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class WorkExperienceServiceImpl implements WorkExperienceService{

    @Autowired
    WorkExperienceDao workExperienceDao;
    @Override
    public List<WorkExperience> getExperience(Integer id) {
        return workExperienceDao.getExperience(id);
    }
}
