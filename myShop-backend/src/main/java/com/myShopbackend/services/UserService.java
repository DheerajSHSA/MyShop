package com.myShopbackend.services;

import java.util.ArrayList;
import com.myShopbackend.models.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // Temp User Accounts Counter
    int counter = 0;
    // Temporary Database
    ArrayList<User> db = new ArrayList<>();

    // Method to return list of all the users
    public ArrayList<User> list() {
        return db;
    }

    // Method to create a new user
    public boolean addUser(String username, String password) {
        if (db.add(new User(++counter, username, password)))
            return true;
        return false;
    }
}
