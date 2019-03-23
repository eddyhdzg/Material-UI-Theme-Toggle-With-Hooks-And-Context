import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  withStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import { Consumer } from "./context";

import styles from "./styles";

const App = props => {
  let initialState = {
    exercises: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" }
    ],
    title: ""
  };

  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleCreate = e => {
    e.preventDefault();

    if (state.title) {
      setState({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ""
      });
    }
  };

  const handleDelete = id => {
    let auxExercises = exercises.filter(ex => ex.id !== id);

    setState({ exercises: auxExercises });
  };

  const { title, exercises } = state;
  const { classes } = props;

  return (
    <Consumer>
      {({ options, handleConfigVarChange, ...configVars }) => (
        <Paper className={classes.root}>
          <Typography variant="display1" align="center" gutterBottom>
            Exercises
          </Typography>
          <header className={classes.header}>
            {Object.entries(options).map(([variable, defaults]) => (
              <FormControl key={variable}>
                <Select
                  name={variable}
                  value={configVars[variable]}
                  onChange={handleConfigVarChange(variable)}
                >
                  {defaults.map(value => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </header>
          <form onSubmit={handleCreate} className={classes.form}>
            <TextField
              name="title"
              label="Exercise"
              value={title}
              onChange={handleChange}
              margin="normal"
            />
            <Button type="submit" color="primary" variant="raised">
              Create
            </Button>
          </form>
          <List>
            {exercises.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton color="primary" onClick={() => handleDelete(id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Consumer>
  );
};

export default withStyles(styles)(App);
