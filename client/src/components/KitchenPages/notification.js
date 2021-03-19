import React from "react";
import { Carousel, Card, Button, Row, Col, Form } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import img from "./parcel.jpg";
import table from "./tablepic.jpg";
export default function Notification() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Row>
            {data.map((val) => (
              <Col>
                <Card>
                  {val.orderType.includes("Table") ? (
                    <Card.Img variant="top" src={table} />
                  ) : (
                    <Card.Img variant="top" src={img} />
                  )}
                  <Card.Body>
                    <Card.Title>{val.orderType}</Card.Title>
                    <Card.Text>Status:{val.orderId}</Card.Text>
                    <ul>
                      {val.orderDetails.map((no) => (
                        <li>{no.items + "  " + "=>" + "  " + no.quantity}</li>
                      ))}
                    </ul>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
