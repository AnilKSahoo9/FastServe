import React from 'react'
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
const BillerHome = () => {
    var TotalOrder = [
        {
            Data: 50
        }
    ]
    var TotalParcel = [
        {
            Data: 80
        }
    ]
    var TableOrder = [
        {
            TableNo : 1,
            SessionId: "Ses1",
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            TableNo : 2,
            SessionId: "Ses2",
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            TableNo : 3,
            SessionId: "Ses3",
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            TableNo : 4,
            SessionId: "Ses4",
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        }
    ]
    var ParcelOrder = [
        {
            ParcelNo : 1,
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            ParcelNo : 2,
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            ParcelNo : 3,
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        },
        {
            ParcelNo : 4,
            BillPayment:"Pay",
            ShowDetails:"Showdetails"
        }
    ]
    return (
            <div className="inner-container"style={{ marginRight: "4rem" }}>
      <CardGroup >
                <Card body outline color="info"
                    style={{
                        maxwidth: '100%',
                        maxHeight: "100rem",
                        color: 'black',
                        fontFamily: "Times New Roman, Times, serif",
                        margin: '1rem',
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
                            <CardTitle>Total No. of Order Placed</CardTitle>
                            {TotalOrder.map((totalorder) => (
                                    <>
                                    <CardText >{totalorder.Data}</CardText>
                                    
                                </>
                                ))}
                        </CardHeader>
                    </h5>
                </Card>
                <Card body outline color="info"
                    style={{
                        maxwidth: '100%',
                        maxHeight: "100rem",
                        color: 'black',
                        fontFamily: "Times New Roman, Times, serif",
                        margin: '1rem',
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
                            <CardTitle>Total No. of Parcel Placed</CardTitle>
                            {TotalParcel.map((totalparcel) => (
                                    <>
                                    <CardText >{totalparcel.Data}</CardText>
                                    
                                </>
                                ))}
                        </CardHeader>
                    </h5>
                </Card>
                </CardGroup>
                <Table striped bordered hover style={{ color: "white",
                                backgroundColor:"#c48be0",
                                maxwidth: '80%',
                                maxHeight: "100rem",
                                fontFamily: "Times New Roman, Times, serif",
                                marginTop:"2rem",
                                borderStyle: 'groove',
                                borderWidth: '3px',
                                borderRadius: '10px' }}>
                        <thead>
                            <tr>
                                <th>Table No</th>
                                <th>SessionId</th>
                                <th>Bill Payment</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        {TableOrder.map((tableorder) => (
                            <tbody>
                                <tr>
                                    <td>{tableorder.TableNo}</td>
                                    <td>{tableorder.SessionId}</td>
                                    <td><Button>{tableorder.BillPayment}</Button></td>
                                    <td><Button>{tableorder.ShowDetails}</Button></td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                    <Table striped bordered hover style={{ color: "white",
                                backgroundColor:"#c48be0",
                                maxwidth: '80%',
                                maxHeight: "100rem",
                                fontFamily: "Times New Roman, Times, serif",
                                marginTop:"2rem",
                                borderStyle: 'groove',
                                borderWidth: '3px',
                                borderRadius: '10px' }}>
                        <thead>
                            <tr>
                                <th>Parcel No</th>
                                <th>Bill Payment</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        {ParcelOrder.map((parcelorder) => (
                            <tbody>
                                <tr>
                                    <td>{parcelorder.ParcelNo}</td>
                                    <td><Button>{parcelorder.BillPayment}</Button></td>
                                    <td><Button>{parcelorder.ShowDetails}</Button></td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
        </div>
    )
}

export default BillerHome
