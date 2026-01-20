package com.example.realestatebackend.controller;

import com.example.realestatebackend.dto.LoginResponse;
import com.example.realestatebackend.entity.User;
import com.example.realestatebackend.service.UserService;
import com.example.realestatebackend.utils.JwtUtils;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.realestatebackend.common.Result;

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
    public Result<String> register(@RequestBody User user) {
        // Simple registration logic
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());

        if (userService.count(queryWrapper) != 0) {
            return Result.error(400, "User already exists");
        }

        boolean success = userService.save(user);
        return success ? Result.success("Register Success")
                : Result.error(500, "Register Failed");
    }

    @PostMapping("/login")
    public Result<LoginResponse> login(
            @RequestBody User user) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());
        queryWrapper.eq("password", user.getPassword());
        User loginUser = userService.getOne(queryWrapper);
        if (loginUser != null) {
            String token = jwtUtils.generateToken(loginUser.getUsername());
            LoginResponse response = new LoginResponse();
            response.setToken(token);
            response.setUserId(loginUser.getId());
            response.setUsername(loginUser.getUsername());
            response.setRole(loginUser.getRole());

            return Result.success(response, "Login Success");
        }
        return Result.error(401, "Login Failed");
    }
}
