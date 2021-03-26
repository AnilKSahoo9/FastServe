import React, { useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import {
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    Button,
    CardGroup
} from "reactstrap";
 import "./AdminStyles.css";
 var Customertableorders = [
    {
        TableNo : 1,
        Orderstatus : "Food prepartion not started",

    },
    {
        TableNo : 2,
        Orderstatus : "Food prepared"
    },
    {
        TableNo : 3,
        Orderstatus : "Food preparation almost complete"
    },
    {
        TableNo : 4,
        Orderstatus : "Ready to Serve",
        backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
    },
]
var Customerparcelorders = [
    {
        ParcelNo : 1,
        Orderstatus : "Parcel Ready"
    },
    {
        ParcelNo : 2,
        Orderstatus : "Food prepared"
    },
    {
        ParcelNo : 3,
        Orderstatus : "Parcel is not ready",
        backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`
        
    },
]
const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 668, itemsToShow: 2, itemsToScroll: 2 },
    // { width: 1200, itemsToShow: 3 },
    // { width: 1500, itemsToShow: 4 }
  ];
const Customer = (props) => {

    return (

        <div className="inner-container"style={{ marginRight: "7rem" }}>
            <Carousel breakPoints={breakPoints} interval={2000}>
            {Customertableorders.map((Customertableorder) => ( 
                <Card body outline color="info" style={{
                    width: '50%',
                    height: "25rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    backgroundImage:  `linear-gradient(to right bottom, #1e90ff, #00bfff, #1e90ff, #00bfff, #00bfff)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle style={{fontSize: "40px"}}>
                            Table No : 
                            {Customertableorder.TableNo}
                            </CardTitle>
                        </CardHeader>
                    </h5> 
                    <CardBody>
            

                        <hr></hr>
                        <p style={{fontSize: "30px"}}>{Customertableorder.Orderstatus}</p>
                    </CardBody>
                </Card>
            ))}
           
            </Carousel>
            <Carousel breakPoints={breakPoints} interval={1000}>
            {Customerparcelorders.map((Customerparcelorder) => ( 
                <Card body outline color="info" style={{
                    width: '50%',
                    height: "25rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                     backgroundImage: `linear-gradient(to bottom,  #1e90ff,#1e90ff)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle style={{fontSize: "40px"}}>
                            Parcel No : 
                            {Customerparcelorder.ParcelNo}
                            </CardTitle>
                        </CardHeader>
                    </h5> 
                    <CardBody>
            

                        <hr></hr>
                        <p style={{fontSize: "30px"}}>{Customerparcelorder.Orderstatus}</p>
                    </CardBody>
                </Card>
            ))}
            
            </Carousel>
        </div>
    )
}

export default Customer;