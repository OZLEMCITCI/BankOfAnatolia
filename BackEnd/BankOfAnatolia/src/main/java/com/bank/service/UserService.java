package com.bank.service;

import com.bank.dao.UserDAO;
import com.bank.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

UserDAO getUserDAO(User user);
UserDAO getUserDAOByName(String username);
List<UserDAO> getAllUsers();


}
