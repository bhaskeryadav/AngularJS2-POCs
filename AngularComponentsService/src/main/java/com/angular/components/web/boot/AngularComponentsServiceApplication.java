package com.angular.components.web.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.angular.components.web.service.autocomplete")
public class AngularComponentsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularComponentsServiceApplication.class, args);
	}
}
