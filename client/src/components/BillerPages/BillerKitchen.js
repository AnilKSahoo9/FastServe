import React from 'react'
import { Col, Row, Table, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
// import OrderData from "../../StaticData/BillerOrderData"
const BillerKitchen = () => {
    var OrderData = [
        {
            Order: 1,
            status: "Item Making Process Completed"
        },
        {
            Order: 2,
            status: "Item Making Process In Progress"
        },
        {
            Order: 3,
            status: "Item Making Process Completed"
        },
        // {
        //     Order: 4,
        //     status: "Inactive Till Now"
        // }
    ]
    return (
        <div classname="inner-container">

            <Row>
                <Col className="col" md={5} xs={12}>
                <hr></hr>
                    <h2>Message From Kichens</h2>
                    <hr></hr>
                    <Row>
                        <Card className="card" body outline color="info">
                            <h5>
                                <CardHeader className="cardheader1">
                                    <CardTitle>Status for Order</CardTitle>
                                </CardHeader>
                            </h5>
                            <CardBody >

                                {/* <hr></hr> */}
                                {OrderData.map((Orderdata) => (
                                    <>
                                    <CardText >{Orderdata.Order}</CardText>
                                    <CardText >{Orderdata.status}</CardText>
                                </>
                                ))}
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
                <Col className="cols" md={5} xs={12} >
                <hr></hr>
                    <h2>Order Status From Kichens</h2>
                    <hr></hr>
                    <Table className="table" striped bordered hover >
                        <thead>
                            <tr>
                                <th>Order no.</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        {OrderData.map((Orderdata) => (
                            <tbody>
                                <tr>
                                    <td>{Orderdata.Order}</td>
                                    <td>{Orderdata.status}</td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>

                </Col>
            </Row>
        </div>
    )
}

export default BillerKitchen
