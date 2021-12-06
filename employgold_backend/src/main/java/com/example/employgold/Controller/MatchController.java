package com.example.employgold.Controller;

import com.example.employgold.Domain.Job;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Domain.Match;
import com.example.employgold.Service.JobSeekerService;
import com.example.employgold.Service.JobService;
import com.example.employgold.Service.MatchService;
import com.example.employgold.Utils.EmployGoldResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
public class MatchController {
    @Autowired
    MatchService matchService;

    @Autowired
    JobService jobService;

    @Autowired
    JobSeekerService jobSeekerService;

    @RequestMapping(value = "/api/{id}/getMatches", method = RequestMethod.GET)
    @ResponseBody
    public EmployGoldResponse getMatches(@RequestParam Map<String, String> params, @PathVariable Integer id){
        if (params.get("userGroup").equals("candidate")){
            List<Match> matchList = matchService.getByJobSeeker(id);
            ArrayList<Job> jobList = new ArrayList<>();
            for (Match match:matchList){
                jobList.add(jobService.getJobById(match.getJobId()));
            }
            return new EmployGoldResponse().addCodeMessage(200,"get all matches", "200", jobList);
        }
        else if (params.get("userGroup").equals("employer")){
            List<Match> matchList = matchService.getByEmployer(id);
            ArrayList<JobSeeker> jobSeekerList = new ArrayList<>();
            for (Match match:matchList){
                System.out.println("***"+match.getJobSeekerId()+match.getJobId());
                jobSeekerList.add(jobSeekerService.findJobSeeker(match.getJobSeekerId()));
            }
            return new EmployGoldResponse().addCodeMessage(200,"get all candidates", "200", jobSeekerList);
        }
        else return null;
    }
}
