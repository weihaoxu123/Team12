package com.example.employgold.Controller;

import com.example.employgold.Domain.Account;
import com.example.employgold.Domain.JobSeeker;
import com.example.employgold.Service.AccountService;
import com.example.employgold.Service.JobSeekerService;
import com.example.employgold.Utils.EmployGoldResponse;
import com.example.employgold.Utils.ResponseCode;
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
    public EmployGoldResponse createAccount(@RequestParam Map<String,Object> params){
        Account account = new Account();
        account.setUserType((String) params.get("userGroup"));
        account.setAccountEmail((String) params.get("email"));
        account.setAccountPassword ((String) params.get("password"));
        accountService.addAccount(account);
        JobSeeker jobSeeker = new JobSeeker();
        jobSeeker.setId(2);
        jobSeekerService.addJobSeeker(jobSeeker);
        return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),"success", ResponseCode.C200.getDesc());
    }
    @RequestMapping(value = "/api/sign-in", method = RequestMethod.GET)
    @ResponseBody
    public EmployGoldResponse signIn(@RequestParam Map<String,String> params) {
        System.out.println(params);
        Account account = accountService.getAccountByEmail(params.get("email"));

        if (account.getAccountPassword().equals(params.get("password"))){
            return new EmployGoldResponse().addCodeMessage(ResponseCode.C200.getCode(),"Welcome to Employ Gold", ResponseCode.C200.getDesc());
        }
        else return new EmployGoldResponse().addCodeMessage(ResponseCode.C401.getCode(),"Please Check your Account name and password;", ResponseCode.C401.getDesc());
    }
}
