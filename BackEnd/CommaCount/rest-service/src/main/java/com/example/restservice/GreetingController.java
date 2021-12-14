package com.example.restservice;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;

import javax.servlet.http.HttpServletResponse;

@RestController
public class GreetingController {
	@GetMapping("/")
	public ResponseEntity<Attributes> greeting(@RequestParam(value = "input") String input) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		System.out.println("updated");
		SumCommas x = new SumCommas();
		Attributes response = new Attributes(false,"","",0);
		if(input==""){
			response.setError(true);
			response.setErrorMessage("enter value");
		} else{
			response.setError(false);
			response.setErrorMessage("NA");
			response.setInput(input);
			response.setAnswer(x.sumCommasFunction(input));
	}
	return new ResponseEntity<Attributes>(response,headers,HttpStatus.OK);
}
}