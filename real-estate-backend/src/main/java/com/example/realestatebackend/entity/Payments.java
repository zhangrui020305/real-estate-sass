package com.example.realestatebackend.entity;

import java.util.Date;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

/**
 * (Payments)表实体类
 *
 * @author makejava
 * @since 2026-01-15 13:52:37
 */
@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("payments")
public class Payments {
    @TableId
    private Long id;

    private Long contractId;

    private Double amount;

    private Date paymentDate;

    // RENT, DEPOSIT, UTILITY
    private String type;

    // PENDING, PAID, OVERDUE
    private String status;

}
