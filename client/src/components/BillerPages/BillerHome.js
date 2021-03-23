import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { event } from "jquery";

// const handleclick = (e) => {
//     setData("Paid");
//   };
const BillerHome = () => {
  const [row, setRow] = useState(null);
  const [show, setShow] = useState(false);

  const [val, setname] = useState("");
  const handleShow = (event) => {
    setShow(true);
    setname(event.target.value);
  };
  const handleClose = () => setShow(false);

  const Payment1 = () => {
    console.log("e");
  };
  // const Payment = (e) => {
  //   TableOrder.map((val, index) => {
  //     if (index == e.target.value) {
  //       val.BillPayment = "Paid";
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Your Payment is successfull",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  // const ShowdetailsOrderArg = (e) => {
  //     ShowdetailsOrder(TableOrderModals, e);
  // }

  return (
    <div className="inner-container" style={{ marginRight: "4rem" }}>
      <CardGroup>
        <Card
          body
          outline
          color="info"
          style={{
            maxwidth: "100%",
            maxHeight: "100rem",
            color: "black",
            fontFamily: "Times New Roman, Times, serif",
            margin: "1rem",
            borderStyle: "groove",
            borderWidth: "3px",
            borderRadius: "7px",
            boxShadow: "20px 20px 50px grey",
            backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
          }}
        >
          <h5>
            <CardHeader
              style={{
                backgroundColor: "white",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
                padding: "3px",
                margin: "0px",
              }}
            >
              <CardTitle>Total No. of Order Placed</CardTitle>
              {TotalOrder.map((totalorder) => (
                <>
                  <CardText>{totalorder.Data}</CardText>
                </>
              ))}
            </CardHeader>
          </h5>
        </Card>
        <Card
          body
          outline
          color="info"
          style={{
            maxwidth: "100%",
            maxHeight: "100rem",
            color: "black",
            fontFamily: "Times New Roman, Times, serif",
            margin: "1rem",
            borderStyle: "groove",
            borderWidth: "3px",
            borderRadius: "7px",
            boxShadow: "20px 20px 50px grey",
            backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
          }}
        >
          <h5>
            <CardHeader
              style={{
                backgroundColor: "white",
                borderStyle: "groove",
                borderWidth: "3px",
                borderRadius: "7px",
                padding: "3px",
                margin: "0px",
              }}
            >
              <CardTitle>Total No. of Parcel Placed</CardTitle>
              {TotalParcel.map((totalparcel) => (
                <>
                  <CardText>{totalparcel.Data}</CardText>
                </>
              ))}
            </CardHeader>
          </h5>
        </Card>
      </CardGroup>

      <Table
        striped
        bordered
        hover
        style={{
          color: "white",
          background: `linear-gradient(to right, #56ccf2, #2f80ed)`,
          maxwidth: "80%",
          maxHeight: "100rem",
          fontFamily: "Times New Roman, Times, serif",
          marginTop: "2rem",
          borderStyle: "groove",
          borderWidth: "3px",
          borderRadius: "10px",
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
          <div>
            <tbody>
              <tr>
                <td>{tableorder.TableNo}</td>
                <td>{tableorder.SessionId}</td>
                <td>
                  <Button>{tableorder.BillPayment}</Button>
                </td>
                <td>
                  <Button onClick={handleShow} value={tableorder.TableNo}>
                    ShowDetails
                  </Button>
                </td>
              </tr>
            </tbody>
          </div>
        ))}
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Table details</Modal.Header>
        <Modal.Body>
          {TableOrder.map((user) =>
            val == user.TableNo
              ? user.items.map((itemval) => (
                  <ul>
                    {" "}
                    <li>{itemval.name + "=>" + itemval.price}</li>
                  </ul>
                ))
              : ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Table
        striped
        bordered
        hover
        style={{
          color: "white",
          background: `linear-gradient(to right, #56ccf2, #2f80ed)`,
          maxwidth: "80%",
          maxHeight: "100rem",
          fontFamily: "Times New Roman, Times, serif",
          marginTop: "2rem",
          borderStyle: "groove",
          borderWidth: "3px",
          borderRadius: "10px",
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
                <Button onClick={Payment1}>{parcelorder.BillPayment}</Button>
              </td>
              <td>
                <Button>{parcelorder.ShowDetails}</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default BillerHome;
