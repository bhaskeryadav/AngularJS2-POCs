//package com.angular.components.web.boot;
package com.angular.components.web.service.autocomplete;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutoCompleteService {

	@CrossOrigin
	@RequestMapping("/getData")
	public String getData(){
		return "Hello";
	}
}
