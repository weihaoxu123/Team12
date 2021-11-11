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

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    @ResponseBody
    public String createAccount(@RequestParam Map<String,Object> params){
        Account account = new Account();
        account.setUserType((String) params.get("userType"));
        account.setAccountEmail((String) params.get("email"));
        account.setAccountPassword ((String) params.get("password"));
        accountService.addAccount(account);
        JobSeeker jobSeeker = new JobSeeker();
        jobSeeker.setName("xiaoming");
        jobSeeker.setId(2);
        jobSeekerService.addJobSeeker(jobSeeker);
        return "success";
    }
    @PostMapping("/sign-in")
    public String SignIn(@RequestParam Map<String,Object> params) {
        return "name：" + params.get("name") + "\nage：" + params.get("age");
    }
}
