import * as React from "react";

import { Button, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const onClicked = () => {
    navigate("/Cale");
  };
  return (
    <>
      <div className={classes.box}>
        <div>
          <b>Welcome to Figma!</b> Create an account to edit and collaborate on
          this file.
        </div>
        <div className={classes.btn}>
          <GoogleLogin
            startIcon={<Icon />}
            render={(renderProps) => (
              <Button
                className={classes.google}
                color="primary"
                variant="outlined"
                size="small"
              >
                Continue with google
              </Button>
            )}
          />
          <Button
            className={classes.email}
            variant="contained"
            color="primary"
            size="small"
          >
            Sign Up With Email
          </Button>
        </div>
      </div>
      <div className={classes.box2}>
        <TextField label="Location" />
        <TextField label="Try" />
        <Button
          className={classes.gap}
          onClick={onClicked}
          variant="contained"
          size="small"
        >
          Date
        </Button>

        <Button variant="contained" color="primary" size="small">
          Search
        </Button>
      </div>
    </>
  );
};
export default Home;
