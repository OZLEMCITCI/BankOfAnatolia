package com.bank.service;

import java.util.List;

import com.bank.dao.UserDAO;
import com.bank.model.User;

public interface UserService {
	
UserDAO getUserDAO(User user);

UserDAO getUserDAOByName(String username);

List<UserDAO>getAllUsers();

void deleteUser(Long id);


}
