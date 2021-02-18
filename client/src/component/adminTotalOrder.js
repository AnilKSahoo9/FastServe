import React from "react";
import { Accordion, Card, Button, Header } from "react-bootstrap";

var val = {
  t1: {
    session1: [
      {
        items: "rice",
        quantity: 2,
        amount: 50,
      },
      {
        items: "dal",
        quantity: 1,
        amount: 70,
      },
      {
        items: "chilly chicken",
        quantity: 1,
        amount: 150,
      },
    ],
    
    session2: [
      {
        items: "roti",
        quantity: 5,
        amount: 10,
      },
      {
        items: "butter paneer",
        quantity: 1,
        amount: 140,
      },
      {
        items: "chilly chicken",
        quantity: 1,
        amount: 150,
      },
    ],
  },
  t2: {
    session4: [
      {
        items: "rice",
        quantity: 1,
        amount: 50,
      },
      {
        items: "mix veg",
        quantity: 1,
        amount: 90,
      },
      {
        items: "chicken",
        quantity: 1,
        amount: 130,
      },
    ],
  },
  t3: {
    session6: [
      {
        items: "rice",
        quantity: 1,
        amount: 50,
      },
      {
        items: "mix veg",
        quantity: 1,
        amount: 90,
      },
      {
        items: "chicken",
        quantity: 1,
        amount: 130,
      },
    ],
  },
};

function AdminTotalOrder() {
  return (
    <div
      classname="main"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `linear-gradient(90deg,#ffdead 50%,#faf0e6 50%)`,
      }}
    >
      
      {Object.keys(val).map((item, index) => (

        <Accordion key={index}>
          <Card>
            
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {item}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {(item === "t1") ? 
              //   Object.values(val).map((value, index) => (
              //     <Accordion key={index}>
              //       <Card>
              //         <Accordion.Toggle as={Card.Header} eventKey="0">
              //           {Object.keys(val.t1)}
              //         </Accordion.Toggle>
              //         <Accordion.Collapse eventKey="0">
              //           <Card.Body>Hello! I'm the body</Card.Body>
              //         </Accordion.Collapse>

              //       </Card>
              //     </Accordion>
              // ))
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">{Object.keys(val.t1)}</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0"><Card.Body>hi</Card.Body></Accordion.Collapse>
                </Card>
              </Accordion>
              : console.log("failed")}

              {(item === "t2") ? 
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">{Object.keys(val.t2)}</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0"><Card.Body>hello</Card.Body></Accordion.Collapse>
                  </Card>
                  </Accordion> 
                  : console.log("2nd")}

            {(item === "t3") ? 
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">{Object.keys(val.t3)}</Accordion.Toggle>
                  <Accordion.Collapse eventKey="0"><Card.Body>sweta</Card.Body></Accordion.Collapse>
                  </Card>
                  </Accordion> 
                  : console.log("3rd")}

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      
    </div>
  );
}

export default AdminTotalOrder;
