package com.example.realestatebackend.controller;

import com.example.realestatebackend.entity.Properties;
import com.example.realestatebackend.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    // 获取所有房源
    @GetMapping
    public List<Properties> getAllProperties() {
        return propertyService.list();
    }

    // 获取单个房源
    @GetMapping("/{id}")
    public Properties getPropertyById(@PathVariable Long id) {
        return propertyService.getById(id);
    }

    // 更新房源
    @PutMapping("/update/{id}")
    public String updateProperty(@PathVariable Long id, @RequestBody Properties property) {
        property.setId(id);
        boolean success = propertyService.updateById(property);
        return success ? "Update Success" : "Update Failed";
    }

    // 删除房源
    @PostMapping("/delete/{id}")
    public String deleteProperty(@PathVariable Long id) {
        boolean success = propertyService.removeById(id);
        return success ? "Delete Success" : "Delete Failed";
    }

    // 添加房源
    @PostMapping("/add")
    public String addProperty(@RequestBody Properties property) {
        boolean success = propertyService.save(property);
        return success ? "Add Success" : "Add Failed";
    }
}
