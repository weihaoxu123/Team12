package com.example.employgold.Controller;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.EmployerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

public class EmployerController {
    @Autowired
    EmployerService employerService;

    @RequestMapping(value = "/api/{id}/employer-information", method = RequestMethod.GET)
    @ResponseBody
    public Employer getInformation(@PathVariable Integer id){
        System.out.println(id);
        Employer employer  = employerService.findEmployById(id);
        return employer;
    }
}
