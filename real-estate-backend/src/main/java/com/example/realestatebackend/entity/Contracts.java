package com.example.realestatebackend.entity;

import java.util.Date;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

/**
 * (Contracts)表实体类
 *
 * @author makejava
 * @since 2026-01-15 13:54:23
 */
@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("contracts")
public class Contracts {
    @TableId
    private Long id;

    private Long propertyId;

    private Long tenantId;

    private Date startDate;

    private Date endDate;

    private Double monthlyRent;

    // Security deposit
    private Double deposit;

    // ACTIVE, TERMINATED, EXPIRED
    private String status;

    // Link to PDF upload
    private String contractFileUrl;

    private Date createdAt;

}
