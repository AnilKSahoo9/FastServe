import React from "react";
// import "./AdminStyles.css";
import "../../css/AdminStyles.css";
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
    <div className="admin_parent_table_div_cards">
      {/* <Container> */}
        <Row className="admin_table_Design">
          {table.map((user) => (
            <Col xs={12} lg={4} md={6}>
              {user.status === "Active" ? (
                <CardDeck>
                  <Card className="tableactivecard text-center mb-3 mt-3">
                    <h5>
                      {" "}
                      <Card.Header className="tablecardheader">
                       <b> Table no {user.name}</b>
                      </Card.Header>
                    </h5>
                    <Card.Body className="tablecardbody">
                      <Card.Text> <b>Status: {user.status} </b></Card.Text>
                      <Card.Text><b>Sessions no: {user.sessionsno}</b></Card.Text>
                      {/* <Card.Text>Table no:{user.tableno}</Card.Text> */}
                      <Button
                         className="admintable_btnstyle"
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
                    className="tableinactivecard text-center mb-3 mt-3">
                    <h5>{" "}
                      <Card.Header className="tablecardheader">
                        {" "}
                       <b> Table no {user.name} </b>
                      </Card.Header>
                    </h5>
                    <Card.Body className="tablecardbody">
                      <Card.Text> <b>Status: {user.status}</b></Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              )}
            </Col>
          ))}
        </Row>
      {/* </Container> */}
      </div>
    </div>
  );
};
export default AdminTable;

// import React, { Fragment, useState, useEffect } from "react";

// // import "./Table.css";
// import { Card, Button } from "react-bootstrap";
// import { Grid,  Dialog,
//   DialogActions,
//   DialogContent,

//   DialogTitle, } from "@material-ui/core";

// const AdminTable = () => {
//   const [showDialog, setshowDialog] = useState(false)
//   const TableInfo = [
//     { Tablename: "1", sessionno: "3", status: "Active",orderdetails : ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "2", sessionno: "6", status: "Active", orderdetails: ["rice","dal"] ,occupay:false},
//     { Tablename: "3", sessionno: "8", status: "Active", orderdetails: ["roti","panir"] ,occupay:true},
//     { Tablename: "4", sessionno: "4", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"], occupay:true ,},
//     { Tablename: "5", sessionno: "5", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:false},
//     { Tablename: "6", sessionno: "7", status: "Active", orderdetails: ["Chhole Bhature", "Bharwa Bhindi"] ,occupay:true},
    
      
//   ];

//   const closeDialog = () => {
//     setshowDialog(false)
//   };

//   const orderDetail = () => {
//     setshowDialog(true)
//   }
// let M = TableInfo.map(z =>{return(z.orderdetails)})
// console.log(M)
//   return (
//     <Fragment>
//       <Grid container spacing={1}>
//         {TableInfo.map((e, index) => {
//          return( <Grid md={4} lg={4} sm={12} xs={12} >
//             <Card style={{ height : " 15rem",width: "20rem",marginLeft:"70px",backgroundColor:e.occupay === true ? "green":"red",marginTop:"20px"  }} key={index}>
//               <Card.Body>
//                 {/* <Card.Title>Card Title</Card.Title> */}
//                 <Card.Header style={{backgroundColor:"gray"}}>Table no{e.Tablename}</Card.Header>
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
//         hiiii
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

// export default AdminTable;
 