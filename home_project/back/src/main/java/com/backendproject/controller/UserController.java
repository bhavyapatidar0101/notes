package com.backendproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backendproject.dto.UserAddRequestDTO;
import com.backendproject.dto.UserAddResponseDTO;
import com.backendproject.dto.UserDeleteResponseDTO;
import com.backendproject.dto.UserLoginRequestDTO;
import com.backendproject.dto.UserUpdateRequestDTO;
import com.backendproject.dto.UserUpdateResponseDTO;
import com.backendproject.model.User;
import com.backendproject.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserRepository  user_table;
	
	@GetMapping("/all")
	public List<User> all() {
			return user_table.findAll();
}
	@GetMapping("/{id}")
	public User id(@PathVariable("id")int id) {
		return user_table.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id")int id) {
		user_table.deleteById(id);
		
		UserDeleteResponseDTO response = new UserDeleteResponseDTO();
		response.status=200;
		response.message="success";
	}
	
	@PutMapping
	public UserUpdateResponseDTO update(@RequestBody UserUpdateRequestDTO incoming_data) {
		User row = user_table.findById(incoming_data.id).get();
		
	row.setFirst_name(incoming_data.first_name);
	row.setLast_name(incoming_data.last_name);
	row.setEmail(incoming_data.email);
	row.setPassword(incoming_data.password);
	row.setPhone(incoming_data.phone);
	
	user_table.save(row);
	
	UserUpdateResponseDTO response = new UserUpdateResponseDTO();
	response.status=200;
	response.message="success";
	
	return response;
		
		}
	
	@PostMapping
	public UserAddResponseDTO add(@RequestBody UserAddRequestDTO incoming_data) {
		User row = new  User();
		
		row.setFirst_name(incoming_data.first_name);
		row.setLast_name(incoming_data.last_name);
		row.setEmail(incoming_data.email);
		row.setPassword(incoming_data.password);
		row.setPhone(incoming_data.phone);
		
		user_table.save(row);
		
		UserAddResponseDTO response = new UserAddResponseDTO();
		response.status=200;
		response.message="success";
		
		return response;
		
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody UserLoginRequestDTO data) {
		List<User> list = user_table.findAll();
		for(User u:list) {
			if(u.getEmail().equals(data.email) && u.getPassword().equals(data.password)) {
				return true;
			}
		}
		return false;
	}
}

