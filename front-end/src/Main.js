import React, { Component } from "react";
import { Container, Table } from "reactstrap";


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {students: []};
  }

  componentDidMount(){
    
     fetch("/students", {
      headers: {
			  "Access-Control-Allow-Origin": "http://localhost:8080",
			  "Accept": "application/json",
			  "Content-Type": "application/json"
			}
     }).then(response =>
      response
        .json()
        .then(data => this.setState({students: data}))
    );
    // const r = 4;
  }

  render(){
    const Students = this.state.students;

    if (Students === undefined) {
      return <p>Failed to load data.</p>;
    }
    const StudentList = Students.map(Student => {
      return (
        <tr>
          <td>{Student.firstName}</td>
              <td>{Student.lastName}</td>
              <td>{Student.addressRes}</td>
              <td>{Student.matriculationNumber}</td>
        </tr>
      );
    });

    return (
      <div>
        <Container fluid>
        <Table>
      <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Mtr. Number</th>
        </tr>
      </thead>
      <tbody>{StudentList}</tbody>
    </Table>
        </Container>
      </div>
    );
  }
}

export default Main;
