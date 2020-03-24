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
