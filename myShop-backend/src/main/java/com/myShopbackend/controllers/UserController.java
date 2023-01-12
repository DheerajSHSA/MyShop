package com.myShopbackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myShopbackend.models.User;

@RestController
public class UserController {
    
    @GetMapping("/getUser")
    public User testUser()
    {
        return new User("Dheeraj", "password");
    }
}
