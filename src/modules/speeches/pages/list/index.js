import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody, Input } from '@material-ui/core';
let speeches = JSON.parse(localStorage.speeches || '[]');;
speeches = speeches.map(s => {s.date = new Date(s.date); return s})
function ListSpeeches() {
  const [searchVal, setSearchVal] = useState('');
    let onSearchChange = (e) => {
      let value = e.target.value;
      setSearchVal(value);
    }
  return (
    <Fragment>
      <Input onChange={onSearchChange} value={searchVal} placeholder={"Search by author"}></Input>
      <div>List speeches</div>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Keywords</TableCell>
              <TableCell align="right">Speech Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {speeches.filter(speech => speech.author.name.includes(searchVal)).map(speech => (
              <TableRow >
                <TableCell component="th" scope="speech">
                  {(speech.author && speech.author.name) || ''}
                </TableCell>
                <TableCell align="right">{speech.date.toLocaleDateString()}</TableCell>
                <TableCell align="right">{speech.keywords.toString()}</TableCell>
                <TableCell align="right">{speech.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Fragment>
  );
}

export default ListSpeeches;
