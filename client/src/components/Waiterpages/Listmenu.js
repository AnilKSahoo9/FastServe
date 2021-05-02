import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

const Listmenu = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry,Zero LIMIT Reached");
      setNum(0);
    }
  };

  const list = {
    breakfast: [
      { no: "1", name: "itli" },
      { no: "2", name: "Dosha" },
      { no: "3", name: "dahibara" },
      { no: "4", name: "samosha" },
      { no: "5", name: "chapati" },
      { no: "6", name: "upma" },
    ],
  };
  return (
    <Table striped bordered hover variant="dark" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan="3">Breakfast</th>
        </tr>
        <tr>
          <th>Sl.no</th>
          <th>item Name</th>
          <th>Price per plate</th>
          <th>Quantity</th>
        </tr>
      </thead>
      {list.breakfast.map((e, index) => (
        <tbody>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{e.name}</td>
            <td></td>
            <td>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button>{count}</button>
              <button onClick={() => setCount(count - 1)}>-</button>
            </td>
          </tr>
        </tbody>
      ))}
      <tr>
        <th colSpan="3">
          <button style={{ marginLeft: "800px", color: "blue" }}>
            Add more items
          </button>
        </th>
      </tr>
    </Table>
  );
};

export default Listmenu;
