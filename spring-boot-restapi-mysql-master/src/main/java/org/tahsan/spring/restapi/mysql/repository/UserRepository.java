package org.tahsan.spring.restapi.mysql.repository;

import org.springframework.data.repository.CrudRepository;
import org.tahsan.spring.restapi.mysql.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
