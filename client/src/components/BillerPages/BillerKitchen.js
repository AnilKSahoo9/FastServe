import React from "react";
import chatbg from "../../image/chatbg.png";
import { Col, Row } from "reactstrap";
// import OrderData from "../../StaticData/BillerOrderData"
const BillerChat = () => {
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
                <Col  className="chatcolumn" 
                // style={{backgroundImage: `linear-gradient(to right bottom, #4444FF,#000080,#0F52BA)`, margin: "1rem",
                // marginLeft: "3px"}}
                    >
                    <hr></hr>
                    <h2>Chat With Kitchen</h2>
                    <hr></hr>
                    <Row className="Container" style={{ backgroundImage: `url(${chatbg})` }}>

                        <div className="message right">Biller: Hey Kitchen, What is the Problem?</div>
                        <div className="message left">Kitchen:Hey Biller,Please Help Me Out!!! </div>
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
                <Col  className="chatcolumn" 
                // style={{backgroundImage: `linear-gradient(to right bottom, #4444FF,#000080,#0F52BA)`,margin: "1rem",
                //     marginLeft: "3px"}}
                >
                <hr></hr>
                    <h2>Chat With Waiter</h2>
                    <hr></hr>
                    <Row className="Container" style={{backgroundImage:`url(${chatbg})` }}>

                    <div className="message right">Biller: Hey Waiter, What is the Problem?</div>
                    <div className="message left">Waiter:Hey Biller,Please Help Me Out!!! </div>
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
export default BillerChat;
