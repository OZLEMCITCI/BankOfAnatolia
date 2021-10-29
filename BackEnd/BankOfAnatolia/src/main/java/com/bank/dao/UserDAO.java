package com.bank.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDAO {
    private Long userId;
    private String username;

    @JsonIgnore
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private Boolean isAdmin;
    private Long accountNumber;
    private BigDecimal accountBalance;
    private List<TransactionDAO> transactions;
    private List<RecipientDAO> recipients;
    private Long totalUsers;
    private Double totalBalance;



}
