# StudentService
This a simple web application to show a list of students.
A student has three properties: first name, last name, address and matriculation number.

## How to run
Run the backend before the frontend. <br/>
Preresequite:
- Java
- NodeJs 

### How to run backend
Go to **back-end** directory and use command: <br/>
`./mvnw install` <br/>
Start backend using command: <br/>
`./mvnw spring-boot:run` <br/>
It will start the backend at port 8080 on your localhost. If it is running successfully, it will give a list of student as a response when hit a GET request on http://localhost:8080/students <br/>

### How to run frontend
Go to **front-end** directory and use command: <br/>
`npm install` <br/>
Start frontend using command: <br/>
`npm start` <br/>
It will start the frontend at port 3000 on your localhost.

# Tasks-completed
- Added another student field: **Address**, to store student address.
- Implemented student update feature so that you can update any student field from the frontend. 
