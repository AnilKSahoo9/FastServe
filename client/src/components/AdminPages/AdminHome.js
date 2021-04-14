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
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                    }}>
                    <h5>
                        <CardHeader style={{
                            color:"white",borderRadius: '7px',fontSize:"25px",
                            padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Active Tables</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody >

                        <hr></hr>
                        <CardText >{data.Tables}</CardText>
                        <p style={{color: "white", fontSize: "20px"}}>No. of Tables Active</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                            color:"white",borderRadius: '7px',fontSize:"25px",
                            padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Tables</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>
                        <hr></hr>
                        <CardTitle>{data.Parcels}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>No. of Parcel Placed</p>
                    </CardBody>
                </Card>

                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                            color:"white",borderRadius: '7px',fontSize:"25px",
                            padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Parcels</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>
                        <hr></hr>
                        <CardTitle>{data.Parcels}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>No. of Parcel Order Placed</p>
                    </CardBody>
                </Card>




                
            </CardGroup>
            <CardGroup >
            <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                             color:"white",borderRadius: '7px',fontSize:"25px",
                             padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Waiter</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Waiters}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>No. of Waiters Working</p>
                    </CardBody>
                </Card>

                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                            color:"white",borderRadius: '7px',fontSize:"25px",
                            padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Kitchens</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Kitchens}</CardTitle>
                        <p style={{color: "white", fontSize: "18px"}}>No. of Orders Accepted by Kitchen</p>
                    </CardBody>
                </Card>
                <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    // borderRadius: '25px',
                    sharpcorner: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                           color:"white",borderRadius: '7px',fontSize:"25px",
                           padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle><b>Billers</b></CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Billers}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>Total amount collected by Biller</p>
                    </CardBody>
                </Card>
                {/* <Card body outline color="info" style={{
                    maxwidth: '100%',
                    maxHeight: "100rem",
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                }}>
                    <h5>
                        <CardHeader style={{
                            color:"white",borderRadius: '7px',fontSize:"25px",
                            padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                        }}>
                            <CardTitle>Customers</CardTitle>
                        </CardHeader>
                    </h5>
                    <CardBody>

                        <hr></hr>
                        <CardTitle>{data.Customers}</CardTitle>
                        <p style={{color: "white", fontSize: "20px"}}>No. of Customers Visited</p>
                    </CardBody>
                </Card> */}

            </CardGroup>
        </div>


    )
}
export default AdminHome;
