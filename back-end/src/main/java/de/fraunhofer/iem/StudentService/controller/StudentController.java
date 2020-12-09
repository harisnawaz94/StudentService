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



//The below endpoint updates the data when received from the frontend
    @PutMapping(path = "/update", consumes = "application/json", produces = "application/json")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<Collection<Student>> setStudents(@RequestBody Student studentinput) {
        Student stdToBeUpdated;
        int index = 0;
        for (Student student: this.studentService.getStudents()) {
            if(student.getMatriculationNumber().equals(studentinput.getMatriculationNumber())) {
                student.setAddressRes(studentinput.getAddressRes());
                student.setFirstName(studentinput.getFirstName());
                student.setLastName(studentinput.getLastName());
                break;
            }
            index++;
        }
        return new ResponseEntity<>(this.studentService.getStudents(), HttpStatus.OK);

    }
}
