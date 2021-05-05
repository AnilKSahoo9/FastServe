import { React, useState } from "react";
import {
  Button,
  Modal,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { itemData } from "../../StaticData/itemData";
import breakfast from "./image/breakfast.webp";
import dessert from "./image/ic.jpg";
import bevergaes from "./image/drink.jpg";
import rice from "./image/fried-rice.jpg";
import chicken from "./image/chicken.jpg";
import "../../css/AdminStyles.css";
const AddItem = () => {
  const [modalShow, setModalShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [value, setValue] = useState("Select the item category");
  const [value1, setValue1] = useState("Types of Non-Veg Main Course");
  const [value2, setValue2] = useState(" Types of Veg Course");
  const [arrData, setArrData] = useState([]);
  // const [newsortedArr, SetNewSortedArray] = useState({});
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
  // const postData = () => {
  //   const payload = {
  //     switch()
  //     breakfast:
  //     dessert:
  //     rice:

  //   };
  //   axios
  //     .post(
  //       `http://localhost:4000/additems/`,
  //       //JSON.stringify(payload),
  //       payload,
  //       {
  //         header: {
  //           "Content-type":
  //             "application/json,application/x-www-form-urlencoded, charset=UTF-8",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status === 200) {

  //         console.log(response.data);

  //       }

  // const postData =()=>{
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React POST Request Example' })
  // };
  // fetch('https://jsonplaceholder.typicode.com/invalid-url', requestOptions)
  //     .then(async response => {
  //         const data = await response.json();

  //         // check for error response
  //         if (!response.ok) {
  //             // get error message from body or default to response status
  //             const error = (data && data.message) || response.status;
  //             return Promise.reject(error);
  //         }

  //         this.setState({ postId: data.id })
  //     })
  //     .catch(error => {
  //         this.setState({ errorMessage: error.toString() });
  //         console.error('There was an error!', error);
  //     });
  // }

  console.log(arrData);
  return (
    <div className="inner-container">
      <div className="admin_additems">
        <div style={{ float: "right" }}>
          {" "}
          <Button
            className="additem_btnstyle"
            size="lg"
            onClick={() => setModalShow(true)}
            // active
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
              <Button
                className="additem_btnstyle"
                type="submit"
                onClick={addMoreItem}
              >
                Add more item
              </Button>
              <Button
                className="additem_btnstyle"
                type="submit"
                onClick={mySubmitHandler}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div>
          <h2 className="heading">
            <b>Menu Item </b>
          </h2>
          <div className="additembg">
            <Row>
              <Col xs={6}>
                {itemData.breakfast && itemData.breakfast.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Breakfast ---</span>
                    <Row>
                      <Col className="menu-column">
                        {itemData.breakfast.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              ----------- ${val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={breakfast} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col xs={6}>
                {itemData.bevergaes && itemData.bevergaes.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Beverages ---</span>
                    <Row>
                      <Col className="menu-column">
                        {itemData.bevergaes.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>

                            <span className="price">
                              ----------- ${val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={bevergaes} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col xs={6}>
                {itemData.dessert && itemData.dessert.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Dessert ---</span>
                    <Row>
                      <Col className="menu-column">
                        {itemData.dessert.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              ----------- ${val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={dessert} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col xs={6}>
                {itemData.rice && itemData.rice.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Rice ---</span>
                    <Row>
                      <Col className="menu-column">
                        {itemData.rice.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              ----------- ${val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={rice} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col xs={6}>
                {itemData.nonveg.chicken &&
                itemData.nonveg.chicken.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Chicken ---</span>
                    <Row>
                      <Col className="menu-column">
                        {itemData.nonveg.chicken.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              ----------- ${val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={chicken} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
