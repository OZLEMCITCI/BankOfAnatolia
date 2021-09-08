package com.bank.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.bank.service.impl.UserDetailsServiceImpl;

@EnableWebSecurity //security clasina cevirdik
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	
	//Configure method which is used for authentication. Who you are?
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {//give AUTH wh you are?
		auth.userDetailsService(userDetailsServiceImpl).passwordEncoder(passwordEncode());
	}
	
	
	//yukaridaki configure methodu icin dependecy injection ediyoruz 
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	//yukaridaki configure methodu icin dependecy 
	@Bean
	private BCryptPasswordEncoder passwordEncode() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors()
		.and()
		.csrf().disable()
		.authorizeRequests().antMatchers("/auth/**").permitAll()
		.anyRequest().authenticated()
		.and().httpSecurity().exceptionHandling()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	
	
	
}
