import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import "../../css/BillerStyle.css";

import {
  TotalOrder,
  TotalParcel,
  TableOrder,
  ParcelOrder,
  TableOrderModals,
  ParcelOrderModals,
} from "../../StaticData/BillerHomeData";
import {
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardActions,
  CardSubtitle,
  CardGroup,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

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

  const [tableOrders, setTableOrders] = useState([]);
  const [parcelOrders, setParcelOrders] = useState([]);
  const [tablepays, setTablepays] = useState({
    orderType: "",
    billStatus: "",
    orderId: "",
    waiterName: "",
    successMessage: null,
    error: null,
  });
  const [paid, setPaid] = useState("unpaid");
  const [show, setShow] = useState(false);
  const [pshow, setPShow] = useState(false);
  const [value, setValue] = useState(null);
  const [val, setName] = useState("");
  const [Pval, setPname] = useState("");
  const handleShow = (event) => {
    setShow(true);
    setName(event.target.value);
    console.log(event.target.value);
    // console.log(event);
  };
  const handleShow1 = (eve) => {
    setPShow(true);
    setPname(eve.target.value);
    console.log(eve.target.value);
    // console.log(eve);
  };
  const handleClose = () => setShow(false);
  const handleClose1 = () => setPShow(false);

  const Payment = (e, value) => {
    // setTablepays(billStatus="paid")
    setValue(e.target.value);
    // console.log(e, value);
    let data = { orderId: value.sessionNo, billStatus: "paid" };
    data.billerName = "anil";
    data.orderType = "table";
    console.log(data);
    fetchbillerTablepaymentData(data);
    var rowno = --e.target.value;
    tableOrders.map((value, index) => {
      if (index == rowno) {
        value.billStatus = "Paid";
        console.log(value);
      }
    });
  };

  const fetchbillerTablepaymentData = async (data) => {
    // const paymentdetails = {
    //   orderType: "table",
    //   billStatus: "unpaid",
    //   orderId: "90fc5786-e3d1-453c-b734-36c19115d95a",
    //   waiterName: "Rakesh",
    //   // orderType: tablepays.orderType,
    //   // billStatus: tablepays.billStatus,
    //   // orderId: tablepays.orderId,
    //   // waiterName: tablepays.waiterName
    // };
    await axios
      .post(`http://localhost:4000/biller-payment/`, data, {
        header: {
          "Content-type":
            "application/json,application/x-www-form-urlencoded, charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPaid("Paid");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Payment is successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const fetchbillerhomeData = async () => {
    const response = await axios.get(`http://localhost:4000/biller-home/`);
    setTableOrders(response.data.tableOrders);
    setParcelOrders(response.data.parcelOrders);
    console.log(response.data);
  };

  useEffect(() => {
    fetchbillerhomeData();
  }, []);

  const Payment1 = (e) => {
    fetchbillerParcelpaymentData();
    setValue(e.target.value);
    console.log(e.target.value);
    var rowno = --e.target.value;
    ParcelOrder.map((value, index) => {
      if (index == rowno) {
        value.BillPayment = "Paid";
        console.log(value);
      }
    });
  };
  const fetchbillerParcelpaymentData = async () => {
    const paymentdetails = {
      orderType: "parcel",
      billStatus: "unpaid",
      orderId: "67b29e85-81ac-48cd-93bb-92d610b03876",
      billerName: "Amit Singh",
    };
    const res = await axios
      .post(`http://localhost:4000/biller-payment/`, paymentdetails, {
        header: {
          "Content-type":
            "application/json,application/x-www-form-urlencoded, charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Payment is successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="inner-container">
      <div>
        <CardGroup>
          <div className="cardsname">
            <Card
              body
              outline
              color="info"
              style={{
                maxwidth: "100%",
                maxHeight: "100rem",
                color: "white",
                backgroundColor: "#0a2351",
                fontFamily: "Times New Roman, Times, serif",
                margin: "1rem",
                marginLeft: "1rem",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
              }}
            >
              <h5>
                <CardHeader
                  style={{
                    backgroundColor: "white",
                    borderBottom: "groove",
                    backgroundColor: "#0a2351",
                    borderWidth: "2px",
                    borderBottomColor: "#ffffff",
                    borderRadius: "7px",
                    padding: "3px",
                    margin: "0px",
                  }}
                >
                  <CardTitle>Total No. of Table Order Placed</CardTitle>
                  {TotalOrder.map((totalorder) => (
                    <>
                      <CardText>
                        <b>{totalorder.Data}</b>
                      </CardText>
                    </>
                  ))}
                </CardHeader>
              </h5>
            </Card>
          </div>
          <div className="cardsname">
            <Card
              body
              outline
              color="info"
              style={{
                maxwidth: "100%",
                maxHeight: "100rem",
                color: "white",
                backgroundColor: "#0a2351",
                fontFamily: "Times New Roman, Times, serif",
                margin: "1rem",
                marginLeft: "2rem",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
              }}
            >
              <h5>
                <CardHeader
                  style={{
                    backgroundColor: "white",
                    borderBottom: "groove",
                    backgroundColor: "#0a2351",
                    borderWidth: "2px",
                    borderBottomColor: "#ffffff",
                    borderRadius: "7px",
                    padding: "3px",
                    margin: "0px",
                  }}
                >
                  <CardTitle>Total No. of Parcel Order Placed</CardTitle>
                  {TotalParcel.map((totalparcel) => (
                    <>
                      <CardText>
                        <b>{totalparcel.Data}</b>
                      </CardText>
                    </>
                  ))}
                </CardHeader>
              </h5>
            </Card>
          </div>
          <Card className="chartcard">
            <div className="chart">
              <Doughnut data={data} options={{ responsive: true }} />
              <h5>Table order chart</h5>
            </div>
          </Card>
        </CardGroup>
      </div>

      <div className="Tabledesign">
        <Table
          responsive
          size="sm"
          striped
          bordered
          hover
          style={{
            color: "white",
            backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`,
            maxwidth: "80%",
            maxHeight: "100rem",
            fontFamily: "Times New Roman, Times, serif",
            marginTop: "2rem",
            borderRadius: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Table No</th>
              <th>SessionId</th>
              <th>Bill Payment</th>
              <th>Show Details</th>
            </tr>
          </thead>
          {tableOrders.map((val, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{val.tableNo}</td>
                <td>{val.sessionNo}</td>
                <td>
                  <Button
                    style={{ backgroundColor: "#d11d72" }}
                    onClick={(e) => Payment(e, val)}
                    // value={val.tableno}
                  >
                    {paid}=Rs.{val.totalAmount}
                  </Button>
                </td>
                <td>
                  <Button
                    style={{ backgroundColor: "#d11d72" }}
                    onClick={handleShow}
                    value={val.sessionNo}
                  >
                    ShowDetails
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <b>Table details</b>
          </Modal.Header>
          <Modal.Body>
            {/* console.log(tableOrders); */}
            {tableOrders.map((Tval, index) =>
              val == Tval.sessionNo ? (
                <ol>
                  <b>
                    <li> Table No =: {Tval.tableNo} </li>
                  </b>
                  <b>
                    <li> Session Id =: {Tval.sessionNo} </li>
                  </b>
                  <b>
                    <li> Waiter Name=: {Tval.waiterName} </li>
                  </b>
                  <b>
                    <li> Total amount =: {Tval.totalAmount} </li>
                  </b>
                  <b>
                    <li>Order Status =: {Tval.status}</li>
                  </b>
                  <b>
                    <li>
                      Ordered Items =:{" "}
                      {Tval.items.map((item) => (
                        <ul>
                          <li>
                            Item Name= {item.name} , Quantity= {item.quantity} ,
                            Price= {item.price}
                          </li>
                        </ul>
                      ))}
                    </li>
                  </b>
                </ol>
              ) : (
                ""
              )
            )}
          </Modal.Body>
          {/* <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer> */}
        </Modal>
      </div>

      <Table
        responsive
        size="sm"
        striped
        bordered
        hover
        style={{
          color: "white",
          // backgroundColor:"#20B2AA",
          //  background: `linear-gradient(to right, #56ccf2, #2f80ed)`,
          // background:"#073980",
          backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`,
          maxwidth: "80%",
          maxHeight: "100rem",
          fontFamily: "Times New Roman, Times, serif",
          marginTop: "2rem",
          // borderStyle: "groove",
          borderWidth: "3px",
          borderRadius: "20px",
        }}
      >
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Parcel No</th>
            <th>Bill Payment</th>
            <th>Show Details</th>
          </tr>
        </thead>
        {parcelOrders.map((val1, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{val1.parcelNo}</td>
              <td>
                <Button
                  style={{ backgroundColor: "#d11d72" }}
                  onClick={Payment1}
                  value={val1.parcelNo}
                >
                  {val1.status}=Rs.{val1.totalAmount}
                </Button>
              </td>
              <td>
                <Button
                  style={{ backgroundColor: "#d11d72" }}
                  onClick={handleShow1}
                  value={val1.parcelNo}
                >
                  ShowDetails
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <Modal show={pshow} onHide={handleClose1}>
        <Modal.Header closeButton>Parcel details</Modal.Header>
        <Modal.Body>
          {parcelOrders.map((val1, index) =>
            Pval == val1.parcelNo ? (
              <ol>
                <b>
                  <li> ParcelNo =: {val1.parcelNo} </li>
                </b>
                <b>
                  <li> Biller Name =: {val1.billerName} </li>
                </b>
                <b>
                  <li> Total amount =: {val1.totalAmount} </li>
                </b>
                <b>
                  <li>Order Status =: {val1.status}</li>
                </b>
                <b>
                  <li>
                    Ordered Items
                    {val1.items.map((item) => (
                      <ul>
                        <li>
                          Item Name= {item.name} , Quantity= {item.quantity} ,
                          Price= {item.price}
                        </li>
                      </ul>
                    ))}
                  </li>
                </b>
              </ol>
            ) : (
              ""
            )
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => handleClose1()}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default BillerHome;
