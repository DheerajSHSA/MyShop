package com.myShopbackend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myShopbackend.models.User;
import com.myShopbackend.services.UserService;

@RestController
public class UserController {
    // Object for the Service
    @Autowired
    UserService service;

    // Method to invoke the create new account method in the user service
    @PostMapping("/createAccount")
    public String createAccount(@RequestParam String username, @RequestParam String password)
    {
        if(service.addUser(username, password))
            return "User Account created with the username "+username;
        return "Failed to create an Account with the provided details";
    }

    // Method to invoke the list method in the user service
    @GetMapping("/getUsersList")
    public ArrayList<User> getUsers()
    {
        return service.list();
    }

}
