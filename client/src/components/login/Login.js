import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./login.css";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { setUserSession } from "../shared/utils/common";

function Copyright() {
  return (
    <Typography variant="body2" color="black" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        FastServe
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "35%",
  },
}));

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [userType, setuserType] = React.useState("");

  const handleUserType = (event) => {
    setuserType(event.target.value);
  };

  const handleInput = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form);
    if (userType === "Admin") {
      axios
        .post("http://localhost:4000/admin-login/", form)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setUserSession(res.data.type);
            history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Incorrect Username & Password",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "danger",
            // confirmButtonText: `Save`,
            // denyButtonText: `Don't save`,
            timer: 2000,
          });
        });
    }
    if (userType === "Employee") {
      axios
        .post("http://localhost:4000/employee-login/", form)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setUserSession(res.data.type);
            res.data.type === "biller" && history.push("/biller-home");
            res.data.type === "waiter" && history.push("/waiter-place-order");
            res.data.type === "kitchen" && history.push("/kitchen-home");
            // res.data.type === "biller" && history.push("/billerhome");
            // history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Incorrect Username & Password",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "danger",
            // confirmButtonText: `Save`,
            // denyButtonText: `Don't save`,
            timer: 2000,
          });
        });
    }
  };
  return (
    <div>
      <Container className="login-form">
        <Row>
          {/* <Col xs={6} md={4}> */}
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <form className={classes.form} noValidate>
                <RadioGroup
                  aria-label="userType"
                  name="userType"
                  value={userType}
                  onChange={handleUserType}
                  autofocus
                  // className="type"
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="Admin"
                    control={<Radio color="primary" />}
                    label="Admin"
                  />
                  <FormControlLabel
                    value="Employee"
                    control={<Radio color="primary" />}
                    label="Employee"
                  />
                </RadioGroup>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  className="login"
                  label="User Name"
                  name="username"
                  autoComplete="email"
                  onChange={handleInput}
                  // value={userName}
                  // onClick={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  className="login"
                  autoComplete="current-password"
                  onChange={handleInput}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </form>
            </div>
            <Box>
              <Copyright />
            </Box>
          </Container>
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};
export default Login;
