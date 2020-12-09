import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import CustomizedTables from "./Components/DataTable"
//eslint-disable
class Main extends Component {

  constructor(props){
    super(props);
    this.state = {students: [], showData: true};
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
   const handleClick = () => {
       this.setState({ showData: !this.state.showData });
        }
    return (
      <div>
         <div align="center">
                    <Button variant="contained" color="primary" onClick={() => { handleClick() }} details={this.state.students} >
                        Click to View Data
                    </Button>      
          <div hidden={this.state.showData}>
                    <CustomizedTables details={Students} />
          </div>
        </div>
        </div>
    );
  }
}

export default Main;
