package com.angular.components.web.boot;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = AngularComponentsServiceApplication.class)
@WebAppConfiguration
public class AngularComponentsServiceApplicationTests {

	@Test
	public void contextLoads() {
	}

}
