package com.example.realestatebackend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.realestatebackend.entity.User;
import com.example.realestatebackend.mapper.UserMapper;
import com.example.realestatebackend.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
}
