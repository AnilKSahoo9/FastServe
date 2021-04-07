import React, { Fragment, useState } from "react";
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
import Listmenu from "./Listmenu";

function Catagorypage() {
  const [showItems, setShowItems] = useState(false);

  const handleCategoryClick = (tableName, event) => {
    console.log(tableName.name);
    setShowItems(true);
    // order.tableNo = tableName.name;
    // return (
    //   <div>
    //     <Categorypage />
    //   </div>
    // );
  };

  return (
    <div>
      {!showItems && (
        <Grid container spacing={3}>
          {list.map((e) => {
            return (
              <Grid
                md={4}
                lg={3}
                sm={12}
                xs={12}
                onClick={(event) => handleCategoryClick(e, event)}
              >
                {/* <Card style={{ marginTop: '30px', backgroundColor:"blue", marginRight:'40px', marginLeft:'30px' }}> */}
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
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
                  }}
                >
                  <Card.Body>
                    <Card.Header style={{ backgroundColor: "black" }}>
                      <Card.Title>{e.name}</Card.Title>
                    </Card.Header>
                  </Card.Body>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
      {showItems && <Listmenu />}
      {/* <Button></Button> */}
    </div>
  );
}

export default Catagorypage;
