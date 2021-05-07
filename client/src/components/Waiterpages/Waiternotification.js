import React from "react";
// import { Carousel, Card, Row, Col, Badge } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import img from "../KitchenPages/parcel.jpg";
import table from "../KitchenPages/tablepic.jpg";
import _ from "lodash";
import "../../css/WaiterStyle.css";

import {
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardActions,
  CardSubtitle,
  Button,
  CardGroup,
  Table,
} from "reactstrap";
var kitchencompletedData = [
                            "Item Making Process Completed",
                            "Item Making Process In Progress",
                            "Item Making Process Completed",
                            "Item Making Process Completed",
                            "Item Making Process In Progress",
                            "Item Making Process Completed",
                            "Item Making Process Completed",
                            "Item Making Process In Progress",
                            "Item Making Process Completed",
                            "Item Making Process Completed"
                             ];
const Waiternotification = () => {
  return (
    <div className="container-fluid">
     <div className="waiter_notification">
      {kitchencompletedData.map((item)=>(
      <Card className="waiter_notification_card" 
      body outline color="info">
                    <CardBody className="waiter_notification_cardbody">
                    
                        <CardText >{item}</CardText>
                    
                    </CardBody>
                </Card>
                ))}  
      
      </div>
    </div>
  );
}
export default Waiternotification;
