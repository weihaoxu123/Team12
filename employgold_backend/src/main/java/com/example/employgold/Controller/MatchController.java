package com.example.employgold.Controller;

import com.example.employgold.Domain.Job;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Domain.Match;
import com.example.employgold.Service.JobSeekerService;
import com.example.employgold.Service.JobService;
import com.example.employgold.Service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public List<?> getProfile(@RequestParam Map<String, String> params, @PathVariable Integer id){
        if (params.get("userGroup").equals("candidate")){
            List<Match> matchList = matchService.getByJobSeeker(Integer.parseInt(params.get("id")));
            List<Job> jobList = null;
            for (Match match:matchList){

                jobList.add(jobService.getJobById(match.getJobId()));
            }
            return jobList;
        }
        else if (params.get("userGroup").equals("employer")){
            List<Match> matchList = matchService.getByEmployer(Integer.parseInt(params.get("id")));
            List<JobSeeker> jobSeekerList = null;
            for (Match match:matchList){

                jobSeekerList.add(jobSeekerService.findJobSeeker(match.getJobId()));
            }
            return jobSeekerList;
        }
        else return null;
    }
}
