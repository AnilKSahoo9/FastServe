import React, { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  row,
} from "reactstrap";
import Swal from "sweetalert2";

const AddEmployee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Pnumber = document.getElementById('Mobile').value;
    var username = document.getElementById('uname').value;
    var Pword = document.getElementById('password').value;
    var Joindate = document.getElementById('Date').value;
    if(name == ""){
      document.getElementById('fname').innerHTML=" ** Please fill Your name";   
      return false;
  }
  if((name.length <= 2) || (name.length>20)){
      document.getElementById('fname').innerHTML=" ** Name must be between 2 to 20";   
      return false;
  }
  if(email == ""){
    document.getElementById('emailid').innerHTML=" ** Please fill Your emailId";   
    return false;
}
if(Pnumber == ""){
  document.getElementById('phone').innerHTML=" ** Please fill the Phone number";   
  return false;
}
if(username == ""){
  document.getElementById('username').innerHTML=" ** Please fill Username";   
  return false;
}
if((username.length <= 2) || (username.length>20)){
  document.getElementById('username').innerHTML=" ** UserName must be between 2 to 20";   
  return false;
}
if(Pword == ""){
  document.getElementById('Password').innerHTML=" ** Please fill the Password";   
  return false;
}
if(Joindate == ""){
  document.getElementById('date').innerHTML=" ** Please fill the Joining Date";   
  return false;
}

    Swal.fire({
      position: "center",
      icon: "success",
      title: "New User has been added",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div
      className="inner-container"
      style={{
        width: "70%",
        margin: "3rem",
        backgroundColor: "lightgray",
        marginLeft: "15%",
        borderTop: "solid",
        borderColor: "darkgreen",
      }}
    >
      <span
        className="border border-info rounded m-0 p-5"
        style={{
          width: "100%",
          height: "100%",
          display: "inline-block",
        }}
      >
        <div>
          <Form>
            {/* className="mx-3 " */}
            <FormGroup row>
              <Label for="Select" sm={2}>
                TYPE OF USER
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="Select">
                  <option>Waiters</option>
                  <option>Kichens</option>
                  <option>Billers</option>
                </Input>
                
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Name" sm={2}>
                *NAME
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  autocomplete="off"
                />
                <span id="fname" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Email" sm={2}>
                *EMAIL
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
                <span id="emailid" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Mobile" sm={2}>
                *MOBILE
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="Mobile"
                  id="Mobile"
                  placeholder="Enter your Mobile no."
                  autocomplete="off"
                />
               <span id="phone" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="username" sm={2}>
                *USERNAME
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="uname"
                  id="uname"
                  placeholder="Enter username "
                  autocomplete="off"
                />
                 <span id="username" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                *PASSWORD
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  autocomplete="off"
                />
                <span id="Password" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Date" sm={2}>
                * DATE OF JOINING
              </Label>
              <Col sm={10}>
                <Input
                  type="Date"
                  name="Date"
                  id="Date"
                  placeholder="Enter Joining Date"
                />
                <span id="date" class="spanname"></span>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="File" sm={2}>
                DOCUMENTS
              </Label>
              <Col sm={10}>
                <Input
                  type="file"
                  name="file"
                  id="file"
                 
                />
              </Col>
            </FormGroup>
            <Button color="success" onClick={handleSubmit}>
              Create User
            </Button>
          </Form>
        </div>
      </span>
    </div>
  );
};

export default AddEmployee;
