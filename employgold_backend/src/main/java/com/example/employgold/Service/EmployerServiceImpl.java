package com.example.employgold.Service;

import com.example.employgold.Dao.EmployerDao;
import com.example.employgold.Domain.Employer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployerServiceImpl implements EmployerService{
    @Autowired
    private EmployerDao employerDao;

    @Override
    public Employer findEmployById(Integer id) {
        return employerDao.getById(id);
    }
}
