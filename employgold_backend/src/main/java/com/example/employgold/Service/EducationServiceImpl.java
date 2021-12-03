package com.example.employgold.Service;


import com.example.employgold.Dao.EducationDao;
import com.example.employgold.Dao.EmployerDao;
import com.example.employgold.Domain.Education;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EducationServiceImpl implements EducationService {

    @Autowired
    private EducationDao educationDao;

    @Override
    public List<Education> getInfoById(Integer id) {
        return educationDao.getInfoById(id);
    }
}
