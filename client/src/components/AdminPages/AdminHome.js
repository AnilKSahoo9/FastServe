import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
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
    <>
      {/* <SideBar /> */}
      <div className="inner-container">
        <CardGroup>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Tables</CardTitle>
              <hr></hr>
              <CardText>{data.Tables}</CardText>
              <p>No. of Tables Active</p>
            </CardBody>
          </Card>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Parcels</CardTitle>
              <hr></hr>
              <CardTitle>{data.Parcels}</CardTitle>
              <p>No. of Parcel Placed</p>
            </CardBody>
          </Card>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Waiters</CardTitle>
              <hr></hr>
              <CardTitle>{data.Waiters}</CardTitle>
              <p>No. of Waiters Working</p>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to left top, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Kichens</CardTitle>
              <hr></hr>
              <CardTitle>{data.Kitchens}</CardTitle>
              <p>No. of Orders Accepted by Kitchen</p>
            </CardBody>
          </Card>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to left top, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Billers</CardTitle>
              <hr></hr>
              <CardTitle>{data.Billers}</CardTitle>
              <p>Total amount collected by Biller</p>
            </CardBody>
          </Card>
          <Card
            body
            outline
            color="info"
            style={{
              width: 200,
              height: 250,
              color: "white",
              backgroundImage: `linear-gradient(to left top, #051437, #004782, #0081a7, #00b98a, #12eb25)`,
            }}
          >
            <CardBody>
              <CardTitle>Customers</CardTitle>
              <hr></hr>
              <CardTitle>{data.Customers}</CardTitle>
              <p>No. of Customers Visited</p>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default AdminHome;
