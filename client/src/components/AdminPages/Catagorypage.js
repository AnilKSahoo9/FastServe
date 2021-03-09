import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Card, Button } from "react-bootstrap";


// import {
//   Card,
//   CardDeck,
//   Button,
//   CardHeader,
//   CardFooter,
//   CardBody,
//   CardTitle,
//   CardText,
// } from "reactstrap";
import { list } from "../../StaticData/listData";
  

function Catagorypage() {
  return (
    <Grid container spacing={3}>
        {list.map((e) => {
           return(<Grid md={4} lg={3} sm={12} xs={12} >
    <Card style={{ marginTop: '30px', backgroundColor:"blue", marginRight:'40px', marginLeft:'30px' }}>
  
  <Card.Body >
    <Card.Header  style={{backgroundColor:"red"}}>
    <Card.Title>{e.name}</Card.Title>
    </Card.Header>
  </Card.Body>
</Card>
       
</Grid>
        )})}
</Grid>
  )
}
    
  export default Catagorypage;