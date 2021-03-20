import React, { useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Carousel,
} from "react-bootstrap";
import wall1 from "./image/wall1.jfif";
import wall2 from "./image/wall2.jfif";
import wall3 from "./image/wall3.jfif";
import wall4 from "./image/wall4.jfif";
import wall5 from "./image/wall5.jfif";
import "./login.css";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { Swal } from "sweetalert2";
import Swal from "sweetalert2";

import { useHistory } from "react-router";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        GetDev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  },
}));

export default function Login() {
  const classes = useStyles();
  const credentials = { email: "fastserve@gmail.com", password: "fastserve" };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [userName, setUserName] = useState("");
  // const handleChange = (e) => {
  //   setUserName(e.target.value);
  // };
  // console.log(userName);
  const handleEmail = (event) => {
    setForm((prev) => ({ ...prev, email: event.target.value }));
  };
  const handlePassword = (event) => {
    setForm((prev) => ({ ...prev, password: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.email === credentials.email &&
      form.password === credentials.password
    ) {
      Swal.fire({
        title: "Login Successful",
        showConfirmButton: false,
        icon: "success",
        // confirmButtonText: `Save`,
        // denyButtonText: `Don't save`,
        timer: 2000,
      });
      window.location.replace("/home");
    } else {
      Swal.fire({
        title: "Incorrect Email & Password",
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        icon: "danger",
        // confirmButtonText: `Save`,
        // denyButtonText: `Don't save`,
        // timer: 2000,
      });
    }
  };
  return (
    <div>
      <Container fluid className="box">
        <Row>
          <Col xs={12} md={8}>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img src={wall1} className="slideimg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={wall2} className="slideimg" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={wall3} className="slideimg" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={wall4} className="slideimg" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img src={wall5} className="slideimg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6} md={4}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>

                <form className={classes.form} noValidate>
                  <FormControlLabel
                    control={<Checkbox value="admin" color="primary" />}
                    label="Admin"
                  />

                  <FormControlLabel
                    control={<Checkbox value="employee" color="primary" />}
                    label="Hotel Employee"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="User Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleEmail}
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
                    id="password"
                    autoComplete="current-password"
                    onChange={handlePassword}
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
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
