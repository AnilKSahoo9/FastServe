import React, { useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";
import "../../css/KitchenStyle.css";
import Countdown from 'react-countdown';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

import io from "socket.io-client";
let socket;

const KitchenHome = () => {

  const [time, setTime] = useState(0);
  const [kitchenData, setKitchenData] = useState([]);
  const [loading, setLoading] = useState(true)
  const ENDPOINT = "ws://localhost:4000/api/socket";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/getkitchendata/`);
      setKitchenData(response.data);
      setLoading(false)
      // console.log(response.data);
    };
    fetchData();
  }, [])
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  useEffect(() => {
    let connectionOptions = {
      "force new connection": true,
      reconnectionAttempts: "Infinity",
      timeout: 10000,
      transports: ["websocket"],
    };
    socket = io(ENDPOINT, connectionOptions);
    console.log(socket);

    socket.on("pracelKitchenData", (newKitchenData) => {
      console.log(newKitchenData);
      setKitchenData(prev => ([newKitchenData, ...prev]))
      // console.log(typeof (kitchenData[1]._id), typeof (kitchenData[1].required_time), typeof (kitchenData[1].orderStatus))
      // if (newKitchenData.required_time !== undefined) {
      // let objIndex = kitchenData.findIndex((obj => obj._id === String(newKitchenData._id)));
      // console.log(kitchenData)
      // kitchenData[objIndex].required_time = newKitchenData.required_time;
      // kitchenData[objIndex].orderStatus = newKitchenData.orderStatus;
      // console.log(kitchenData[objIndex])
      // let array = [...kitchenData]
      // setKitchenData(prev=>([...prev,prev));
      // }
      // let kitchenData2 = {};
      // kitchenData2 = newKitchenData;
      // kitchenData.push(kitchenData2);
      socket.emit("forkitchen", { name: "arti" });
    });
    socket.on("tableKitchenData", (newKitchenData) => {
      console.log(newKitchenData);
      setKitchenData(prev => ([newKitchenData, ...prev]))
      // console.log(typeof (kitchenData[1]._id), typeof (kitchenData[1].required_time), typeof (kitchenData[1].orderStatus))
      // if (newKitchenData.required_time !== undefined) {
      // let objIndex = kitchenData.findIndex((obj => obj._id === String(newKitchenData._id)));
      // console.log(kitchenData)
      // kitchenData[objIndex].required_time = newKitchenData.required_time;
      // kitchenData[objIndex].orderStatus = newKitchenData.orderStatus;
      // console.log(kitchenData[objIndex])
      // let array = [...kitchenData]
      // setKitchenData(prev=>([...prev,prev));
      // }
      // let kitchenData2 = {};
      // kitchenData2 = newKitchenData;
      // kitchenData.push(kitchenData2);
      // socket.emit("forkitchen", { name: "arti" });
    });

  }, []);

  //order is accepted
  const handleAccept = (e) => {
    const payload = {
      orderStatus: "accept",
      _id: e.target.value,
      time: time,
      orderType: e.target.name,
    };
    axios
      .post(
        `http://localhost:4000/postkitchendata/`,
        payload,
        {
          header: {
            "Content-type":
              "application/json,application/x-www-form-urlencoded, charset=UTF-8",
          },
        }
      )
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Order Accepted",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "success",
            timer: 1000,
          });
          let objIndex = kitchenData.findIndex((obj => obj._id === response.data._id));
          kitchenData[objIndex].required_time = response.data.required_time;
          kitchenData[objIndex].orderStatus = response.data.orderStatus
          let array = [kitchenData[objIndex]]
          setKitchenData(prev => (prev.map(obj => array.find(o => o._id === obj._id) || obj)))

        }
      }).catch(err => console.log(err))
  };

  //when order is canceled
  const handleReject = (e) => {
    const payload = {
      orderStatus: "reject",
      _id: e.target.value,
      orderType: e.target.name,
    };
    axios
      .post(
        `http://localhost:4000/postkitchendata/`,
        payload,
        {
          header: {
            "Content-type":
              "application/json,application/x-www-form-urlencoded, charset=UTF-8",
          },
        }
      )
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Order Rejected",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "error",
            timer: 1000,
          });
          console.log(response.data);
          let objIndex = kitchenData.findIndex((obj => obj._id === response.data._id));
          kitchenData[objIndex].orderStatus = response.data.orderStatus
          let array = [kitchenData[objIndex]]
          setKitchenData(prev => (prev.map(obj => array.find(o => o._id === obj._id) || obj)))

        }
      }).catch(err => console.log(err))
  };
  const handleComplete = (e) => {
    const payload = {
      orderStatus: "complete",
      _id: e.target.value,
      orderType: e.target.name,
    };
    axios
      .post(
        `http://localhost:4000/postkitchendata/`,
        payload,
        {
          header: {
            "Content-type":
              "application/json,application/x-www-form-urlencoded, charset=UTF-8",
          },
        }
      )
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Order Completed",
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            icon: "success",
            timer: 1000,
          });
          console.log(response.data);
          let objIndex = kitchenData.findIndex((obj => obj._id === response.data._id));
          kitchenData[objIndex].orderStatus = response.data.orderStatus
          let array = [kitchenData[objIndex]]
          setKitchenData(prev => (prev.map(obj => array.find(o => o._id === obj._id) || obj)))
        }
      }).catch(err => console.log(err))
  };

  // console.log("outside", kitchenData.map(item => item.orderStatus))
  return (
    <div className="inner-container">
      {
        loading ? (
          <div style={{ marginTop: "290px" }}>
            <ClipLoader
              color="#1f305e"
              loading={true}
              css={""}
              size={100}
            />
          </div>
        ) : (
          <div className="kitchen_home_design">
            <Table
              striped bordered hover
              className="kitchen_tableDisplay"
              variant="blue">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>Order Type</th>
                  <th>Order Id</th>
                  <th>Order Status</th>
                  <th>Show Details</th>
                </tr>
              </thead>
              {/* {tableData()} */}
              <tbody hover={"true"}>
                {kitchenData.map((eachOrder, index) => (
                  <tr
                    key={index}
                    style={
                      eachOrder.orderStatus === "accept" || eachOrder.orderStatus === "complete"
                        ? { background: "#d9ffb3" }
                        : eachOrder.orderStatus === "reject"
                          ? { background: "#ff9999" }
                          : { background: "#ffffe6" }
                    }
                  >
                    <td>{index + 1}</td>
                    {!eachOrder.tableNo ? <td>Parcel</td> : <td>Table:-{eachOrder.tableNo}</td>}
                    <td>{eachOrder._id.slice(0, 8).toUpperCase()}</td>
                    <td>
                      {eachOrder.orderStatus === "accept" ? (
                        <div>
                          {" "}
                          <h5 className="blink">Order Processing......</h5>
                          <section className="timer">
                            <Countdown date={Date.now() + JSON.parse(eachOrder.required_time)} />
                          </section>
                          <div className="acceptButton">
                            <Button variant="success" onClick={handleComplete} value={eachOrder._id} name={!eachOrder.tableNo ? "parcel" : "table"}>Completed</Button>
                          </div>
                        </div>
                      ) : eachOrder.orderStatus === "reject" ? (
                        <h3 className="blink">Order Rejected</h3>
                      ) : eachOrder.orderStatus === "complete" ? (<h5 className="blink">Order Completed</h5>) : (
                        <>
                          <div>
                            <Form>
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Time Required</Form.Label>
                                <Form.Control as="select" onChange={handleTimeChange} placeholder="Select Time">
                                  <option value="0">Select Time</option>
                                  <option value="300000">5 min</option>
                                  <option value="600000">10 min</option>
                                  <option value="900000">15 min</option>
                                  <option value="20">20 min</option>
                                  <option value="25">25 min</option>
                                  <option value="30">30 min</option>
                                  <option value="40"> 40 min</option>
                                  <option value="60">60 min</option>
                                </Form.Control>
                              </Form.Group>
                            </Form>
                            <Button
                              variant="success"
                              onClick={handleAccept}
                              value={eachOrder._id}
                              name={!eachOrder.tableNo ? "parcel" : "table"}
                            >
                              Accept
                      </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={handleReject}
                              value={eachOrder._id}
                              name={!eachOrder.tableNo ? "parcel" : "table"}
                            >
                              Reject
                      </Button>
                          </div>
                        </>
                      )}
                    </td>
                    <td>
                      <ol>
                        {eachOrder.items.map((val, index) => (
                          <li key={index}>{val.name + "---" + val.quantity}</li>
                        ))}
                      </ol>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )
      }
    </div>
  );
}

export default KitchenHome;
