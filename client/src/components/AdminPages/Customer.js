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
        Orderstatus : "Food prepartion not started"
    },
    {
        TableNo : 2,
        Orderstatus : "Food prepared"
    },
    {
        TableNo : 3,
        Orderstatus : "Food preparation almost complete"
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
]
const breakPoints = [
    { width: 1500, itemsToShow: 1 },
    { width: 1768, itemsToShow: 2, itemsToScroll: 2 },
    // { width: 1200, itemsToShow: 3 },
    // { width: 1500, itemsToShow: 4 }
  ];
const Customer = (props) => {

    return (

        <div className="inner-container"style={{ marginRight: "7rem" }}>
            <Carousel breakPoints={breakPoints}>
            {Customerparcelorders.map((Customerparcelorder) => ( 
                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    height: "20rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                     backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
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
                        <p style={{fontSize: "40px"}}>{Customerparcelorder.Orderstatus}</p>
                    </CardBody>
                </Card>
            ))}
            {Customertableorders.map((Customertableorder) => ( 
                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    height: "20rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
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
                        <p style={{fontSize: "40px"}}>{Customertableorder.Orderstatus}</p>
                    </CardBody>
                </Card>
                ))}
            </Carousel>
        </div>
    )
}

export default Customer;