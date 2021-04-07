import React, { useState } from "react";
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
import Categorypage from "./Catagorypage";

const Tablepage = () => {
  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const nextClick = (e) => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };
  const [showCategory, setShowCategory] = useState(false);
  const [order, setOrder] = useState({
    tableNo: null,
    waitername: null,
    billStatus: "pending",
    orderStatus: "pending",
    items: [],
  });
  const handleTableClick = (tableName, event) => {
    console.log(tableName.name);
    setShowCategory(true);
    // order.tableNo = tableName.name;
    // return (
    //   <div>
    //     <Categorypage />
    //   </div>
    // );
  };

  return (
    <div>
      {!showCategory && (
        <Grid container spacing={3}>
          {placeorder.map((e) => {
            return (
              <Grid
                md={4}
                lg={3}
                sm={12}
                xs={12}
                onClick={(event) => handleTableClick(e, event)}
              >
                <Card
                  style={{
                    marginTop: "40px",
                    backgroundColor: "lightgreen",
                    marginRight: "30px",
                    fontSize: "50px",
                    marginLeft: "30px",
                  }}
                >
                  <Card.Body>
                    <Card.Header style={{ backgroundColor: "green" }}>
                      <Card.Title style={{ color: "white" }}>
                        {e.name}
                      </Card.Title>
                    </Card.Header>
                  </Card.Body>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {showCategory && <Categorypage />}
    </div>
  );
};

export default Tablepage;
