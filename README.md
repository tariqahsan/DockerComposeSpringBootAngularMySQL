"# DockerComposeSpringBootAngularMySQL" 

# Maven build without running unit test
e.g.
C:\Users\Tariq Ahsan\Desktop\Docker\DockerComposeSpringBootAngularMySQL\spring-boot-restapi-mysql-master>mvn install -DskipTests

# Angular build to create artifacts in the /dist directory
e.g.
C:\Users\Tariq Ahsan\Desktop\Docker\DockerComposeSpringBootAngularMySQL\angular-material>ng build --prod

# Run 'docker-compose up' command :
# The purpose of docker-compose is to function as docker cli but to issue multiple commands much more quickly. To make use of 
# docker-compose, 
# we need to encode the commands we are going to run into a docker-compose.yml file.
#
# docker-compose.yml files are used for defining and running multi-container Docker applications, whereas Dockerfiles are simple text 
# files that contain the commands to assemble an image that will be used to deploy containers. 
# We are going to deploy the entire stack with the docker compose command
e.g.
C:\Users\Tariq Ahsan\Desktop\Docker\DockerComposeSpringBootAngularMySQL>docker-compose up
# Connecting to the MySQL database and running command line SQL commands

>docker exec -it mysql-standalone bash -l

>mysql -usa -ppassword

mysql> connect test

Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Connection id:    134
Current database: test

mysql> describe customer;

+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| id      | bigint       | NO   | PRI | NULL    |       |
| active  | bit(1)       | YES  |     | NULL    |       |
| address | varchar(255) | YES  |     | NULL    |       |
| age     | int          | YES  |     | NULL    |       |
| name    | varchar(255) | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql>
