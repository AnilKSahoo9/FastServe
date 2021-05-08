// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Doughnut } from "react-chartjs-2";
// import "../../css/BillerStyle.css";
// import {
//   TotalOrder,
//   TotalParcel,
//   // TableOrder,
//   // ParcelOrder,
//   // TableOrderModals,
//   // ParcelOrderModals,
// } from "../../StaticData/BillerHomeData";
// import {
//   Card,
//   // CardImg,
//   CardHeader,
//   CardText,
//   // CardBody,
//   CardTitle,
//   // CardActions,
//   // CardSubtitle,
//   CardGroup,
//   Table,
// } from "reactstrap";
// import { Button, Modal } from "react-bootstrap";
// import axios from "axios";
// import ClipLoader from "react-spinners/ClipLoader";

// import io from "socket.io-client";
// let socket;

// const BillerHome = () => {
//   const data = {
//     // lables:["received order","Pending Order"],

//     datasets: [
//       {
//         // label:"Chart of Table Order",
//         data: [60, 40],
//         backgroundColor: ["rgba(255,99,132,1)", "rgba(255,205,86,1)"],
//       },
//     ],
//   };
//   const [loading, setLoading] = useState(true)

//   const [tableOrders, setTableOrders] = useState([]);
//   const [parcelOrders, setParcelOrders] = useState([]);
//   // const [tablepays, setTablepays] = useState("unpaid")
//   const [paid, setPaid] = useState("unpaid");
//   const [show, setShow] = useState(false);
//   const [pshow, setPShow] = useState(false);
//   const [value, setValue] = useState(null);
//   const [val, setName] = useState("");
//   const [Pval, setPname] = useState("");

//   const ENDPOINT = "ws://localhost:4000/api/billerhome/socket";
//   let connectionOptions = {
//     "force new connection": true,
//     reconnectionAttempts: "Infinity",
//     timeout: 10000,
//     transports: ["websocket"],
//   };

//   const handleShow = (event) => {
//     setShow(true);
//     setName(event.target.value);
//     console.log(event.target.value);
//     // console.log(event);
//   };
//   const handleShow1 = (eve) => {
//     setPShow(true);
//     setPname(eve.target.value);
//     console.log(eve.target.value);
//     // console.log(eve);
//   };
//   const handleClose = () => setShow(false);
//   const handleClose1 = () => setPShow(false);

//   const Payment = (e, value) => {
//     // setTablepays(billStatus="paid")
//     setValue(e.target.value);
//     console.log(e.target.value);
//     // console.log(e, value);
//     let data = { orderId: value.sessionNo, billStatus: "paid" };
//     data.billerName = "anil";
//     data.orderType = "table";
//     console.log(data);
//     fetchbillerTablepaymentData(data);
//     var rowno = --e.target.value;
//     tableOrders.map((value, index) => {
//       if (index == rowno) {
//         value.billStatus = "Paid";
//         console.log(value);
//       }
//     });
//   };

//   const fetchbillerTablepaymentData = async (data) => {
//     await axios
//       .post(`http://localhost:4000/biller-payment/`, data, {
//         header: {
//           "Content-type":
//             "application/json,application/x-www-form-urlencoded, charset=UTF-8",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//         setPaid("Paid");
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Your Payment is successfull",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });
//   };

//   const fetchbillerhomeData = async () => {
//     const response = await axios.get(`http://localhost:4000/biller-home/`);
//     setTableOrders(response.data.tableOrders);
//     setParcelOrders(response.data.parcelOrders);
//     setLoading(false)
//     console.log(response.data);
//   };

//   useEffect(() => {
//     socket = io(ENDPOINT, connectionOptions);
//     //console.log(socket);
//     socket.on("billerData", (billerData) => {
//       //console.log(billerData);
//       setParcelOrders(billerData.parcelOrders);
//       socket.emit("biller", { name: "bhabs" });
//     });
//     socket.on("billerDataForSession", (billerData) => {
//       console.log(billerData.tableOrders);
//       setTableOrders(billerData.tableOrders);
//       socket.emit("billerSession", { name: "bhabsession" });
//     });
//     fetchbillerhomeData();
//   }, []);

//   const Payment1 = (e, value1) => {
//     setValue(e.target.value);
//     console.log(e.target.value);
//     let data = { orderId: value1.parcelNo, billStatus: "paid" };
//     data.billerName = "anil";
//     data.orderType = "parcel";
//     console.log(data);
//     fetchbillerParcelpaymentData(data);

//     var rowno = --e.target.value;
//     parcelOrders.map((value, index) => {
//       if (index == rowno) {
//         value.BillPayment = "Paid";
//         console.log(value);
//       }
//     });
//   };

//   const fetchbillerParcelpaymentData = async (data) => {

//     await axios
//       .post(`http://localhost:4000/biller-payment/`, data, {
//         header: {
//           "Content-type":
//             "application/json,application/x-www-form-urlencoded, charset=UTF-8",
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//         setPaid("Paid");
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Your Payment is successfull",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       });
//   };
//   return (
//     <div className="inner-container">
//       {
//         loading ? (
//           <div style={{ marginTop: "290px" }}>
//             <ClipLoader
//               color="#1f305e"
//               loading={true}
//               css={""}
//               size={100}
//             />
//           </div>
//         ) : (
//           <div>
//             <div className="biller_home_style">
//               <CardGroup>
//                 <div className="cardstyle">
//                   <Card className="cardsname"
//                     body
//                     outline
//                     color="info"
//                   >
//                     <h5>
//                       <CardHeader className="cardHeadersname">
//                         <CardTitle>Total No. of Table Order Placed</CardTitle>
//                         {TotalOrder.map((totalorder) => (
//                           <>
//                             <CardText>
//                               <b>{totalorder.Data}</b>
//                             </CardText>
//                           </>
//                         ))}
//                       </CardHeader>
//                     </h5>
//                   </Card>
//                 </div>
//                 <div className="cardstyle">
//                   <Card className="cardsname"
//                     body
//                     outline
//                     color="info"
//                   >
//                     <h5>
//                       <CardHeader className="cardHeadersname">
//                         <CardTitle>Total No.of Parcel Order Placed</CardTitle>
//                         {TotalParcel.map((totalparcel) => (
//                           <>
//                             <CardText>
//                               <b>{totalparcel.Data}</b>
//                             </CardText>
//                           </>
//                         ))}
//                       </CardHeader>
//                     </h5>
//                   </Card>
//                 </div>
//                 {/* <Card className="chartcard"> */}
//                 <span className="chartcard">
//                   <div className="chart">
//                     <Doughnut data={data} options={{ responsive: true }} />
//                     <h5>Table order chart</h5>
//                   </div>
//                 </span>
//                 {/* </Card> */}
//               </CardGroup>
//             </div>
//             <div className="tablegroup_design">
//               <Table className="Tabledesign"
//                 responsive
//                 size="sm"
//                 striped
//                 // bordered
//                 // hover
//                 style={{
//                   backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`
//                 }}
//               >
//                 <thead>
//                   <tr>
//                     <th>SL No.</th>
//                     <th>Table No</th>
//                     <th>SessionId</th>
//                     <th>Bill Payment</th>
//                     <th>Show Details</th>
//                   </tr>
//                 </thead>
//                 {tableOrders.map((val, index) => (
//                   <tbody>
//                     <tr>
//                       <td>{index + 1}</td>
//                       <td>{val.tableNo}</td>
//                       <td>{val.sessionNo}</td>
//                       <td>
//                         <Button className="btn_table"
//                           onClick={(e) => Payment(e, val)}
//                         // value={val.tableno}
//                         >
//                           {paid}=Rs.{val.totalAmount}
//                         </Button>
//                       </td>
//                       <td>
//                         <Button
//                           className="btn_table"
//                           onClick={handleShow}
//                           value={val.sessionNo}
//                         >
//                           ShowDetails
//                   </Button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </Table>
//               <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                   <b>Table details</b>
//                 </Modal.Header>
//                 <Modal.Body>
//                   {/* console.log(tableOrders); */}
//                   {tableOrders.map((Tval, index) =>
//                     val == Tval.sessionNo ? (
//                       <ol>
//                         <b>
//                           <li> Table No =: {Tval.tableNo} </li>
//                         </b>
//                         <b>
//                           <li> Session Id =: {Tval.sessionNo} </li>
//                         </b>
//                         <b>
//                           <li> Waiter Name=: {Tval.waiterName} </li>
//                         </b>
//                         <b>
//                           <li> Total amount =: {Tval.totalAmount} </li>
//                         </b>
//                         <b>
//                           <li>Order Status =: {Tval.status}</li>
//                         </b>
//                         <b>
//                           <li>
//                             Ordered Items =:{" "}
//                             {Tval.items.map((item) => (
//                               <ul>
//                                 <li>
//                                   Item Name= {item.name} , Quantity= {item.quantity} ,
//                             Price= {item.price}
//                                 </li>
//                               </ul>
//                             ))}
//                           </li>
//                         </b>
//                       </ol>
//                     ) : (
//                       ""
//                     )
//                   )}
//                 </Modal.Body>
//               </Modal>
//               <Table className="Tabledesign"
//                 responsive
//                 size="sm"
//                 striped
//                 // bordered
//                 // hover
//                 style={{ backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)` }}
//               >
//                 <thead>
//                   <tr>
//                     <th>SL No.</th>
//                     <th>Parcel No</th>
//                     <th>Bill Payment</th>
//                     <th>Show Details</th>
//                   </tr>
//                 </thead>
//                 {parcelOrders.map((val1, index) => (
//                   <tbody>
//                     <tr>
//                       <td>{index + 1}</td>
//                       <td>{val1.parcelNo}</td>
//                       <td>
//                         <Button
//                           style={{ backgroundColor: "#d11d72" }}
//                           onClick={(e) => Payment1(e, val1)}

//                         // value={val1.parcelNo}
//                         >
//                           {paid}=Rs.{val1.totalAmount}
//                         </Button>

//                       </td>
//                       <td>
//                         <Button
//                           style={{ backgroundColor: "#d11d72" }}
//                           onClick={handleShow1}
//                           value={val1.parcelNo}
//                         >
//                           ShowDetails
//                 </Button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </Table>
//               <Modal show={pshow} onHide={handleClose1}>
//                 <Modal.Header closeButton>Parcel details</Modal.Header>
//                 <Modal.Body>
//                   {parcelOrders.map((val1, index) =>
//                     Pval == val1.parcelNo ? (
//                       <ol>
//                         <b>
//                           <li> ParcelNo =: {val1.parcelNo} </li>
//                         </b>
//                         <b>
//                           <li> Biller Name =: {val1.billerName} </li>
//                         </b>
//                         <b>
//                           <li> Total amount =: {val1.totalAmount} </li>
//                         </b>
//                         <b>
//                           <li>Order Status =: {val1.status}</li>
//                         </b>
//                         <b>
//                           <li>
//                             Ordered Items
//                     {val1.items.map((item) => (
//                             <ul>
//                               <li>
//                                 Item Name= {item.name} , Quantity= {item.quantity} ,
//                           Price= {item.price}
//                               </li>
//                             </ul>
//                           ))}
//                           </li>
//                         </b>
//                       </ol>
//                     ) : (
//                       ""
//                     )
//                   )}
//                 </Modal.Body>
//               </Modal>
//             </div>
//           </div>
//         )}
//     </div>
//   );
// };

// export default BillerHome;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import "../../css/BillerStyle.css";
import {
  TotalOrder,
  TotalParcel,
  // TableOrder,
  // ParcelOrder,
  // TableOrderModals,
  // ParcelOrderModals,
} from "../../StaticData/BillerHomeData";
import {
  Card,
  // CardImg,
  CardHeader,
  CardText,
  // CardBody,
  CardTitle,
  // CardActions,
  // CardSubtitle,
  CardGroup,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { getUserName } from ".././shared/utils/common"
import io from "socket.io-client";
let socket;

const BillerHome = () => {
  const data = {
    // lables:["received order","Pending Order"],
    datasets: [
      {
        // label:"Chart of Table Order",
        data: [60, 40],
        backgroundColor: ["rgba(255,99,132,1)", "rgba(255,205,86,1)"],
      },
    ],
  };
  const [loading, setLoading] = useState(true)
  const userName = getUserName()
  const [tableOrders, setTableOrders] = useState([]);
  const [parcelOrders, setParcelOrders] = useState([]);
  const [otherData, setOtherData] = useState({
    totalTableData: 0,
    totalParcelData: 0
  })
  // const [paid, setPaid] = useState("Unpaid");
  const [tableShow, setTableShow] = useState(false);
  const [parcelShow, setParcelShow] = useState(false);

  const [modalData, setModalData] = useState({ billerName: "", waiterName: "", orderStatus: "", totalAmount: 0, billStatus: "", items: [{ name: "", price: 0, quantity: 0 }] });
  // const [value, seeachOrderue] = useState(null);
  // const [val, setName] = useState("");
  // const [Pval, setPname] = useState("");

  const ENDPOINT = "ws://localhost:4000/api/billerhome/socket";
  let connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const fetchbillerhomeData = async () => {
    const response = await axios.get(`http://localhost:4000/biller-home/`);
    setTableOrders(response.data.tableOrders);
    setParcelOrders(response.data.parcelOrders);
    setOtherData({ totalTableData: response.data.totalTableOrdersPlaced, totalParcelData: response.data.totalParcelOrdersPlaced })
    setLoading(false)
    console.log(response.data);
  };
  useEffect(() => {
    socket = io(ENDPOINT, connectionOptions);
    //console.log(socket);
    socket.on("billerData", (billerData) => {
      //console.log(billerData);
      setParcelOrders(billerData.parcelOrders);
      socket.emit("biller", { name: "bhabs" });
    });
    socket.on("billerDataForSession", (billerData) => {
      console.log(billerData.tableOrders);
      setTableOrders(billerData.tableOrders);
      socket.emit("billerSession", { name: "bhabsession" });
    });
    fetchbillerhomeData();
  }, []);
  const handleShow = (event) => {
    // setName(event.target.value);
    // console.log(event.target.value);
    let orderType = event.target.name;
    let id = event.target.value;
    if (orderType === "table") {
      setModalData(tableOrders.find(o => o.sessionNo === id))
      setTableShow(true);
    } else {
      setModalData(parcelOrders.find(o => o.parcelNo === id))
      setParcelShow(true);
    }
  };
  console.log(modalData)
  // const handleShow1 = (eve) => {
  //   setPShow(true);
  //   setPname(eve.target.value);
  //   console.log(eve.target.value);
  //   // console.log(eve);
  // };
  const handleClose = () => {
    setTableShow(false);
    setParcelShow(false)
  };
  // const handleClose1 = () => setPShow(false);

  const Payment = (event) => {
    // setTablepays(billStatus="paid")
    // seeachOrderue(e.target.value);
    // console.log(e)
    console.log(event.target.value, event.target.name);
    let orderType = event.target.name;
    let id = event.target.value;
    let tableNo = event.target.getAttribute("tableNo");
    // console.log(e, value);
    if (tableNo) {
      var tableData = { orderId: id, billStatus: "paid", billerName: userName, tableNo: tableNo, orderType: orderType };
    } else {
      var parcelData = { orderId: id, billStatus: "paid", billerName: userName, orderType: orderType };
    }
    // data.billerName = "anil";
    // data.orderType = "table";
    // console.log(data);
    axios
      .post(`http://localhost:4000/biller-payment/`, orderType === "table" ? tableData : parcelData, {
        header: {
          "Content-type":
            "application/json,application/x-www-form-urlencoded, charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        // setPaid("Paid");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Successfull",
          showConfirmButton: false,
          timer: 1000,
        });
      }).catch(err => console.log(err));
    // fetchbillerTablepaymentData(data);
    // var rowno = --e.target.value;
    // tableOrders.map((value, index) => {
    //   if (index == rowno) {
    //     value.billStatus = "Paid";
    //     console.log(value);
    //   }
    // });
  };

  return (
    <div className="inner-container">
      {
        loading ? (
          <div style={{ marginTop: "290px" }}>
            <ClipLoader
              color="#1f305e"
              loading={true}
              css={""}
              size={100}
            />
          </div>
        ) : (
          <div>
            <div className="biller_home_style">
              <CardGroup>
                <div className="cardstyle">
                  <Card className="cardsname"
                    body
                    outline
                    color="info"
                  >
                    <h5>
                      <CardHeader className="cardHeadersname">
                        <CardTitle>Total No. of Table Order Placed</CardTitle>
                        <>
                          <CardText>
                            <b>{otherData.totalTableData ? otherData.totalTableData : 0}</b>
                          </CardText>
                        </>
                      </CardHeader>
                    </h5>
                  </Card>
                </div>
                <div className="cardstyle">
                  <Card className="cardsname"
                    body
                    outline
                    color="info"
                  >
                    <h5>
                      <CardHeader className="cardHeadersname">
                        <CardTitle>Total No.of Parcel Order Placed</CardTitle>
                        <>
                          <CardText>
                            <b>{otherData.totalParcelData ? otherData.totalParcelData : 0}</b>
                          </CardText>
                        </>
                        {/* ))} */}
                      </CardHeader>
                    </h5>
                  </Card>
                </div>
                <span className="chartcard">
                  <div className="chart">
                    <h5>Total Order Chart</h5>
                    <Doughnut data={{
                      // datasets: [{
                      //   data: [otherData.totalTableData ? otherData.totalTableData : 0, otherData.totalParcelData ? otherData.totalParcelData : 0],
                      //   backgroundColor: [
                      //     'rgb(255, 99, 132)',
                      //     'rgb(54, 162, 235)',

                      //   ]
                      // }],

                      // These labels appear in the legend and in the tooltips when hovering different arcs
                      labels: [
                        'Total Table Order',
                        'Total Parcel Order',
                      ],
                      datasets: [{
                        label: 'Total Order Chart',
                        data: [otherData.totalTableData ? otherData.totalTableData : 0, otherData.totalParcelData ? otherData.totalParcelData : 0],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          // 'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                      }]
                    }} options={{ responsive: true }} />

                  </div>
                </span>
              </CardGroup>
            </div>
            <div className="tablegroup_design">
              <Table className="Tabledesign"
                responsive
                size="sm"
                striped

                style={{
                  backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`
                }}
              >
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Table No.</th>
                    <th>SessionId</th>
                    <th>Bill Payment</th>
                    <th>Show Details</th>
                  </tr>
                </thead>
                {tableOrders.map((item, index) => (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.tableNo}</td>
                      <td>{item.sessionNo.slice(0, 8).toUpperCase()}</td>
                      <td>
                        <Button className="btn_table"
                          onClick={Payment}
                          value={item.sessionNo}
                          name={"table"}
                          tableNo={item.tableNo}
                        >
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}=Rs.{item.totalAmount}
                        </Button>
                      </td>
                      <td>
                        <Button
                          className="btn_table"
                          onClick={handleShow}
                          value={item.sessionNo}
                          name={"table"}
                        >
                          Show Details
                  </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>

              <Modal show={tableShow} onHide={handleClose}>
                <Modal.Header closeButton>
                  <b>Table Details</b>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>Session No:- {modalData.sessionNo}</li>
                    <li>Tabel No:- {modalData.tableNo}</li>
                    <li>Waiter Name:- {modalData.waiterName}</li>
                    <li>Total Amount:- {modalData.totalAmount}</li>
                    <li>Order Status:- {modalData.orderStatus}</li>
                    <li>Ordered Items:-<ol>
                      {modalData.items.map(item => (
                        <li>
                          Item Name= {item.itemName} , Quantity= {item.quantity} ,
                          Price= {item.price}
                        </li>
                      ))}</ol></li>
                  </ul>
                </Modal.Body>
              </Modal>

              <Table className="Tabledesign"
                responsive
                size="sm"
                striped

                style={{ backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)` }}
              >
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Parcel No.</th>
                    <th>Bill Payment</th>
                    <th>Show Details</th>
                  </tr>
                </thead>
                {parcelOrders.map((item, index) => (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.parcelNo}</td>
                      <td>
                        <Button
                          style={{ backgroundColor: "#d11d72" }}
                          onClick={Payment}
                          value={item.parcelNo}
                          name={"parcel"}
                        >
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}=Rs.{item.totalAmount}
                        </Button>

                      </td>
                      <td>
                        <Button
                          style={{ backgroundColor: "#d11d72" }}
                          onClick={handleShow}
                          value={item.parcelNo}
                        >
                          Show Details
                </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <Modal show={parcelShow} onHide={handleClose}>
                <Modal.Header closeButton><b>Parcel Details</b></Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>Parcel No:- {modalData.parcelNo}</li>
                    <li>Biller Name:- {modalData.billerName}</li>
                    <li>Total Amount:- {modalData.totalAmount}</li>
                    <li>Order Status:- {modalData.orderStatus}</li>
                    <li>Ordered Items:-<ol>
                      {modalData.items.map(item => (

                        <li>
                          Item Name= {item.name} , Quantity= {item.quantity} ,
                          Price= {item.price}
                        </li>

                      ))}</ol></li>
                  </ul>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        )}
    </div>
  );
};

export default BillerHome;
