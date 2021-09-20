package com.bank.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleId;

    private String name;

    @OneToMany(mappedBy = "role",cascade = CascadeType.ALL,fetch=FetchType.LAZY)
    private Set<UserRole> userRole=new HashSet<>();
}
