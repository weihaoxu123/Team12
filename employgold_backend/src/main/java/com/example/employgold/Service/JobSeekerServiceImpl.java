package com.example.employgold.Service;

import com.example.employgold.Dao.JobSeekerDao;
import com.example.employgold.Domain.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class JobSeekerServiceImpl implements JobSeekerService{

    @Autowired
    private JobSeekerDao JobSeekerDao;

    @Override
    public void addJobSeeker(JobSeeker jobSeeker) {
        JobSeekerDao.save(jobSeeker);
    }

    @Override
    public void saveJobSeeker(JobSeeker jobSeeker) {
        JobSeekerDao.save(jobSeeker);
    }

    @Override
    public JobSeeker findJobSeeker(Integer id) {
        return JobSeekerDao.getById(id);
    }

    @Override
    public String updateSeeker(JobSeeker jobSeeker, Map<String, Object> params) {
        try {
            jobSeeker.setNameTitle(params.get("nameTitle").toString());
            jobSeeker.setLegalFirstName(params.get("legalFirstName").toString());
            jobSeeker.setMiddleName(params.get("middleName").toString());
            jobSeeker.setLegalLastName(params.get("legalLastName").toString());
            jobSeeker.setPronouns(params.get("pronouns").toString());
            jobSeeker.setPrimaryEmail(params.get("primaryEmail").toString());
            jobSeeker.setAlternateEmail(params.get("alternateEmail").toString());
            jobSeeker.setCellPhone(params.get("cellPhone").toString());
            jobSeeker.setHomePhone(params.get("homePhone").toString());
            Map<String, Object> address = (Map<String, Object>) params.get("address");
            jobSeeker.setAddressFirstLine(address.get("addressFirstLine").toString());
            jobSeeker.setAddressSecondLine(address.get("addressSecondLine").toString());
            jobSeeker.setCity(address.get("city").toString());
            jobSeeker.setState(address.get("state").toString());
            jobSeeker.setCountry(address.get("country").toString());
            jobSeeker.setZipCode(address.get("zipCode").toString());
            JobSeekerDao.save(jobSeeker);
            return "success";
        }
        finally {
            return "fail";
        }

    }

}
