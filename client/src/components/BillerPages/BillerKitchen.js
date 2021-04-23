import React from 'react'
import chatbg from "../../image/chatbg.png"
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
    ]
    return (
        <div classname="inner-container">

            <Row>
                <Col className="col" md={5} xs={12}>
                <hr></hr>
                    <h2>Chat With Kitchen</h2>
                    <hr></hr>
                    <Row>
                        <Card className="card" body outline color="info">
                            <h5>
                                <CardHeader className="cardheader1">
                                    <CardTitle>Status for Order</CardTitle>
                                </CardHeader>
                            </h5>
                            <CardBody >

                               
                                {OrderData.map((Orderdata) => (
                                    <>
                                    <CardText >{Orderdata.Order}</CardText>
                                    <CardText >{Orderdata.status}</CardText>
                                </>
                                ))}
                            </CardBody>
                        </Card> 
                    </Row>
                    <div className="send">
                        <form action="#" id="send-container">
                            <input type="text" name="msgimp" id="msgimp"></input> 
                            <button type="submit" className="btn">Send</button>
                        </form>
                        </div>
                </Col>
                <Col className="cols" md={5} xs={12} >
                <hr></hr>
                    <h2>Order Status From Kitchens</h2>
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
            {/* <Row>
                 <Col md={5} xs={12} style={{
                    backgroundImage: `linear-gradient(to right bottom,  #004170, #00b98a, #009b7d,#0070BB, #132257)`, color: "white", margin: '1rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '7px',
                    margin:"3rem"
                }}>
                <hr></hr>
                    <h2>Order Status From Kitchens</h2>
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
            </Row> */}
        </div>
    )
}

export default BillerKitchen
