import React, { useState, useEffect } from "react";
import axios from "axios";
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
import base_Url from "../../Api/Homeapi";
import "./AdminStyles.css";
const AdminHome = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${base_Url}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
      <div className="inner-container">
      <CardGroup >
                <Card className="admin_card_design" body outline color="info">
                    <h5>
                        <CardHeader className="admin_card_header" >
                            <CardTitle><b>Active Tables</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body" >
                           <hr></hr>
                        <CardText >{data.Tables}</CardText>
                        <p>No. of Tables Active</p>
                    </CardBody>
                </Card>
                <Card className="admin_card_design" body outline color="info">
                    <h5>
                        <CardHeader className="admin_card_header" >
                            <CardTitle><b>Tables</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body">
                        <hr></hr>
                        <CardTitle>{data.Parcels}</CardTitle>
                        <p >No. of Parcel Placed</p>
                    </CardBody>
                </Card>
                <Card className="admin_card_design" body outline color="info" >
                    <h5>
                        <CardHeader className="admin_card_header" >
                            <CardTitle><b>Parcels</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body">
                        <hr></hr>
                        <CardTitle>{data.Parcels}</CardTitle>
                        <p >No. of Parcel Order Placed</p>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card className="admin_card_design" body outline color="info" >
                    <h5>
                        <CardHeader className="admin_card_header" >
                            <CardTitle><b>Waiter</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body">

                        <hr></hr>
                        <CardTitle>{data.Waiters}</CardTitle>
                        <p >No. of Waiters Working</p>
                    </CardBody>
                </Card>
                <Card className="admin_card_design" body outline color="info" >
                    <h5>
                        <CardHeader className="admin_card_header">
                            <CardTitle><b>Kitchens</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body">

                        <hr></hr>
                        <CardTitle>{data.Kitchens}</CardTitle>
                        <p >No. of Orders Accepted by Kitchen</p>
                    </CardBody>
                </Card>
                <Card className="admin_card_design" body outline color="info" >
                    <h5>
                        <CardHeader className="admin_card_header" >
                            <CardTitle><b>Billers</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody className="admin_card_body">

                        <hr></hr>
                        <CardTitle>{data.Billers}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>Total amount collected by Biller</p>
                    </CardBody>
                </Card>
                
            </CardGroup>
        </div>


    )
}
export default AdminHome;
