import React, { useState } from "react";
import axios from "axios";
import "./AdminStyles.css";
import {
  Col,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  // row,
} from "reactstrap";
import Swal from "sweetalert2";

const AddEmployee = () => {
  const [form, setForm] = useState({
    type: "",
    name: "",
    email: "",
    gender: "",
    username: "",
    password: "",
    doj: "",
    mobile: 0,
  });

  const handleInput = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setForm((prev) => ({ ...prev, mobile: JSON.parse(prev.mobile) }));
    axios
      .post("http://localhost:4000/addemployee/", form)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Employee has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "danger",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    //     var name = document.getElementById('name').value;
    //     var email = document.getElementById('email').value;
    //     var Pnumber = document.getElementById('Mobile').value;
    //     var username = document.getElementById('uname').value;
    //     var Pword = document.getElementById('password').value;
    //     var Joindate = document.getElementById('Date').value;
    //     if(name == ""){
    //       document.getElementById('fname').innerHTML=" ** Please fill Your name";
    //       return false;
    //   }
    //   if((name.length <= 2) || (name.length>20)){
    //       document.getElementById('fname').innerHTML=" ** Name must be between 2 to 20";
    //       return false;
    //   }
    //   if(email == ""){
    //     document.getElementById('emailid').innerHTML=" ** Please fill Your emailId";
    //     return false;
    // }
    // if(Pnumber == ""){
    //   document.getElementById('phone').innerHTML=" ** Please fill the Phone number";
    //   return false;
    // }
    // if(username == ""){
    //   document.getElementById('username').innerHTML=" ** Please fill Username";
    //   return false;
    // }
    // if((username.length <= 2) || (username.length>20)){
    //   document.getElementById('username').innerHTML=" ** UserName must be between 2 to 20";
    //   return false;
    // }
    // if(Pword == ""){
    //   document.getElementById('Password').innerHTML=" ** Please fill the Password";
    //   return false;
    // }
    // if(Joindate == ""){
    //   document.getElementById('date').innerHTML=" ** Please fill the Joining Date";
    //   return false;
    // }
  };
  console.log(form);
  return (
    <div className="table">
      <span className="border border-info rounded m-0 p-5">
        <div>
          <Form>
            {/* className="mx-3 " */}
            <FormGroup row>
              <Label for="Select" sm={2}>
                Type of Employee
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="type"
                  id="Select"
                  onChange={handleInput}
                >
                  <option>Select Type</option>
                  <option value="waiter">Waiter</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="biller">Biller</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Name" sm={2}>
                *Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  autocomplete="off"
                  onChange={handleInput}
                />
                <span id="fname" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Email" sm={2}>
                *Email Address
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  autocomplete="off"
                  onChange={handleInput}
                />
                <span id="emailid" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Select" sm={2}>
                *Gender
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="gender"
                  id="Select"
                  onChange={handleInput}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Mobile" sm={2}>
                *Mobile Number
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="mobile"
                  id="Mobile"
                  placeholder="Enter Mobile Number"
                  autocomplete="off"
                  onChange={handleInput}
                />
                <span id="phone" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="username" sm={2}>
                *Username
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="username"
                  id="uname"
                  placeholder="Enter Username"
                  autocomplete="off"
                  onChange={handleInput}
                />
                <span id="username" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                *Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  autocomplete="off"
                  onChange={handleInput}
                />
                <span id="Password" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Date" sm={2}>
                * Date of Joining
              </Label>
              <Col sm={10}>
                <Input
                  type="Date"
                  name="doj"
                  id="Date"
                  placeholder="Enter Joining Date"
                  onChange={handleInput}
                />
                <span id="date" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="File" sm={2}>
                Documents
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" id="file" />
              </Col>
            </FormGroup>
            <Button color="success" onClick={handleSubmit}>
              Create Employee
            </Button>
          </Form>
        </div>
      </span>
    </div>
  );
};

export default AddEmployee;
