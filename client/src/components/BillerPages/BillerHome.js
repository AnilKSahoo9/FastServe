import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
// import { PieChart } from 'react-minimal-pie-chart';
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

const BillerHome = () => {
  const data={
    // lables:["received order","Pending Order"],
    
    datasets:[
      {
        // label:"Chart of Table Order",
        data:[70,30],
        backgroundColor:[
          "rgba(255,99,132,1)",
          "rgba(255,205,86,1)"
        ]
      }
    ]
  }







  const [show, setShow] = useState(false);
  const [pshow, setPShow] = useState(false);
  const [value, setValue] = useState(null);
  const [val, setname] = useState("");
  const [Pval, setPname] = useState("");
  const handleShow = (event) => {
    setShow(true);
    setname(event.target.value);
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

  const Payment = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    var rowno = --e.target.value;
    TableOrder.map((value, index) => {
      if (index == rowno) {
        value.BillPayment = "Paid";
        console.log(value);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Payment is successfull",
          showConfirmButton: false,
          timer: 1500,
        });

      }
    });
  };
  const Payment1 = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    var rowno = --e.target.value;
    ParcelOrder.map((value, index) => {
      if (index == rowno) {
        value.BillPayment = "Paid";
        console.log(value);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Payment is successfull",
          showConfirmButton: false,
          timer: 1500,
        });

      }
    });
  };

  return (
    
    <div className="inner-container" >
      <div>
        <CardGroup >
          <div className="cardsname">
            <Card
              body
              outline
              color="info"
              style={{
                maxwidth: "100%",
                maxHeight: "100rem",
                color: "white",
                backgroundColor:"#0a2351",
                fontFamily: "Times New Roman, Times, serif",
                margin: "1rem",
                marginLeft:"1rem",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
                // boxShadow: "20px 20px 50px grey",
                // backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
              }}
            >
              <h5>
                <CardHeader
                  style={{
                    backgroundColor: "white",
                    borderBottom:"groove",
                    // fontSize:"20px",
                    // borderStyle: "groove",
                    backgroundColor:"#0a2351",
                    borderWidth: "2px",
                    // borderBottom:"2px",
                    borderBottomColor:"#ffffff",
                    borderRadius: "7px",
                    padding: "3px",
                    margin: "0px",
                  }}
                >
                  <CardTitle>Total No. of Order Placed</CardTitle>
                  {TotalOrder.map((totalorder) => (
                    <>
                      <CardText><b>{totalorder.Data}</b></CardText>
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
                backgroundColor:"#0a2351",
                fontFamily: "Times New Roman, Times, serif",
                margin: "1rem",
                marginLeft:"2rem",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
                // boxShadow: "20px 20px 50px grey",
                // backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
              }}
            >
              <h5>
                <CardHeader
                  style={{
                    backgroundColor: "white",
                    borderBottom:"groove",
                    // fontSize:"20px",
                    // borderStyle: "groove",
                    backgroundColor:"#0a2351",
                    borderWidth: "2px",
                    // borderBottom:"2px",
                    borderBottomColor:"#ffffff",
                    borderRadius: "7px",
                    padding: "3px",
                    margin: "0px",
                  }}
                >
                  <CardTitle>Total No. of Parcel Placed</CardTitle>
                  {TotalParcel.map((totalparcel) => (
                    <>
                      <CardText><b>{totalparcel.Data}</b></CardText>
                    </>
                  ))}
                </CardHeader>
              </h5>
            </Card>
          </div>
         <Card  className="chartcard">
         <div className="chart">
        <Doughnut data={data}
       options={{ responsive: true }} />
       <h5>Table order chart</h5>
        </div>       
         </Card>
         <Card className="chartcard">
         <div className="chart">
        <Doughnut data={data}
       options={{ responsive: true }} />
       <h5>Parcel order chart</h5>
        </div>       
         </Card>
           
          
        </CardGroup>
        
        
       


      </div>

      <div className="Tabledesign">
      <Table responsive size="sm"
        striped
        bordered
        hover
        style={{
          color: "white",
          // background: `linear-gradient(to right,#2a52be,#0047AB, #002D62, #0a2351)`,
          backgroundImage:`linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`,
          // background:"#073980",
          maxwidth: "80%",
          maxHeight: "100rem",
          fontFamily: "Times New Roman, Times, serif",
          marginTop: "2rem",
          // borderWidth: "0px",
          borderRadius: "20px",
          borderCollapse:"collapse"
        }}
      >
        <thead>
          <tr>
            <th>Table No</th>
            <th>SessionId</th>
            <th>Bill Payment</th>
            <th>Show Details</th>
          </tr>
        </thead>
        {TableOrder.map((tableorder, index) => (

          <tbody>
            <tr>
              <td>{tableorder.TableNo}</td>
              <td>{tableorder.SessionId}</td>
              <td>
                <Button style={{backgroundColor:"#d11d72"}} onClick={Payment} value={tableorder.TableNo}>{tableorder.BillPayment}=Rs.{tableorder.Totalamount}</Button>
              </td>
              <td>
                <Button style={{backgroundColor:"#d11d72"}} onClick={handleShow} value={tableorder.TableNo}>
                  ShowDetails
                  </Button>
              </td>
            </tr>
          </tbody>

        ))}
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Table details</Modal.Header>
        <Modal.Body>
          {TableOrder.map((user) =>
            val == user.TableNo
              ?
              (<ol><b><li> Table No =: {user.TableNo} </li></b>
                <b><li> Session Id =: {user.SessionId} </li></b>
                <b><li> Total amount =: {user.Totalamount} </li></b>
                <b><li>Order Status =: {user.OrderStatus}</li></b>
                <b><li>Ordered Items =: {user.items.map((item) => <ul><li>Item Name= {item.name}  ,  Quantity= {item.quantity}  ,  Price=   {item.price}</li></ul>)}</li></b>
              </ol>
              )
              : ""

          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>


      <Table responsive size="sm"
        striped
        bordered
        hover
        style={{
          color: "white",
          // backgroundColor:"#20B2AA",
          //  background: `linear-gradient(to right, #56ccf2, #2f80ed)`,
          // background:"#073980",
          backgroundImage:`linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`,
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
            <th>Parcel No</th>
            <th>Bill Payment</th>
            <th>Show Details</th>
          </tr>
        </thead>
        {ParcelOrder.map((parcelorder) => (
          <tbody>
            <tr>
              <td>{parcelorder.ParcelNo}</td>
              <td>
                <Button style={{backgroundColor:"#d11d72"}}
                 onClick={Payment1} value={parcelorder.ParcelNo}>{parcelorder.BillPayment}=Rs.{parcelorder.Totalamount}</Button>
              </td>
              <td>
                <Button style={{backgroundColor:"#d11d72"}} onClick={handleShow1} value={parcelorder.ParcelNo}>
                  ShowDetails
                  </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <Modal show={pshow} onHide={handleClose1}>
        <Modal.Header closeButton>Table details</Modal.Header>
        <Modal.Body>
          {ParcelOrder.map((Puser) =>
            Pval == Puser.ParcelNo
              ?
              (<ol><b><li>  ParcelNo =: {Puser.ParcelNo} </li></b>
                <b><li> Total amount =: {Puser.Totalamount} </li></b>
                <b><li>Order Status =: {Puser.OrderStatus}</li></b>
                <b><li>Ordered Items =: {Puser.items.map((item) => <ul><li>Item Name= {item.name}  ,  Quantity= {item.quantity}  ,  Price=   {item.price}</li></ul>)}</li></b>
              </ol>
              )
              : ""

          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose1()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BillerHome;
