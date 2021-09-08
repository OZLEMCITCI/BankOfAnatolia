package com.bank.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.bank.dao.UserDAO;
import com.bank.model.User;
import com.bank.repository.UserRepo;
import com.bank.service.UserService;

public class UserDetailsServiceImpl implements UserDetailsService,UserService {
	
	@Autowired
	UserRepo userRepo;
	

	@Override// 
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		return userRepo.findByUsername(username)
				.orElseThrow(()->new UsernameNotFoundException("User Found with username "+username));
	}

	@Override
	public UserDAO getUserDAO(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDAO getUserDAOByName(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserDAO> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		
	}

}
