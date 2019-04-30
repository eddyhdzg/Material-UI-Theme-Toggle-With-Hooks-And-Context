const flex = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-evenly"
};

const styles = theme => ({
  root: {
    transition: "background-color .225s cubic-bezier(.4, 0, 1, 1)",

    margin: `${theme.spacing.unit * 8}px auto`,
    padding: theme.spacing.unit * 2,
    maxWidth: 400
  },
  header: {
    ...flex,
    marginTop: theme.spacing.unit * 2
  },
  form: {
    ...flex,
    marginBottom: theme.spacing.unit
  }
});

export default styles;
