import { React, useState } from "react";
import {
  Button,
  Modal,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function AdminItem() {
  const [modalShow, setModalShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [value, setValue] = useState("Select the item category");
  const [data, setData] = useState({});
  const [arrData, setArrData] = useState([]);
  const handleSelect = (e) => {
    setValue(e);
  };
  const handleChange = (e) => {
    setItemName(e.target.value);
  };
  console.log(itemName);
  const handleChangePrice = (e) => {
    setitemPrice(e.target.value);
  };
  const handleClose = (event) => {
    setModalShow(false);
  };

  const mySubmitHandler = (event, resetForm) => {
    setModalShow(false);

    data.category = value;
    data.name = itemName;
    data.price = itemPrice;
    // setArrData(...arrData, [data]);
    arrData.push(data);
    Swal.fire("Good job!", "Submit data sucessfully", "success");
    // event.target.reset();
    setitemPrice("");
    setValue("Select the item category");
    setItemName("");
  };
  console.log(arrData);
  return (
    <div>
      <div style={{ float: "right" }}>
        {" "}
        <Button
          variant="primary"
          size="lg"
          onClick={() => setModalShow(true)}
          active
        >
          Add Item {"  "}
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Modal
          show={modalShow}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Item Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DropdownButton
              id="dropdown-basic-button"
              title={value}
              onSelect={handleSelect}
              value={value}
            >
              <Dropdown.Item eventKey="Starters">Starters</Dropdown.Item>
              <Dropdown.Item eventKey="Chinese">Chinese</Dropdown.Item>
              <Dropdown.Item eventKey="Veg Main Course">
                {" "}
                Veg Main Course
              </Dropdown.Item>
              <Dropdown.Item eventKey="Drink">Drink</Dropdown.Item>
              <Dropdown.Item eventKey="Salad">Salad</Dropdown.Item>
              <Dropdown.Item eventKey="Dessert">Dessert</Dropdown.Item>
              <Dropdown.Item eventKey="Non-Veg Main Course">
                Non-Veg Main Course
              </Dropdown.Item>
            </DropdownButton>

            <InputGroup style={{ marginTop: "1rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text>Item Name :</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                onChange={handleChange}
                value={itemName}
              />
            </InputGroup>

            <InputGroup style={{ marginTop: "1rem" }}>
              <InputGroup.Prepend>
                <InputGroup.Text>Item Price :</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                onChange={handleChangePrice}
                value={itemPrice}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={mySubmitHandler}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        {data.category === "Drink" ? (
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminItem;
