import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    console.log(props.details)
    useEffect(() => {
            setDataVar(props.details)
        }, [props.details]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">FirstName</StyledTableCell>
            <StyledTableCell align="right">LastName</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Matriculation Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataVar.map((d,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">{d.firstName}</StyledTableCell>
              <StyledTableCell align="right">{d.lastName}</StyledTableCell>
              <StyledTableCell align="right">{d.addressRes}</StyledTableCell>
              <StyledTableCell align="right">{d.matriculationNumber}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
