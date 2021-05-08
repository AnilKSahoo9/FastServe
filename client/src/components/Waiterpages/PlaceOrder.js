import React, { useState, useEffect } from "react";
import axios from "axios"
import { Grid } from "@material-ui/core";
import { Card, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "../../css/WaiterStyle.css";
import {
  tablesList,
} from "../../StaticData/placeorderData";
import { getUserName } from ".././shared/utils/common";
import Swal from "sweetalert2";

const Waiter_Place_Order = () => {
  const userName = getUserName();
  const [showCategory, setShowCategory] = useState(false);
  const [showItems, setShowItems] = useState(false);

  const [categoryName, setCatgoryName] = useState("");
  const [menuList, setMenuList] = useState([])
  const [itemList, setItemList] = useState([]);
  const [orderData, setOrderData] = useState({
    tableNo: 0,
    waitername: userName,
    billStatus: "unpaid",
    orderStatus: "pending",
    totalAmount: 0,
    items: [],
  });

  useEffect(() => {
    const fetchMenuList = () => {
      axios
        .get(
          `http://localhost:4000/showitems/`,
        ).then(res => {
          // console.log(res)
          setItemList(res.data)
          let response = res.data;
          let x = Object.keys(response).map(item => ({ name: item }))
          setMenuList(x)
        }).catch(err => console.log(err))
    }
    fetchMenuList()

  }, [])

  const handleTableClick = (tableNumber, event) => {
    console.log(tableNumber.no);
    setOrderData((prev) => ({ ...prev, tableNo: tableNumber.no }));
    setShowCategory(true);
    setShowItems(false);
  };
  const handleCategoryClick = (categoryName, event) => {
    console.log(categoryName.name);
    setCatgoryName(categoryName.name);
    // setMenuList(menuList.[])
    setShowItems(true);
    setShowCategory(false);
  };
  const handleQuantity = (item, event) => {
    console.log(event.target.value);
    setOrderData((prev) =>
      !prev.items
        ? {
          ...prev,
          items: [
            {
              itemName: event.target.name,
              price: item.price,
              quantity: JSON.parse(event.target.value),
            },
          ],
          totalAmount: item.price * JSON.parse(event.target.value),
        }
        : {
          ...prev,
          items: [
            ...prev.items,
            {
              itemName: event.target.name,
              price: item.price,
              quantity: JSON.parse(event.target.value),
            },
          ],
          totalAmount: prev.totalAmount + item.price * JSON.parse(event.target.value),
        }
    );
  };
  const handleBack = () => {
    setShowCategory(false);
    if (showItems) {
      setShowItems(false);
      setShowCategory(true);
      orderData.items.pop();
    }
  };
  const handleSubmit = () => {
    console.log(orderData)
    axios
      .post(
        `http://localhost:4000/sessions/`, orderData
      ).then(res => {
        console.log(res)
        if (res.status === 200) {
          Swal.fire({
            title: "Order Placed Successfully",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "success",
            timer: 1000,
          });
          setShowCategory(false);
          setShowItems(false)
        }
        // // console.log(x)
      }).catch(err => console.log(err))
  }

  // console.log(showCategory, showItems);
  console.log(orderData);
  return (
    <div className="inner-container">
      <div className="waiter_home_style"
      >

        {!showCategory && !showItems && (
          <Grid container spacing={3}>
            {tablesList.map((eachTable) => {
              return (
                <Grid
                  md={4}
                  lg={3}
                  sm={12}
                  xs={12}
                  onClick={(event) => handleTableClick(eachTable, event)}
                >
                  <Card className="waiterhome_card_style">
                    <Card.Body className="place_order_card">
                      <Card.Header style={{ backgroundColor: "#1F305E" }}>
                        <Card.Title style={{ color: "white" }}>
                          {eachTable.no}
                        </Card.Title>
                      </Card.Header>
                    </Card.Body>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
        {showCategory && !showItems && (
          <Grid container spacing={3}>

            {menuList.map((categoryItem) => {
              return (
                <Grid
                  md={4}
                  lg={3}
                  sm={12}
                  xs={12}
                  onClick={(event) => handleCategoryClick(categoryItem, event)}
                >

                  <Card className="waiterhome_card_style">
                    <Card.Body className="place_order_card">
                      <Card.Header style={{ backgroundColor: "#1F305E" }}>
                        <Card.Title>{categoryItem.name}</Card.Title>
                      </Card.Header>
                    </Card.Body>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
        {showItems && (
          <div>
            <Table
              className="itemTable"
              striped
              style={{ marginTop: "20px" }}
            >
              <thead>
                <tr>
                  <th colSpan="3">{categoryName}</th>
                </tr>
                <tr>
                  <th>Sl.no</th>
                  <th>Dish Name</th>
                  <th>Price per Plate</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              {itemList[categoryName].map((item, index) => (
                <tbody>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>Rs. {item.price}</td>
                    <td>
                      <input
                        name={item.name}
                        onChange={(event) => handleQuantity(item, event)}
                      />

                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <Button className="place_order_btn" onClick={handleSubmit}>Submit</Button>
            <Button className="place_order_btn"
              onClick={() => {
                setShowCategory(true);
                setShowItems(false);
              }}
            >
              Add More Items
          </Button>
          </div>
        )}
        {(showCategory || showItems) && (
          <Button className="place_order_back_btn" onClick={handleBack}>Back</Button>
        )}
      </div>
    </div>
  );
};

export default Waiter_Place_Order;
