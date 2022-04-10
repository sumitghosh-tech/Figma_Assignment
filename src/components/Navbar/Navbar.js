/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import useStyles from "./styles";
import PanToolIcon from "@material-ui/icons/PanTool";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.left}>
        <FormControl className={classes.form} size="small" color="white">
          <Select color="white">
            <MenuItem value={1}>Page 1</MenuItem>
            <MenuItem value={2}>Page 2</MenuItem>
          </Select>
        </FormControl>
        <PanToolIcon color="white" backgroundColor="blue" />
      </div>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h4" align="center">
          Untitled
        </Typography>
      </div>

      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          <Avatar className={classes.gap}>A</Avatar>
          <Avatar className={classes.gap}>V</Avatar>
          <Avatar className={classes.gap}>A</Avatar>

          <Button className={classes.gap} variant="outlined" color="secondary">
            Log in
          </Button>
          <svg
            class="svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 14.098l.765.478 8 5 .678.424-.678.424-8 5-.765.478V14.098zm1 1.804v8.196L24.557 20 18 15.902z"
              fill-rule="evenodd"
              fill-opacity="1"
              fill="#fff"
              stroke="none"
            ></path>
          </svg>
          <FormControl className={classes.form} size="small" color="white">
            <Select color="white">
              <MenuItem value={1}>50%</MenuItem>
              <MenuItem value={2}>25%</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
