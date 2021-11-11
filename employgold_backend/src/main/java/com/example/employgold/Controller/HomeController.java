package com.example.employgold.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {
    @RequestMapping("/")
    public String test() {
        return "Main Page";
    }
}