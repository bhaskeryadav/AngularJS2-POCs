package com.angular.components.web.service.autocomplete;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angular.components.web.dummy.pojo.Person;

@RestController
public class AutoCompleteService {

	Log log=LogFactory.getLog(AutoCompleteService.class.getName());
	
	List<Person> dummyData=new ArrayList<>();
	
	/**
	 * Load dummy data
	 */
	public AutoCompleteService(){
		dummyData.add(new Person("Bhasker",1,"20000.00"));
		dummyData.add(new Person("Aaron",2,"30000.00"));
		dummyData.add(new Person("Bundu",1,"20000.00"));
		dummyData.add(new Person("Ankita",2,"30000.00"));
		dummyData.add(new Person("Archana",1,"20000.00"));
		dummyData.add(new Person("Bhautik",2,"30000.00"));
		dummyData.add(new Person("Sudhakar",1,"20000.00"));
		dummyData.add(new Person("Priyanka",2,"30000.00"));
		dummyData.add(new Person("Aditya",1,"20000.00"));
		dummyData.add(new Person("Rajesh",2,"30000.00"));
	}
	
	//TODO: execute the filtering logic
	/**
	 * Returns the filtered data 
	 * @param search -- string using which filteration will be done 
	 * @return
	 */
	@CrossOrigin()
	@RequestMapping(value = { "/getAutoCompleteData" },method = RequestMethod.GET,headers="Accept=application/json")
	public  List<Person> getAutoCompleteData(@RequestParam(value="search", defaultValue="*") String search ){
		log.info("getAutoCompleteData is invoked with parameter "+search);
		
		//return all data if search string is *
		if(search.equals("*")){
			return dummyData;
		}
		
		List<Person> filteredList=dummyData.stream().filter(person-> person.getName().contains(search)).collect(Collectors.toList());
		
		return filteredList;
	}
	
	
	/**
	 * Testing service
	 * @return
	 */
	@CrossOrigin
	@RequestMapping("/getData")
	public String getData(){
		return "Hello";
	}
	
	//TODO: execute the filtering logic
	/**
	 * Returns the filtered data (POST method)
	 * @param search -- string using which filteration will be done 
	 * @return
	 */
	@CrossOrigin(allowedHeaders={"POST"})
	@RequestMapping(value = { "/getAutoCompleteDataPost" },method = RequestMethod.POST,headers="Accept=application/json")
	public  List<Person> getAutoCompleteDataPost(@RequestParam(value="search", defaultValue="*") String search,HttpServletRequest request ){
		log.info("getAutoCompleteData is invoked with parameter "+search);
		
		request.getParameterMap().forEach((k,v) -> System.out.print(k+" : "+v));
/*		Enumeration<String> enu=request.getAttributeNames();
		while(enu.hasMoreElements()){
			System.out.println(enu.nextElement());
		}*/
		
		//return all data if search string is *
		if(search.equals("*")){
			return dummyData;
		}
		
		List<Person> filteredList=dummyData.stream().filter(person-> person.getName().contains(search)).collect(Collectors.toList());
		
		return filteredList;
	}
	
	
}
