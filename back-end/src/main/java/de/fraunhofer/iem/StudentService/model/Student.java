package de.fraunhofer.iem.StudentService.model;

public class Student {


    public String getAddressRes() {
        return addressRes;
    }

    public void setAddressRes(String addressRes) {
        this.addressRes = addressRes;
    }

    public Long getMatriculationNumber() {
        return matriculationNumber;
    }

    public void setMatriculationNumber(Long matriculationNumber) {
        this.matriculationNumber = matriculationNumber;
    }

    private String firstName;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private String lastName;
    private String addressRes;
    private Long matriculationNumber;

    public Student(String firstName, String lastName, String addressRes,Long matriculationNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.addressRes = addressRes;
        this.matriculationNumber = matriculationNumber;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


}

