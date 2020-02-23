import React, { Fragment, useState, useContext } from 'react';
import { FormControl, FormLabel, Input, InputLabel, TextField, Button, Grid } from '@material-ui/core';
import DatePicker from 'react-date-picker';
import getDB, { addItem } from '../../../../indexed-db-context';
function AddSpeech(_, context) {
  const [state, setState] = useState({
    author: {
      name: '',
    },
    keywords: '',
    date: new Date(),
    isFormValid: true,
  });
  let compareDate = (i1, i2) => {
    let y1 = i1.getYear();
    let m1 = i1.getMonth();
    let d1 = i1.getDate();
    let y2 = i2.getYear();
    let m2 = i2.getMonth();
    let d2 = i2.getDate();
    if (y1 < y2) {
      return -1;
    } else if (y1 > y2) {
      return 1;
    }
    if (m1 < m2) {
      return -1;
    } else if (m1 > m2) {
      return 1;
    }
    if (d1 < d2) {
      return -1;
    } else if (d1 > d2) {
      return 1;
    }
    // if (d1 === d2) {
    return 0;
    // }
    // return 1;
  };
  let onChange = key => e => {
    console.log(e);
    let isFormValid = true;
    let value = (e && e.target && e.target.value) || e;
    let isValid = true;
    switch (key.split('.')[0]) {
      case 'author':
        isValid = 3 < value.length < 20;
        isFormValid + isFormValid && isValid;
        value = {
          [key.split('.')[1]]: value,
        };
        key = key.split('.')[0];
        break;
      case 'keywords':
        let isValid = /^[a-zA-Z0-9, ]*$/.test(value);
        isFormValid + isFormValid && isValid;
        break;
      default:
        break;
    }
    setState({
      ...state,
      [key]: value,
    });
  };
  let submit = async () => {
    try {
      let speeches = JSON.parse(localStorage.speeches || '[]');
      let speech = { ...state };
      delete speech['isFormValid'];
      speeches.push(speech);
      await addItem(speech, 'speeches')
      alert('saved successfully');
      
    } catch (error) {
      alert('Something went wrong!')
    }
  };
  let validation = () => {
    let allPresent = !!state.date && !!state.keywords.length && !!state.author.name;
    let isNameValid = !!state.name && state.name.length > 2 && state.name.length < 20;
    let isTextValid = !!state.text && state.text.length > 50;
    return allPresent && isNameValid && isTextValid;
  };
  return (
    <Fragment>
      <div>Add speeches</div>
      <form>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <Input fullWidth onChange={onChange('author.name')} value={state.author.name} placeholder="Who is the speaker?"></Input>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <Input fullWidth onChange={onChange('keywords')} value={state.keywords} placeholder="Keywords (Comma Seperated)"></Input>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <DatePicker fullWidth onChange={onChange('date')} value={state.date} maxDate={new Date()} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <Input
                fullWidth
                multiline
                rows="10"
                onChange={onChange('text')}
                value={state.text}
                placeholder="Keywords (Comma Seperated)"
              ></Input>
            </FormControl>
          </Grid>
        </Grid>
        <Button onClick={submit}>Submit</Button>
      </form>
    </Fragment>
  );
}

export default AddSpeech;
