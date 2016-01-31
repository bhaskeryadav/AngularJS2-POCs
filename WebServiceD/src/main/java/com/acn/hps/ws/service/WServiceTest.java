package com.acn.hps.ws.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class WServiceTest {

	List<People> li=new ArrayList<>();
	
	public WServiceTest(){
		li.add(new People("Bhasker",1,"20000.00"));
		li.add(new People("Aaron",2,"30000.00"));
		li.add(new People("Bundu",1,"20000.00"));
		li.add(new People("Ankita",2,"30000.00"));
		li.add(new People("Archana",1,"20000.00"));
		li.add(new People("Bhautik",2,"30000.00"));
		li.add(new People("Sudhakar",1,"20000.00"));
		li.add(new People("Priyanka",2,"30000.00"));
		li.add(new People("Aditya",1,"20000.00"));
		li.add(new People("Rajesh",2,"30000.00"));
	}
	
	
/*	@CrossOrigin()
	@RequestMapping(value = { "/test" },method = RequestMethod.GET,headers="Accept=application/json")
	public  List<People> testSetvice( ){
		String search="j";
		System.out.println("hello "+search);
		List<People> p=li.stream().filter(pep-> pep.getName().contains(search)).collect(Collectors.toList());
		
		

		return p;

	}*/
	
	@CrossOrigin()
	@RequestMapping(value = { "/test" },method = RequestMethod.GET,headers="Accept=application/json")
	public  List<People> testSetvice(@RequestParam(value="search", defaultValue="a") String search ){
		//String search="j";
		System.out.println("hello "+search);
		List<People> p=li.stream().filter(pep-> pep.getName().contains(search)).collect(Collectors.toList());
		return p;

	}
	
	
/*	@CrossOrigin()
	@RequestMapping(value = { "/test" },method = RequestMethod.GET,headers="Accept=text/javascript")
	public  String testSetvice(){
		try{
		System.out.println("hello");
		ObjectMapper mapper = new ObjectMapper();
		List<String> li=new ArrayList<>();
		li.add("bhasker");
		li.add("jon");
		return  mapper.writeValueAsString(li);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}*/
	
}
