import { React, useState, useEffect } from "react";
import {
  Button,
  Modal,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Accordion,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { itemData } from "../../StaticData/itemData";

const AddItem = () => {
  // useEffect(() => {
  //   // if (itemData.breakfast && itemData.breakfast.length > 0) {
  //   //   {
  //   //     itemData.breakfast.map((a) => console.log(a.name));
  //   //   }
  //   // } else if (itemData.dessert && itemData.dessert.length > 0) {
  //   //   {
  //   //     itemData.dessert.map((a) => console.log(a.name));
  //   //   }
  //   // }
  //   const keys = Object.keys(itemData);
  //   console.log(keys);
  //   Object.keys(itemData).map((a) => console.log(itemData.a));
  //   // keys.map((a) => itemData.a.map((val) => console.log(val)));
  //   // keys.map((a) => itemData.a.map((val) => console.log(val)));
  //   console.log(itemData.bevergaes);

  //   if (itemData.dessert && itemData.dessert.length > 0) {
  //     console.log(itemData.dessert);
  //   }
  // });
  const [modalShow, setModalShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [value, setValue] = useState("Select the item category");
  const [value1, setValue1] = useState("Types of Non-Veg Main Course");
  const [value2, setValue2] = useState(" Types of Veg Course");
  const [arrData, setArrData] = useState([]);
  const [newsortedArr, SetNewSortedArray] = useState({});
  const handleSelect = (e) => {
    setValue(e);
  };
  const handleSelect1 = (e) => {
    setValue1(e);
  };
  const handleSelect2 = (e) => {
    setValue2(e);
  };
  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setitemPrice(e.target.value);
  };
  const handleClose = (event) => {
    setModalShow(false);
  };

  const mySubmitHandler = (event, resetForm) => {
    setModalShow(false);
    let data = {};
    data.category = value;
    data.name = itemName;
    data.price = itemPrice;
    if (value === "Veg Main Course") {
      data.subcategory = value2;
    } else if (value === "Non-Veg Main Course") {
      data.subcategory = value1;
    }
    setArrData([...arrData, data]);

    Swal.fire("Good job!", "Submit data sucessfully", "success");

    setitemPrice("");
    setValue("Select the item category");
    setItemName("");
    setValue1("Types of Non-Veg Main Course");
    setValue2("Types of Veg Course");
  };

  const addMoreItem = () => {
    setitemPrice("");
    setValue("Select the item category");
    setItemName("");
    setValue1("Types of Non-Veg Main Course");
    setValue2("Types of Veg Course");
    let data = {};
    data.category = value;
    data.name = itemName;
    data.price = itemPrice;
    if (value === "Veg Main Course") {
      data.subcategory = value2;
    } else if (value === "Non-Veg Main Course") {
      data.subcategory = value1;
    }
    setArrData([...arrData, data]);
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
                Veg Main Course
              </Dropdown.Item>
              <Dropdown.Item eventKey="Drink">Drink</Dropdown.Item>
              <Dropdown.Item eventKey="Salad">Salad</Dropdown.Item>
              <Dropdown.Item eventKey="Dessert">Dessert</Dropdown.Item>
              <Dropdown.Item eventKey="Non-Veg Main Course">
                Non-Veg Main Course
              </Dropdown.Item>
            </DropdownButton>
            {value === "Non-Veg Main Course" ? (
              <DropdownButton
                id="dropdown-basic-button"
                title={value1}
                onSelect={handleSelect1}
                value={value1}
              >
                <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                <Dropdown.Item eventKey="Mutton">Mutton</Dropdown.Item>
                <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
              </DropdownButton>
            ) : value === "Veg Main Course" ? (
              <DropdownButton
                id="dropdown-basic-button"
                title={value2}
                onSelect={handleSelect2}
                value={value2}
              >
                <Dropdown.Item eventKey="Paneer">Paneer</Dropdown.Item>
                <Dropdown.Item eventKey="Mushroom">Mushroom</Dropdown.Item>
                <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
              </DropdownButton>
            ) : (
              ""
            )}

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
            <Button variant="primary" type="submit" onClick={addMoreItem}>
              Add more item
            </Button>
            <Button variant="primary" type="submit" onClick={mySubmitHandler}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div>{itemData[0].map((value) => console.log(value))}</div> */}
      {/* <div>
        {itemData.breakfast && itemData.breakfast.length > 0
          ? itemData.breakfast.map((a) => console.log(a.name))
          : itemData.dessert && itemData.dessert.length > 0
          ? itemData.dessert.map((a) => console.log(a.name))
          : ""}
      </div> */}
      <div>
        <h2>Menu Item</h2>
        <div style={{ marginTop: "40px" }}>
          <Row>
            <Col xs={12} md={6} lg={3}>
              {itemData.breakfast && itemData.breakfast.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th colSpan="3">Breakfast</th>
                    </tr>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.breakfast.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.bevergaes && itemData.bevergaes.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.bevergaes.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.dessert && itemData.dessert.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.dessert.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.rice && itemData.rice.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.rice.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.dal && itemData.dal.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.dal.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.nonveg && itemData.nonveg.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.nonveg.chicken.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.nonveg.chicken && itemData.nonveg.chicken.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.nonveg.chicken.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
            <Col xs={12} md={6} lg={3}>
              {itemData.nonveg.mutton && itemData.nonveg.mutton.length > 0 ? (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Sl no.</th>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {itemData.nonveg.mutton.map((val, index) => (
                    <tbody>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>
        {console.log(itemData.nonveg.chicken)}
      </div>
    </div>
  );
};

export default AddItem;
