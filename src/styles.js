const flex = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-evenly"
};

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: `${unit * 3}px auto`,
    padding: unit * 2,
    maxWidth: 400
  },
  header: {
    ...flex,
    marginTop: unit * 2
  },
  form: {
    ...flex,
    marginBottom: unit
  }
});

export default styles;
