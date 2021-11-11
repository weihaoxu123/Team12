package com.example.employgold.Controller;

import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.JobSeekerService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class JobSeekerController {

    @Autowired
    private JobSeekerService jobSeekerService;

    @RequestMapping(value = "/api", method = RequestMethod.GET)
    public String getSeeker(){
        System.out.println("test");
        return "success";
    }

//    @RequestMapping(value = "/api", method = RequestMethod.GET)
//    public JobSeeker getSeeker(){
//        System.out.println("test");
//
//    }
}
