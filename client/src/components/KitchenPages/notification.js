import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Card, Row, Col, Badge } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import img from "./parcel.jpg";
import table from "./tablepic.jpg";
import _ from "lodash";
import "../../css/KitchenStyle.css";

export default function Notification() {
  const [kitchenData, setKitchenData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/getkitchendata/`);
      setKitchenData(response.data);
      setLoading(false);
      // console.log(response.data);
    };
    fetchData();
  }, []);
  console.log(kitchenData);
  var arr = _.chunk(
    kitchenData.map((val) => val),
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
                {no.map((val) =>
                  val.orderStatus === "pending" ? (
                    <Col>
                      <Card className="notCard">
                        {val.tableNo ? (
                          <Card.Img
                            variant="top"
                            src={table}
                            className="tableImg"
                          />
                        ) : (
                          <Card.Img
                            variant="top"
                            src={img}
                            className="parcelImg"
                          />
                        )}
                        <Card.Body>
                          <Card.Title>
                            <Badge className="card_badge_style">
                              {val.orderType}
                            </Badge>{" "}
                          </Card.Title>
                          <Card.Text>
                            <h5>
                              Order Id: {val._id.slice(0, 8).toUpperCase()}
                            </h5>
                          </Card.Text>
                          <p className="notification_card_body">
                            Order Details
                          </p>
                          <ul>
                            {val.items.map((no, index = 1) => (
                              <li style={{ fontSize: "1.3em" }}>
                                {no.itemName + "  " + "=" + "  " + no.quantity}
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  ) : (
                    ""
                  )
                )}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
