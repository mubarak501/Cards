import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    margin: theme.spacing(1),
    width: "30ch"
  },
  inputField: {},
  inputFieldDiv: {}
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.inputFieldDiv}>
      <TextField
        className={classes.searchBox}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={props.onChange}
        value={props.value}
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.inputField} position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}
