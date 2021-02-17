import React from "react";
import { Accordion, Card, Button, Header } from "react-bootstrap";
// function val() {
//   return {
//     va: {
//       t1: {
//         session1: [
//           {
//             items: "rice",
//             quantity: 2,
//             amount: 50,
//           },
//           {
//             items: "dal",
//             quantity: 1,
//             amount: 70,
//           },
//           {
//             items: "chilly chicken",
//             quantity: 1,
//             amount: 150,
//           },
//         ],
//         session2: [
//           {
//             items: "roti",
//             quantity: 5,
//             amount: 10,
//           },
//           {
//             items: "butter paneer",
//             quantity: 1,
//             amount: 140,
//           },
//           {
//             items: "chilly chicken",
//             quantity: 1,
//             amount: 150,
//           },
//         ],
//       },
//       t2: {
//         session1: [
//           {
//             items: "rice",
//             quantity: 1,
//             amount: 50,
//           },
//           {
//             items: "mix veg",
//             quantity: 1,
//             amount: 90,
//           },
//           {
//             items: "chicken",
//             quantity: 1,
//             amount: 130,
//           },
//         ],
//       },
//       t3: {
//         session1: [
//           {
//             items: "rice",
//             quantity: 1,
//             amount: 50,
//           },
//           {
//             items: "mix veg",
//             quantity: 1,
//             amount: 90,
//           },
//           {
//             items: "chicken",
//             quantity: 1,
//             amount: 130,
//           },
//         ],
//       },
//     },
//   };
// }
// const res = val();
// console.log(res);
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
    session1: [
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
    session1: [
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
{
  console.log(val.t1.session1);
}
{
  console.log(Object.keys(val));
}
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
      {Object.keys(val).map((key, index) => (
        <Accordion key={index}>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {key}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {Object.values(val).map((value, index) => (
                  <Accordion key={index}>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        {Object.keys(value)}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </div>
  );
}

export default AdminTotalOrder;
