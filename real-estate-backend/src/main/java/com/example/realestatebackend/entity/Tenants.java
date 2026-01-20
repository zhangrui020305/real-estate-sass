package com.example.realestatebackend.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

/**
 * (Tenants)表实体类
 *
 * @author makejava
 * @since 2026-01-15 13:44:47
 */
@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("tenants")
public class Tenants {
    @TableId
    private Long id;

    private String name;

    private String phone;

    // National ID or Passport
    private String idCard;

    private String email;

    private Date createdAt;

}
