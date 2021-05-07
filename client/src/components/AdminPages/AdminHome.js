import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    //   CardImg,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    //   CardActions,
    //   CardSubtitle,
    //   Button,
    CardGroup,
    //   Table,
} from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

// import base_Url from "../../Api/Homeapi";
// import "./AdminStyles.css";
import "../../css/AdminStyles.css";

import io from "socket.io-client";
let socket;

const AdminHome = () => {
    const [data, setData] = useState({});
    //const [POTD,setPOTD] = useState(0);
    const [loading, setLoading] = useState(true)

    const ENDPOINT = "ws://localhost:4000/api/admin/socket";
    let connectionOptions = {
        "force new connection": true,
        reconnectionAttempts: "Infinity",
        timeout: 10000,
        transports: ["websocket"],
    };

    const fetchData = () => {
        axios
            .get(`http://localhost:4000/admin-home/`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setLoading(false)
                //setPOTD(response.data.ParcelOrdersTillNow)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        socket = io(ENDPOINT, connectionOptions);
        //console.log(socket);
        socket.on("adminData", (adminDataP) => {
            //console.log(adminData);
            setData((prev) => ({ ...prev, ParcelOrdersTillNow: prev.ParcelOrdersTillNow + adminDataP }));
            socket.emit("admin", { name: "swetapj" });
        });
        socket.on("adminDataS", (adminDataS) => {
            //console.log(adminDataS);
            setData((prev) => ({ ...prev, TableOrdersTillNow: adminDataS }));
            socket.emit("adminS", { name: "sweta" });
        });
        socket.on("adminDataTA", (adminDataTA) => {
            //console.log(adminDataTA);
            setData((prev) => ({ ...prev, TablesActive: adminDataTA }));
            socket.emit("adminTA", { name: "swetap" });
        });
        socket.on("parcelsAccepted", (parcelsAccepted) => {
            setData((prev) => ({ ...prev, TotalOrdersAcceptedByKitchen: parcelsAccepted }));
            socket.emit("PA", { name: "anil" });
        });
        socket.on("sessionsAccepted", (sessionsAccepted) => {
            setData((prev) => ({ ...prev, TotalOrdersAcceptedByKitchen: prev.TotalOrdersAcceptedByKitchen + sessionsAccepted }));
            socket.emit("SA", { name: "bhabs" });
        });
        socket.on("totalAmountTable", (totalAmountTable) => {
            socket.emit("TAT");
        });
        socket.on("totalAmountParcel", (totalAmountParcel) => {
            socket.emit("TAP");
        });
        socket.on("waitersWorking", (waitersWorking) => {
            setData((prev) => ({ ...prev, TotalWaitersWorking: prev.TotalWaitersWorking + waitersWorking }));
            socket.emit("WW");
        });
        fetchData();
    }, []);

    //console.log(data);
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
                    <div className="admin_parent_div_cards">
                        <CardGroup >
                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info">
                                    <h5>
                                        <CardHeader className="admin_card_header" >
                                            <CardTitle><b>Active Tables</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body" >
                                        {/* <hr></hr> */}
                                        <CardText ><strong>{data.TablesActive}</strong></CardText>
                                        <p>No. of Active Tables</p>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info">
                                    <h5>
                                        <CardHeader className="admin_card_header" >
                                            <CardTitle><b>Tables</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body">
                                        {/* <hr></hr> */}
                                        <CardTitle><strong>{data.TableOrdersTillNow}</strong></CardTitle>
                                        <p >No. of Table Orders Placed</p>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info" >
                                    <h5>
                                        <CardHeader className="admin_card_header" >
                                            <CardTitle><b>Parcels</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body">
                                        {/* <hr></hr> */}
                                        <CardTitle><strong>{data.ParcelOrdersTillNow}</strong></CardTitle>
                                        <p >No. of Parcel Orders Placed</p>
                                    </CardBody>
                                </Card>
                            </div>
                        </CardGroup>

                        <CardGroup >
                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info" >
                                    <h5>
                                        <CardHeader className="admin_card_header" >
                                            <CardTitle><b>Employees</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body">
                                        {/* <hr></hr> */}
                                        <CardTitle><strong>{data.TotalWaitersWorking}</strong></CardTitle>
                                        <p >No. of Employees Working Today</p>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info" >
                                    <h5>
                                        <CardHeader className="admin_card_header">
                                            <CardTitle><b>Kitchens</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body">
                                        {/* <hr></hr> */}
                                        <CardTitle><strong>{data.TotalOrdersAcceptedByKitchen}</strong></CardTitle>
                                        <p >No. of Orders Accepted by Kitchen</p>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="admin_style_card">
                                <Card className="admin_card_design" body outline color="info" >
                                    <h5>
                                        <CardHeader className="admin_card_header" >
                                            <CardTitle><b>Billers</b></CardTitle>
                                        </CardHeader>
                                    </h5>
                                    <CardBody className="admin_card_body">
                                        {/* <hr></hr> */}
                                        <CardTitle><strong>{data.TotalAmountCollected}</strong></CardTitle>
                                        <p style={{ color: "white", fontSize: "20px" }}>Total Amount Collected by Biller</p>
                                    </CardBody>
                                </Card>
                            </div>
                        </CardGroup>
                    </div>
                )}
        </div>
    )
}
export default AdminHome;
