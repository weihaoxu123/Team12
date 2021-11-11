package com.example.employgold;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages="com.example.employgold")
@EntityScan("com.example.employgold.Domain")
@EnableJpaRepositories("com.example.employgold.Dao")
public class EmploygoldApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmploygoldApplication.class, args);
//		SpringApplication application = new SpringApplication(EmploygoldApplication.class);
//		application.setWebApplicationType(WebApplicationType.SERVLET);
//		application.run(args);
	}

}
