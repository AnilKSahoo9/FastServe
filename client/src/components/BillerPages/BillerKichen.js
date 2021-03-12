import React from 'react'
import { Col, Row, Table, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
// import OrderData from "../../StaticData/BillerOrderData"
const BillerKichen = () => {
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
                <Col md={5} xs={12} style={{
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`, color: "white", margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px', height: "100%"
                }}>
                <hr></hr>
                    <h2>Message From Kichens</h2>
                    <hr></hr>
                    <Row>
                        <Card body outline color="info"
                            style={{
                                width: '100%',
                                maxHeight: "100rem",
                                color: 'White',
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
                                    backgroundColor: "rgb(128,128,128)", borderStyle: 'groove',
                                    borderWidth: '3px',
                                    borderRadius: '7px', padding: "3px", margin: "0px"
                                }}>
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
                <Col md={5} xs={12} style={{
                    backgroundImage: `linear-gradient(to right bottom, #051437, #004782, #0081a7, #00b98a, #12eb25)`, color: "white", margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    marginRight:"0px"
                }}>
                <hr></hr>
                    <h2>Order Status From Kichens</h2>
                    <hr></hr>
                    <Table striped bordered hover style={{ color: "white",
                                width: '100%',
                                maxHeight: "100rem",
                                fontFamily: "Times New Roman, Times, serif",
                                marginTop:"4rem",
                                borderStyle: 'groove',
                                borderWidth: '3px',
                                borderRadius: '7px' }}>
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

export default BillerKichen
