package de.fraunhofer.iem.StudentService.controller;

import de.fraunhofer.iem.StudentService.model.Student;
import de.fraunhofer.iem.StudentService.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("students")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Collection<Student>> getStudents() {
        Collection<Student> students = this.studentService.getStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }



    @PutMapping(path = "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Collection<Student>> setStudents(@RequestBody Student studentinput) {
        System.out.println(studentinput);
        Collection<Student> students = this.studentService.setStudents(studentinput);
        return new ResponseEntity<>(students, HttpStatus.OK);

    }
}
