package com.example.employgold.Controller;

import com.example.employgold.Domain.Employer;
import com.example.employgold.Domain.Job;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.EmployerService;
import com.example.employgold.Service.JobService;
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
public class EmployerController {
    @Autowired
    EmployerService employerService;
    @Autowired
    JobService jobService;

    @RequestMapping(value = "/api/{id}/employerInformation", method = RequestMethod.GET)
    @ResponseBody
    public EmployGoldResponse getInformation(@PathVariable Integer id) throws JSONException {
        System.out.println(id);
        Employer employer  = employerService.findEmployById(id);
        String msg = "get employerInfo";
        return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),msg, ResponseCode.C200.getDesc(),employer);
    }

    @RequestMapping(value = "/api/{id}/jobPosting", method = RequestMethod.POST)
    @ResponseBody
    public EmployGoldResponse postJob(@RequestParam Map<String,Object> params,@PathVariable Integer id){
        Job job = new Job();
        job.setCompanyName((String) params.get("companyName"));
        job.setApplyLink((String) params.get("applyLink"));
        job.setDescription((String) params.get("description"));
        job.setType((String) params.get("type"));
        job.setTitle((String) params.get("title"));
        job.setEmployerId(id);
        jobService.addJob(job);
        return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),"Posting successfully", ResponseCode.C200.getDesc());
    }
}
