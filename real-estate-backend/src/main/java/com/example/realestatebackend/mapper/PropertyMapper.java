package com.example.realestatebackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.realestatebackend.entity.Properties;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PropertyMapper extends BaseMapper<Properties> {

}
