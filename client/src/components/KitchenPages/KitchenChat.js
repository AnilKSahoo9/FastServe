import React from "react";
import chatbg from "../../image/chatbg.png";
import { Col, Row } from "reactstrap";
import "../../css/KitchenStyle.css";
// import OrderData from "../../StaticData/BillerOrderData"
const KitchenChat = () => {
  var OrderData = [
    {
      Order: 1,
      status: "Item Making Process Completed",
    },
    {
      Order: 2,
      status: "Item Making Process In Progress",
    },
    {
      Order: 3,
      status: "Item Making Process Completed",
    },
  ];
  return (
    <div classname="inner-container">
      <Row className="chatbox-Design">
            <div className="chatStyle">
                <Col  className="chatcolumn">
                    <hr></hr>
                    <h2>Chat With Waiter</h2>
                    <hr></hr>
                    <Row className="Container" style={{ backgroundImage: `url(${chatbg})` }}>

                        <div className="message right">Kitchen:Hey Waiter, Receive that order</div>
                        <div className="message left">Waiter: Hey Chef, Make the order for the table? </div>
                    </Row>
                        <div className="send">
                            <form action="#" id="send-container">
                                <input type="text" name="msgimp" id="msgimp"></input>
                                <button type="submit" className="msgbtn">Send</button>
                            </form>
                        </div>
                </Col>
                </div>
                <div className="chatStyle">
                <Col  className="chatcolumn">
                <hr></hr>
                    <h2>Chat With Biller</h2>
                    <hr></hr>
                    <Row className="Container" style={{backgroundImage:`url(${chatbg})` }}>

                    <div className="message right">Kitchen: Hey Biller, This Parcel order was completed.</div>
                    <div className="message left">Biller:Hey Kitchen, make the parcel order </div>
                    </Row>
                    <div className="send">
                        <form action="#" id="send-container">
                            <input type="text" name="msgimp" id="msgimp"></input> 
                            <button type="submit" className="msgbtn">Send</button>
                        </form>
                        </div>
                </Col>
                </div>
            </Row>
    </div>
  );
};
export default KitchenChat;
