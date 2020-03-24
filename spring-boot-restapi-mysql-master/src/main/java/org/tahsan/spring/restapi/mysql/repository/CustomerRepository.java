package org.tahsan.spring.restapi.mysql.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import org.tahsan.spring.restapi.mysql.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
	List<Customer> findByAge(int age);
}
