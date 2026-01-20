package com.example.realestatebackend.controller;

import com.example.realestatebackend.entity.User;
import com.example.realestatebackend.service.UserService;
import com.example.realestatebackend.utils.JwtUtils;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.list();
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        // Simple registration logic
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());

        if (userService.count(queryWrapper) != 0) {
            throw new RuntimeException("User already exists");
        }

        boolean success = userService.save(user);
        return success ? "Register Success" : "Register Failed";
    }

    @GetMapping("/login")
    public String login(@RequestBody User user) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());
        queryWrapper.eq("password", user.getPassword());
        User loginUser = userService.getOne(queryWrapper);
        if (loginUser != null) {
            return jwtUtils.generateToken(loginUser.getUsername());
        }
        return "Login Failed";
    }
}
