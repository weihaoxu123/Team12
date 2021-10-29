package com.example.employgold.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {
    @RequestMapping("/")
    public String test() {
        return "Main Page";
    }
}