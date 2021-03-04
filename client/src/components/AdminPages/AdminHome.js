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
const AdminHome = () => {
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
  // useEffect(() => {
  //     document.title="Home";
  //     // extractDatafromserver();
  //     const url = base_Url;
  //     fetch(url).then(response=>response.json(response))
  //     .then(response => console.log(response))
  // }, [])

  // function to call server
  //  const extractDatafromserver = () => {
  //      axios.get(`${base_Url}/Home`).then(
  //        (response) =>  {
  //             //success call
  //             // console.log( response )
  //             console.log( response.data )
  //             setTables(response.data)
  //        },
  //        (error) => {
  //            //for error happen
  //            console.log(error)
  //        }
  //      )
  //  };

  // const extractDatafromserver = () => {
  //     axios.get(`${url}`)
  //     .then((response) => {
  //         const responseData = responseData.data.Tables
  //         extractDatafromserver(console.log(responseData))
  //     })

  // }

  // calling server loading home function
  // useEffect(() => {
  //     extractDatafromserver();
  // },[]);
  // const [Tables, setTables] = useState([])

  return (
      <div className="inner-container"style={{ marginRight: "7rem" }}>
      <CardGroup >
                <Card body outline color="info"
                    style={{
                        width: '100%',
                        maxHeight: "100rem",
                        color: 'black',
                        fontFamily: "Times New Roman, Times, serif",
                        margin: '2rem',
                        borderStyle: 'groove',
                        borderWidth: '3px',
                        borderRadius: '7px',
                        boxShadow: '20px 20px 50px grey',
                        backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                    }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Tables</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody >

                        <hr></hr>
                        <CardText >{data.Tables}</CardText>
                        <p>No. of Tables Active</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    width: '100%',
                    maxHeight: "100rem",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Parcels</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>
                        <hr></hr>
                        <CardTitle>{data.Parcels}</CardTitle>
                        <p>No. of Parcel Placed</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    width: '100%',
                    maxHeight: "100rem",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Waiter</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Waiters}</CardTitle>
                        <p>No. of Waiters Working</p>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup >
                <Card body outline color="info" style={{
                    width: '100%',
                    maxHeight: "100rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Kichens</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Kitchens}</CardTitle>
                        <p>No. of Orders Accepted by Kitchen</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    width: '100%',
                    maxHeight: "100rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Billers</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Billers}</CardTitle>
                        <p>Total amount collected by Biller</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    width: '100%',
                    maxHeight: "100rem",
                    color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`
                }}>
                    <h5>
                        <CardHeader style={{
                            backgroundColor: "white", borderStyle: 'groove',
                            borderWidth: '3px',
                            borderRadius: '7px', padding: "3px", margin: "0px"
                        }}>
                            <CardTitle>Customers</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Customers}</CardTitle>
                        <p>No. of Customers Visited</p>
                    </CardBody>
                </Card>

            </CardGroup>
        </div>


    )
}
export default AdminHome;
