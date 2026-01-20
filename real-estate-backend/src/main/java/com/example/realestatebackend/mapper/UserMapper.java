package com.example.realestatebackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.realestatebackend.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
