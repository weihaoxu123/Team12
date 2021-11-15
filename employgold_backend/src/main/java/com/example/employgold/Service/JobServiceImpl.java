package com.example.employgold.Service;

import com.example.employgold.Dao.JobDao;
import com.example.employgold.Domain.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobDao jobDao;


    @Override
    public Job getJobById(Integer id) {
        return jobDao.getById(id);
    }
}
