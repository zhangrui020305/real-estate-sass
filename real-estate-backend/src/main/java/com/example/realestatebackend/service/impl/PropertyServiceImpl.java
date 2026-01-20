package com.example.realestatebackend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.realestatebackend.entity.Properties;
import com.example.realestatebackend.mapper.PropertyMapper;
import com.example.realestatebackend.service.PropertyService;

import org.springframework.stereotype.Service;

@Service
public class PropertyServiceImpl extends ServiceImpl<PropertyMapper, Properties> implements PropertyService {
}
