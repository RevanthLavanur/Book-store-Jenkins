# Use the official Java image as the base image
FROM maven:3.8.5-openjdk-17 AS Sai

# Copy the source code into the container
Copy . .

# Build the Java application using Maven
RUN mvn clean compile package


From openjdk:17.0.1-jdk-slim
# Copy the WAR file to the Tomcat webapps directory
COPY --from=Sai /target/bookstore.war bookstore.war

# Expose port 8080
EXPOSE 8080

ENTRYPOINT [ "java","bookstore.war" ]
