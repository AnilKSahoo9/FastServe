import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Card, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import {
  tablesList,
  categoryList,
  menuItems,
} from "../../StaticData/placeorderData";

const Waiter_Place_Order = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [itemArray, setItemArray] = useState([]);
  const [count, setCount] = useState(0);
  const [checkIndex, setCheckIndex] = useState(0);
  const [categoryName, setCatgoryName] = useState("");
  // const [menuList, setMenuList] = useState([]);
  const [orderData, setOrderData] = useState({
    tableNo: 0,
    waitername: "",
    billStatus: "unpaid",
    orderStatus: "pending",
    totalAmount: 0,
    items: [],
  });
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
    // let itemDetails = {};
    // // let itemArray = [];
    // itemDetails.itemName = event.target.name;
    // itemDetails.price = item.price;
    // itemDetails.quantity = JSON.parse(event.target.value);
    // console.log(itemDetails);
    // let x = itemArray.concat(itemDetails);
    // setItemArray(x);
    // setItemArray((prev) => [...prev, itemDetails]);
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
  // const handleIncreaseQuantity = (i, event) => {
  //   if (checkIndex === i) {
  //     setCheckIndex(i);
  //     setCount(count + 1);
  //   } else {
  //     setCount(0);
  //     setCheckIndex(i);
  //   }
  // };
  // const handleDecreaseQuantity = (i, item, x) => {
  //   setCheckIndex(i);
  //   setCount(count + x);
  //   let itemDetails = {};
  //   // let itemArray = [];
  //   itemDetails.itemName = item.name;
  //   itemDetails.price = item.price;
  //   itemDetails.quantity += x;
  //   console.log(itemDetails);
  //   let y = itemArray.concat(itemDetails);
  //   setItemArray(y);
  // };

  // console.log(showCategory, showItems);
  console.log(orderData);
  return (
    <div className="inner-container">
    <div style={{marginTop:"5rem"}}>
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
                <Card className="waiterhome_card_style"
                  style={{
                    marginTop: "40px",
                    backgroundColor: "#ca4483ea",
                    marginRight: "30px",
                    fontSize: "50px",
                    marginLeft: "30px",
                  }}
                >
                  <Card.Body>
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
          {categoryList.map((categoryItem) => {
            return (
              <Grid
                md={4}
                lg={3}
                sm={12}
                xs={12}
                onClick={(event) => handleCategoryClick(categoryItem, event)}
              >
                <Card
                  style={{
                    maxwidth: "100%",
                    maxHeight: "100rem",
                    color: "white",
                    fontFamily: "Times New Roman, Times, serif",
                    marginTop: "70px",
                    marginLeft: "30px",
                    borderStyle: "groove",
                    borderWidth: "3px",
                    borderRadius: "7px",
                    boxShadow: "20px 20px 50px grey",
                    backgroundColor: "#ca4483ea",
                    //backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
                  }}
                >
                  <Card.Body>
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
            striped
            bordered
            hover
            variant="dark"
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
            {menuItems[categoryName].map((item, index) => (
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
                    {/* <button
                      onClick={() => handleDecreaseQuantity(index, item, 1)}
                    >
                      +
                    </button>
                    <button>{index === checkIndex ? count : 0}</button>
                    <button
                      onClick={() => handleDecreaseQuantity(index, item, -1)}
                    >
                      -
                    </button> */}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Button>Submit</Button>
          <Button
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
        <Button onClick={handleBack}>Back</Button>
      )}
      </div>
    </div>
  );
};

export default Waiter_Place_Order;

// const MenuItems = () => {
//   const [count, setCount] = useState(0);
//   // const [num, setNum] = useState(0);
//   // const incNum = () => {
//   //   setNum(num + 1);
//   // };
//   // const decNum = () => {
//   //   if (num > 0) {
//   //     setNum(num - 1);
//   //   } else {
//   //     alert("Sorry,Zero LIMIT Reached");
//   //     setNum(0);
//   //   }
//   // };

//   const list = {
//     breakfast: [
//       { no: "1", name: "itli" },
//       { no: "2", name: "Dosha" },
//       { no: "3", name: "dahibara" },
//       { no: "4", name: "samosha" },
//       { no: "5", name: "chapati" },
//       { no: "6", name: "upma" },
//     ],
//   };
//   return (
//     <Table striped bordered hover variant="dark" style={{ marginTop: "20px" }}>
//       <thead>
//         <tr>
//           <th colSpan="3">Breakfast</th>
//         </tr>
//         <tr>
//           <th>Sl.no</th>
//           <th>item Name</th>
//           <th>Price per plate</th>
//           <th>Quantity</th>
//         </tr>
//       </thead>
//       {list.breakfast.map((e, index) => (
//         <tbody>
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{e.name}</td>
//             <td></td>
//             <td>
//               <button onClick={() => setCount(count + 1)}>+</button>
//               <button>{count}</button>
//               <button onClick={() => setCount(count - 1)}>-</button>
//             </td>
//           </tr>
//         </tbody>
//       ))}
//       <tr>
//         <th colSpan="3">
//           <button style={{ marginLeft: "800px", color: "blue" }}>
//             Add more items
//           </button>
//         </th>
//       </tr>
//     </Table>
//   );
// };

// const Catagories = () => {
//   const [showItems, setShowItems] = useState(false);

//   const handleCategoryClick = (tableName, event) => {
//     console.log(tableName.name);
//     setShowItems(true);
//     // order.tableNo = tableName.name;
//     // return (
//     //   <div>
//     //     <Categorypage />
//     //   </div>
//     // );
//   };
//   // const handleBack = () => {
//   //   setShowItems(false);
//   // };

//   return (
//     <div>
//       {!showItems && (
//         <Grid container spacing={3}>
//           {list.map((e) => {
//             return (
//               <Grid
//                 md={4}
//                 lg={3}
//                 sm={12}
//                 xs={12}
//                 onClick={(event) => handleCategoryClick(e, event)}
//               >
//                 {/* <Card style={{ marginTop: '30px', backgroundColor:"blue", marginRight:'40px', marginLeft:'30px' }}> */}
//                 <Card
//                   style={{
//                     maxwidth: "100%",
//                     maxHeight: "100rem",
//                     color: "white",
//                     fontFamily: "Times New Roman, Times, serif",
//                     marginTop: "70px",
//                     marginLeft: "30px",
//                     borderStyle: "groove",
//                     borderWidth: "3px",
//                     borderRadius: "7px",
//                     boxShadow: "20px 20px 50px grey",
//                     backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
//                   }}
//                 >
//                   <Card.Body>
//                     <Card.Header style={{ backgroundColor: "black" }}>
//                       <Card.Title>{e.name}</Card.Title>
//                     </Card.Header>
//                   </Card.Body>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>
//       )}
//       {showItems && (
//         <div>
//           <MenuItems />
//           {/* <Button onClick={handleBack}>Back</Button> */}
//         </div>
//       )}
//     </div>
//   );
// };
