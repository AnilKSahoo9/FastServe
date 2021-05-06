import React from "react";
import { Carousel, Card, Row, Col, Badge } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import img from "./parcel.jpg";
import table from "./tablepic.jpg";
import _ from "lodash";
import "../../css/KitchenStyle.css"
export default function Notification() {
  var arr = _.chunk(
    data.map((val) => val),
    3
  );
  console.log(arr);

  return (
    <div className="inner-container">
    <div className="kitchen_notification">
      <Carousel>
        {arr.map((no) => (
          <Carousel.Item interval={2000}>
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
                      <Card.Title>
                        <Badge
                        className="card_badge_style"
                        >{val.orderType}</Badge>{" "}
                      </Card.Title>
                      <Card.Text>
                        <h5>Order Id: {val.orderId}</h5>
                      </Card.Text>
                      <p className="notification_card_body">
                        Order Details
                      </p>
                      <ul>
                        {val.orderDetails.map((no, index = 1) => (
                          <li style={{ fontSize: "1.3em" }}>
                            {no.items + "  " + "=" + "  " + no.quantity}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
  );
}
