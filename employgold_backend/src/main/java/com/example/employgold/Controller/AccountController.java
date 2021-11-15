package com.example.employgold.Controller;

import com.example.employgold.Domain.Account;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.AccountService;
import com.example.employgold.Service.JobSeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class AccountController {

    @Autowired
    private JobSeekerService jobSeekerService;
    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/api/sign-up", method = RequestMethod.POST)
    @ResponseBody
    public String createAccount(@RequestParam Map<String,Object> params){
        Account account = new Account();
        account.setUserType((String) params.get("userGroup"));
        account.setAccountEmail((String) params.get("email"));
        account.setAccountPassword ((String) params.get("password"));
        accountService.addAccount(account);
        JobSeeker jobSeeker = new JobSeeker();
        jobSeeker.setId(2);
        jobSeekerService.addJobSeeker(jobSeeker);
        return "success";
    }
    @RequestMapping(value = "/api/sign-in", method = RequestMethod.GET)
    @ResponseBody
    public String signIn(@RequestParam Map<String,String> params) {
        System.out.println(params);
        Account account = accountService.getAccountByEmail(params.get("email"));

        if (account.getAccountPassword().equals(params.get("password"))){
            return "success";
        }
        else return "fail";
    }
}
