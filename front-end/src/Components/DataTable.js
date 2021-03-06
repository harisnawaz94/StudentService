import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
    const [dataVar, setDataVar] = useState(props.details);
    const [dataSave, setDataSave] = useState([]);
    const [currentlyEditingObject, setCurrentlyEditingObject] = useState({});
    const [currentlyEditing, setCurrentlyEditing] = useState([]);
   
    useEffect(() => {
            setCurrentlyEditing(new Array(props.details.length).fill(false));
            setDataVar(props.details)
    }, [props.details]);

//This function makes the row editable with TextFields  
    function handleClick(editIdx) {
        //eslint-disable-next-line
        let arr = [...currentlyEditing];
        arr[editIdx] = !currentlyEditing[editIdx];
        setCurrentlyEditingObject(dataVar[editIdx]);
        setCurrentlyEditing(arr);
        setDataSave(dataVar)
    }
// This function handles update made on a particular row 
    function handleChange(e, editIdx) {
        let dataCopy = [];
        let dar = {};
        // eslint-disable-next-line
        dataCopy = [...dataSave];
        // eslint-disable-next-line
        dar = { ...dataCopy[editIdx] };
        dar[e.target.name] = e.target.value;
        dataCopy[editIdx] = dar;
        setCurrentlyEditingObject(dataCopy[editIdx]);
        setDataSave(dataCopy);
    }
// This function when clicked the done button updates the row in frontend and backend
    function stopEditing(editIdx) {
        dataVar[editIdx] = currentlyEditingObject;
        setDataVar(dataVar);
        setDataSave(dataVar);
    //posts the updated data to the backend
        fetch("http://localhost:8080/update", {
            method: 'put',
              headers: {
			  "Access-Control-Allow-Origin": "http://localhost:8080",
			  "Accept": "application/json",
			  "Content-Type": "application/json"
			},
            body: JSON.stringify(dataVar[editIdx])
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('Created Gist:',data);
        });        
    // normal view
        //eslint-disable-next-line
        let arr = [...currentlyEditing];
        arr[editIdx] = !currentlyEditing[editIdx];
        setCurrentlyEditing(arr);
    }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">FirstName</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Matriculation Number</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {dataVar.map((d, index) => (
                            < StyledTableRow key={index} >
                                { // eslint-disable-next-line
                                    //if in the editing mode enables the textfield else show the Tablecell as it is
                                    currentlyEditing[index] ? (

                                        <TextField
                                            name="firstName"
                                            onChange={(e) => handleChange(e, index)}
                                            value={currentlyEditingObject.firstName}
                                        />
                                    ) : (
                                            <StyledTableCell align="left">{d.firstName}</StyledTableCell>
                                        )}
                                {
                                    currentlyEditing[index] ? (
                                        <TextField
                                            name="lastName"
                                            onChange={(e) => handleChange(e, index)}
                                            value={currentlyEditingObject.lastName}

                                        />) : (
                                            <StyledTableCell align="right">{d.lastName}</StyledTableCell>
                                        )}
                                {
                                    currentlyEditing[index] ? (
                                        <TextField
                                            name="addressRes"
                                            onChange={(e) => handleChange(e, index)}
                                            value={currentlyEditingObject.addressRes}
                                        />) : (
                                            <StyledTableCell align="right">{d.addressRes}</StyledTableCell>
                                        )}
                                    
                               <StyledTableCell align="right">{d.matriculationNumber}</StyledTableCell>

                                {currentlyEditing[index] ? (
                                    <StyledTableCell align="center">
                                        <Button id={index} variant="contained" color="inherit" onClick={() => stopEditing(index)}>
                                            <DoneIcon />
                                        </Button>
                                    </StyledTableCell>
                                ) : (
                                        <StyledTableCell align="center">
                                            <Button id={index} variant="contained" color="inherit" onClick={() => { handleClick(index) }} > Edit Data</Button>
                                        </StyledTableCell>
                                    )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}