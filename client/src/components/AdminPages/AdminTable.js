import React from "react";
import "./AdminStyles.css";
// import present from "../image/download.jpg";
// import notpresent from "../image/download (1).png";
import {
  Button,
  Modal,
  Card,
  CardDeck,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { table } from "../../StaticData/tableData";
const AdminTable = () => {
  const [show, setShow] = useState(false);
  const [val, setname] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setname(event.target.value);
  };

  return (
    <div className="inner-container">
      <Container>
        <Row>
          {table.map((user) => (
            <Col xs={12} lg={4} md={6}>
              {user.status === "Active" ? (
                <CardDeck>
                  <Card
                    border="secondary"
                    className="text-center mb-3 mt-3"
                    style={{
                      width: "100%",
                      height: "16rem",
                      color: "black",
                      fontFamily: "Times New Roman, Times, serif",
                      margin: "1rem",
                      borderStyle: "groove",
                      borderWidth: "3px",
                      borderRadius: "7px",
                      boxShadow: "20px 20px 50px grey",
                      // backgroundImage: `linear-gradient(to bottom,#4dff03,#00d0ff )`
                      backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
                    }}
                  >
                    {/* <Card.Img
                    variant="top"
                    src={present}
                    alt="Card image cap"
                    style={{ height: 30 }}
                  /> */}
                    <h5>
                      {" "}
                      <Card.Header
                        style={{
                          backgroundColor: "white",
                          borderStyle: "groove",
                          borderWidth: "3px",
                          borderRadius: "7px",
                          padding: "3px",
                          margin: "1rem",
                        }}
                      >
                        Table no {user.name}
                      </Card.Header>
                    </h5>
                    <Card.Body>
                      <Card.Text> Status: {user.status}</Card.Text>
                      <Card.Text>Sessions no: {user.sessionsno}</Card.Text>
                      {/* <Card.Text>Table no:{user.tableno}</Card.Text> */}
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        value={user.name}
                      >
                        CurrentOrder
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header>currentorder</Modal.Header>
                        <Modal.Body>
                          {table.map((users) =>
                            users.name === val
                              ? users.currentorder.map((number) => (
                                  <li>{number}</li>
                                ))
                              : ""
                              
                          )}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                </CardDeck>
              ) : (
                <CardDeck>
                  <Card
                    border="secondary"
                    className="text-center mb-3 mt-3"
                    style={{
                      width: "100%",
                      height: "16rem",
                      color: "black",
                      fontFamily: "Times New Roman, Times, serif",
                      margin: "1rem",
                      borderStyle: "groove",
                      borderWidth: "3px",
                      borderRadius: "7px",
                      boxShadow: "20px 20px 50px grey",
                      backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`,
                    }}
                  >
                    {/* <Card.Img
                    variant="top"
                    src={notpresent}
                    alt="Card image cap"
                    style={{ height: 30 }}
                  /> */}
                    <h5>
                      {" "}
                      <Card.Header
                        style={{
                          backgroundColor: "white",
                          borderStyle: "groove",
                          borderWidth: "3px",
                          borderRadius: "7px",
                          padding: "3px",
                          margin: "1rem",
                        }}
                      >
                        {" "}
                        Table no {user.name}
                      </Card.Header>
                    </h5>
                    <Card.Body>
                      <Card.Text> Status: {user.status}</Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default AdminTable;

// import React, { Fragment, useState, useEffect } from "react";

// import "./Table.css";
// import { Card, Button } from "react-bootstrap";
// import { Grid,  Dialog,
//   DialogActions,
//   DialogContent,

//   DialogTitle, } from "@material-ui/core";

// const Table = () => {
//   const [showDialog, setshowDialog] = useState(false)
//   const TableInfo = [
//     { Tablename: "1", sessionno: "3", status: "Active", currentorder: ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "2", sessionno: "6", status: "Active", orderdetails: ["rice","dal"] ,occupay:false},
//     { Tablename: "3", sessionno: "8", status: "Active", orderdetails: ["roti","panir"] ,occupay:true},
//     { Tablename: "4", sessionno: "4", status: "Active", currentorder: ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "5", sessionno: "5", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:false},
//     { Tablename: "6", sessionno: "7", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:true},
//     { Tablename: "7", sessionno: "4", status: "Active", currentorder: ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "8", sessionno: "2", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:false},
//     { Tablename: "9", sessionno: "6", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:true},
//     { Tablename: "10", sessionno: "9", status: "Active", currentorder: ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "12", sessionno: "8", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:false},
//     { Tablename: "12", sessionno: "3", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:true},
//   ];

//   const closeDialog = () => {
//     setshowDialog(false)
//   };

//   const orderDetail = () => {
//     setshowDialog(true)
//   }

//   return (
//     <Fragment>
//       <Grid container spacing={2}>
//         {TableInfo.map((e, index) => {
//          return( <Grid md={2} lg={2} sm={12} xs={12} >
//             <Card style={{ height : " 15rem",width: "10rem",backgroundColor:e.occupay === true ? "green":"red",marginTop:"20px"  }} key={index}>
//               <Card.Body>
//                 {/* <Card.Title>Card Title</Card.Title> */}
//                 <Card.Header>Table no{e.Tablename}</Card.Header>
//                 <Card.Text>No of sessions:{e.sessionno}</Card.Text>
//                 <Card.Text>Status:{e.status}</Card.Text>
//                 <Button variant="primary" onClick={()=>orderDetail()}>currentorder</Button>
//               </Card.Body>
//             </Card>
//           </Grid>)
//         })}
//       </Grid>
//       <Dialog
//         open={showDialog}
//         onClose={closeDialog}
//         maxWidth="sm"
//         fullWidth
//       >

//         <DialogContent >

//         </DialogContent>

//         <DialogActions>

//           <Button
//             onClick={() => closeDialog()
//             }
//             color="primary"
//             style={{ marginRight: "5px" }}
//           >
//             Close
//                       </Button>
//         </DialogActions>
//       </Dialog>

//     </Fragment>
//   );
// };

// export default Table;
