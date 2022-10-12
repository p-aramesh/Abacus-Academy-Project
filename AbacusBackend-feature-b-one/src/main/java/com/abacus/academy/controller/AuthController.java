package com.abacus.academy.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.academy.model.AdminModel;
import com.abacus.academy.model.LoginModel;
import com.abacus.academy.model.UserDAO;
import com.abacus.academy.model.UserModel;
import com.abacus.academy.service.AuthService;
@CrossOrigin("*")
@RestController
public class AuthController {
	
	@Autowired
	AuthService authService;

	@PostMapping("/user/login")
	Map isUserPresent(@RequestBody LoginModel lm) {
		
		return authService.isUserPresent(lm);
	}
	
	@PostMapping("/admin/login")
	Boolean isAdminPresent(@RequestBody LoginModel lm) {
		
		return authService.isAdminPresent(lm);
	}
	
	@PostMapping("/admin/signup")
	Map<String, String> saveAdmin(@RequestBody AdminModel am) {
		return authService.saveAdmin(am);
	
	}

	@PostMapping("/user/signup")
	Map<String, String>  saveUser(@RequestBody UserModel um) {
	
		return authService.saveUser(um);
	}
}
