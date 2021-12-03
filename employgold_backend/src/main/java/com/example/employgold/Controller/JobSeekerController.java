package com.example.employgold.Controller;

import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.JobSeekerService;
import com.example.employgold.Utils.EmployGoldResponse;
import com.example.employgold.Utils.ResponseCode;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.example.employgold.Utils.StaticMethods.createResponse;

@Controller
public class JobSeekerController {

    @Autowired
    private JobSeekerService jobSeekerService;

    @RequestMapping(value = "/api/{id}/getProfile", method = RequestMethod.GET)
    @ResponseBody
    public EmployGoldResponse getProfile(@PathVariable Integer id) throws JSONException {
        System.out.println(id);
        JobSeeker jobSeeker  = jobSeekerService.findJobSeeker(id);
        String msg = "get profile of employer";
        EmployGoldResponse response = new EmployGoldResponse();
        response.addCodeMessage(200,msg,"success",jobSeeker);
        return response;
    }

    @RequestMapping(value = "/api/{id}/setProfile", method = RequestMethod.POST)
    public EmployGoldResponse setProfile(@RequestParam Map<String, Object> params, @PathVariable Integer id){
        JobSeeker jobSeeker  = jobSeekerService.findJobSeeker(id);
        System.out.println(jobSeeker.getNameTitle());
        String status = jobSeekerService.updateSeeker(jobSeeker,params);
        EmployGoldResponse response = new EmployGoldResponse();
        response.addCodeMessage(200,"set profile of job seeker",status);
        return response;
    }
}
