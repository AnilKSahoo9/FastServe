import { React, useState, useEffect } from "react";
import axios from "axios"
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
// import { menuList } from "../../StaticData/menuList";
import breakfast from "./image/breakfast.webp";
import dessert from "./image/ic.jpg";
// import bevergaes from "./image/drink.jpg";
import rice from "./image/fried-rice.jpg";
import dal from "./image/dal.jpg";
import "../../css/AdminStyles.css";
const AddItem = () => {
  const [modalShow, setModalShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [value, setValue] = useState("Select the Item Category");
  const [nonveg, setNonveg] = useState("Types of Non-Veg Main Courses");
  const [veg, setVeg] = useState(" Types of Veg Courses");
  const [itemsArray, setItemsArray] = useState([]);
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    const fetchMenuList = () => {
      axios
        .get(
          `http://localhost:4000/showitems/`,
        ).then(res => {
          console.log(res)
          setMenuList(res.data)
        }).catch(err => console.log(err))
    }
    fetchMenuList()
    // return () => {
    //   cleanup
    // }
  }, [])
  // const [newsortedArr, SetNewSortedArray] = useState({});
  const handleCategoryHandler = (e) => {
    setValue(e);
  };
  const handleSubcategoryhandler = (e) => {
    console.log(value)
    value === "Veg" && setVeg(e);
    value === "NonVeg" && setNonveg(e);
  };
  // const handleSubcategoryhandler = (e) => {
  //   setVeg(e);
  // };
  const handleItemChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(e.target.value);
  };
  const handleClose = (event) => {
    setModalShow(false);
  };


  const addMoreItemHandler = () => {
    setValue("Select the Item Category");
    setItemName("");
    setItemPrice("");
    setNonveg("Types of Non-Veg Main Courses");
    setVeg("Types of Veg Courses");
    let data = {};
    data.category = value;
    data.name = itemName;
    data.price = JSON.parse(itemPrice);
    if (value === "Veg") {
      data.subcategory = veg;
    } else if (value === "NonVeg") {
      data.subcategory = nonveg;
    }
    setItemsArray([...itemsArray, data]);
    setValue("Select the Item Category");
    setItemName("");
    setItemPrice("");
    setNonveg("Types of Non-Veg Main Courses");
    setVeg("Types of Veg Courses");
  };

  const submitHandler = (event) => {
    event.preventDefault()
    setModalShow(false);
    let data = {};
    data.category = value;
    data.name = itemName;
    data.price = JSON.parse(itemPrice);
    if (value === "Veg") {
      data.subcategory = veg;
    } else if (value === "NonVeg") {
      data.subcategory = nonveg;
    }
    if (!["Breakfast", "Rice", "Dal", "Desserts", "NonVeg", "Veg"].includes(data.category)) {
      Swal.fire({
        title: "Select The Category",
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton: true,
        icon: "error",
        timer: 1000,
      });
    } else {
      var payload = [...itemsArray, data];
      setItemsArray([...itemsArray, data]);
      // if (payload.find(item => !["Breakfast", "Rice", "Dal", "Dessert", "NonVeg", "Veg"].includes(item.category) && item.name !== "" && item.price !== "")) {
      axios
        .post(
          `http://localhost:4000/additems/`,
          //JSON.stringify(payload),
          payload,
          {
            header: {
              "Content-type":
                "application/json,application/x-www-form-urlencoded, charset=UTF-8",
            },
          }
        )
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            console.log(response.data);
            Swal.fire({
              title: "Menu Items Added",
              showDenyButton: false,
              showCancelButton: false,
              showConfirmButton: false,
              icon: "success",
              timer: 1000,
            });
            setValue("Select the Item Category");
            setItemName("");
            setItemPrice("");
            setNonveg("Types of Non-Veg Main Courses");
            setVeg("Types of Veg Courses");
            setItemsArray([])
          }
        }).catch(err => console.log(err))
      // } else {
      //   Swal.fire({
      //     title: "Missed Some Details",
      //     showDenyButton: false,
      //     showCancelButton: false,
      //     showConfirmButton: true,
      //     icon: "error",
      //     timer: 1000,
      //   });
      // }
    }
    console.log(payload);
  };


  console.log(itemsArray);
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
            Add Menu Items {"  "}
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Modal
            show={modalShow}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Item Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DropdownButton
                id="dropdown-basic-button"
                title={value}
                onSelect={handleCategoryHandler}
                value={value}
              >
                <Dropdown.Item eventKey="Breakfast">Breakfast</Dropdown.Item>
                {/* <Dropdown.Item eventKey="Chinese">Chinese</Dropdown.Item> */}
                <Dropdown.Item eventKey="Rice">Rice</Dropdown.Item>
                <Dropdown.Item eventKey="Dal">Dal</Dropdown.Item>
                <Dropdown.Item eventKey="Desserts">Desserts</Dropdown.Item>
                <Dropdown.Item eventKey="Veg">
                  Veg Main Courses
                </Dropdown.Item>
                <Dropdown.Item eventKey="NonVeg">
                  Non-Veg Main Courses
                </Dropdown.Item>
              </DropdownButton>
              {value === "NonVeg" ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={nonveg}
                  onSelect={handleSubcategoryhandler}
                  value={nonveg}
                >
                  <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                  <Dropdown.Item eventKey="Mutton">Mutton</Dropdown.Item>
                  <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
                </DropdownButton>
              ) : value === "Veg" ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={veg}
                  onSelect={handleSubcategoryhandler}
                  value={veg}
                >
                  <Dropdown.Item eventKey="Paneer">Paneer</Dropdown.Item>
                  <Dropdown.Item eventKey="Mushroom">Mushroom</Dropdown.Item>
                  {/* <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item> */}
                </DropdownButton>
              ) : (
                ""
              )}

              <InputGroup style={{ marginTop: "1rem" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Item Name :</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  // as="text"
                  type="text"
                  aria-label="With textarea"
                  onChange={handleItemChange}
                  value={itemName}
                />
              </InputGroup>

              <InputGroup style={{ marginTop: "1rem" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text>Item Price :</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  // as="number"
                  type="number"
                  aria-label="With textarea"
                  onChange={handlePriceChange}
                  value={itemPrice}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="additem_btnstyle"
                type="submit"
                onClick={addMoreItemHandler}
              >
                Add more items
              </Button>
              <Button
                className="additem_btnstyle"
                type="submit"
                onClick={submitHandler}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div>
          <h2 className="heading">
            <b>Menu Items </b>
          </h2>
          <div className="additembg">
            <Row>
              <Col xs={6}>
                {menuList.Breakfast && menuList.Breakfast.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--------- Breakfast ---------</span>
                    <Row>
                      <Col className="menu-column">
                        {menuList.Breakfast.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              Rs. {val.price}
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
                {menuList.Dal && menuList.Dal.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--------- Dal ---------</span>
                    <Row>
                      <Col className="menu-column">
                        {menuList.Dal.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>

                            <span className="price">
                              Rs. {val.price}
                            </span>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <Image src={dal} className="image"></Image>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col xs={6}>
                {menuList.Desserts && menuList.Desserts.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--------- Desserts ---------</span>
                    <Row>
                      <Col className="menu-column">
                        {menuList.Desserts.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              Rs. {val.price}
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
                {menuList.Rice && menuList.Rice.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--------- Rice ---------</span>
                    <Row>
                      <Col className="menu-column">
                        {menuList.Rice.map((val, index) => (
                          <div className="menu-value">
                            <span className="val-item">{val.name}</span>
                            <span className="price">
                              Rs. {val.price}
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
              {/* <Col xs={6}>
                {menuList.nonveg.chicken &&
                  menuList.nonveg.chicken.length > 0 ? (
                  <div className="menu-divison">
                    <span className="item-name">--- Chicken ---</span>
                    <Row>
                      <Col className="menu-column">
                        {menuList.nonveg.chicken.map((val, index) => (
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
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
