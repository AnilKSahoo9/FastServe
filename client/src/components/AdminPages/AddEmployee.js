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
const AddEmployee = () => {
  return (
    <div className="inner-container">
      <span
        className="border border-info rounded m-0 p-5"
        style={{
          width: "90%",
          height: "10%",
          margin: "0.5rem",
          color: "danger",
          display: "inline-block",
        }}
      >
        <Form>
          <FormGroup row className="mx-0 ">
            <Label for="Select">TYPE OF USER</Label>
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
              NAME
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Email" sm={2}>
              EMAIL
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Mobile" sm={2}>
              MOBILE
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="Mobile"
                id="Mobile"
                placeholder="Enter your Mobile no."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="username" sm={2}>
              USERNAME
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="uname"
                id="uname"
                placeholder="Enter username "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>
              PASSWORD
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Date" sm={2}>
              DATE OF JOINING
            </Label>
            <Col sm={10}>
              <Input
                type="Date"
                name="Date"
                id="Date"
                placeholder="Enter Joining Date"
              />
            </Col>
          </FormGroup>
          <Button>Create User</Button>
        </Form>
      </span>
    </div>
  );
};
export default AddEmployee;
