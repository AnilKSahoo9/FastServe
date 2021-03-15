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
// import SideBar from "../shared/SideBar/SideBar";
 import "./AdminStyles.css";
const Customer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${base_Url}`)
      .then((response) => {
        //success call
        console.log(response);
        setData(response.data);
        // console.log( response.data )
        //  setTables(response.data.Tables.data)
      })
      .catch((error) => {
        //for error happen
        console.log(error);
      });
  }, []);

    return (
        <div className="inner-container"style={{ marginRight: "7rem" }}>
      <CardGroup >
                <Card body outline color="info"
                    style={{
                        maxwidth: '100%',
                        height: "20rem",
                        color: 'black',
                        fontFamily: "Times New Roman, Times, serif",
                        margin: '1rem',
                        borderStyle: 'groove',
                        borderWidth: '3px',
                        borderRadius: '7px',
                        boxShadow: '20px 20px 50px grey',
                        backgroundImage: `linear-gradient(to bottom,  #ffbc00,#ff0058)`
                    }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Table 1</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Waiters}</CardTitle>
                        <p>Food prepartion not storted</p>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    height: "20rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #12eb25, #12eb25, #12eb25, #12eb25, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Parcel 1</CardTitle>
                        </CardHeader>
                    </h5> 
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Customers}</CardTitle>
                        <p>Parcel ready</p>
                    </CardBody>
                </Card>

            </CardGroup>
        </div>

    )
}

export default Customer;