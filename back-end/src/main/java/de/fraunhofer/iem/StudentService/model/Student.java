package de.fraunhofer.iem.StudentService.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {

    private final String firstName;
    private final String lastName;
    private final Long matriculationNumber;

    public Student(String firstName, String lastName, Long matriculationNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.matriculationNumber = matriculationNumber;
    }
}
