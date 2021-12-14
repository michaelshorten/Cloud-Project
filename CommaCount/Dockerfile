FROM openjdk:8-jdk-alpine
ARG JAR_FILE=rest-service/target/*.jar
COPY ${JAR_FILE} rest-service-0.0.1-SNAPSHOT.jar
EXPOSE 6751
ENTRYPOINT ["java","-jar","rest-service-0.0.1-SNAPSHOT.jar"]

