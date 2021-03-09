import React  from "react";
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

  import { placeorder } from "../../StaticData/placeorderData";

function Tablepage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const nextClick = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  return (
    <Grid container spacing={3}>
       {placeorder.map((e) => {
          return( <Grid md={4} lg={6} sm={12} xs={12} >
    <Card style={{ marginTop: '40px', backgroundColor:"gray" ,marginRight:'30px',fontSize:'50px', marginLeft:'30px'}}>
  
  <Card.Body onClick={(e)=> nextClick(e)}>
      <Card.Header style={{backgroundColor:"blue"}}>
    <Card.Title>{e.name}</Card.Title>
    </Card.Header>
     
  </Card.Body>
</Card>
</Grid>)
})}
</Grid>
  )
}
    
export default Tablepage;