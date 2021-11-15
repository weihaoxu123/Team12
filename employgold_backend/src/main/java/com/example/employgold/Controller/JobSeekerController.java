package com.example.employgold.Controller;

import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.JobSeekerService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class JobSeekerController {

    @Autowired
    private JobSeekerService jobSeekerService;

    @RequestMapping(value = "/api/{id}/getProfile", method = RequestMethod.GET)
    @ResponseBody
    public JobSeeker getProfile(@PathVariable Integer id){
        System.out.println(id);
        JobSeeker jobSeeker  = jobSeekerService.findJobSeeker(id);
        return jobSeeker;
    }

    @RequestMapping(value = "/api/{id}/setProfile", method = RequestMethod.POST)
    public String setProfile(@RequestParam Map<String, Object> params, @PathVariable Integer id){
        JobSeeker jobSeeker  = jobSeekerService.findJobSeeker(id);
        System.out.println(jobSeeker.getNameTitle());
        String status = jobSeekerService.updateSeeker(jobSeeker,params);
        return status;
    }
}
