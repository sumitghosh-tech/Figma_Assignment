import * as React from "react";
import Calendar from "react-calendar";
import useStyles from "./styles";
const Calender = () => {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Calendar />
    </div>
  );
};

export default Calender;
