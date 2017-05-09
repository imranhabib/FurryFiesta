
# Instructions 

* Clone the repository 

* **Run**: mvn spring-boot:run (**local**: localhost:8090  **cloud**: [https://furryfiesta.herokuapp.com/](https://furryfiesta.herokuapp.com/))

* Navigate to src\main\resources\static
  * npm install (first run)
  * npm run build
  * npm start

* **Testing**: npm test

*Note: Ensure the correct server ref (local or cloud) is set, search project for 'server-reference' to find location*

# Stack & Tools

## Front-end

* AngularJS (v 1.6)
* ECMA2015 (Babel Transpiler) 
* NodeJS
* Webpack 
* Karma / Jasmine

## Back-end

* Spring Boot 
* Java
* H2 in-memory DB 
* Embedded Tomcat 
* Maven 

# Deployment

* Travis CI 
* Heroku 

# Specs
* Swagger



# Technical Approach

* Front end design implemented with a component-based architecture in mind, seperating areas of concern for greater maintainability 
* Single Page Application keeping up with recent web design trends 
* Tried to keep the process of adding a pet as painless as possible (4 inputs to fill in) 
* REST calls in-line with the Swagger v1.0 specs 
* Google Maps integration 
* **Deployment** pipeline created from every code commit (Code change -> Travis CI Build -> Auto-deploy to Heroku) 

