import React from "react";
import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import img from "./parcel.jpg";
import table from "./tablepic.jpg";
import _ from "lodash";
import "./notification.css";
export default function Notification() {
  var arr = _.chunk(
    data.map((val) => val),
    3
  );
  console.log(arr);

  return (
    <div className="container-fluid">
      <Carousel>
        {arr.map((no) => (
          <Carousel.Item interval={5000}>
            <Row>
              {no.map((val) => (
                <Col>
                  <Card className="notCard">
                    {val.orderType.includes("Table") ? (
                      <Card.Img
                        variant="top"
                        src={table}
                        className="tableImg"
                      />
                    ) : (
                      <Card.Img variant="top" src={img} className="parcelImg" />
                    )}
                    <Card.Body>
                      <Card.Title>{val.orderType}</Card.Title>
                      <Card.Text>
                        <p>Status:{val.orderId}</p>
                      </Card.Text>
                      <p>Order Details</p>
                      <ul>
                        {val.orderDetails.map((no, index = 1) => (
                          <li>{no.items + "  " + "=" + "  " + no.quantity}</li>
                        ))}
                      </ul>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
