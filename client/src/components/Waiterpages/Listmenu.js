import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

const Listmenu = () => {
  const [count, setCount] = useState(0);

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
          <th></th>
        </tr>
      </thead>
      {list.breakfast.map((e, index) => (
        <tbody>
          <tr key={index}>
            <td>{e.no}</td>
            <td>{e.name}</td>
            <td>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button>{count}</button>
              <button onClick={() => setCount(count - 1)}>-</button>
            </td>
          </tr>
        </tbody>
      ))}
      <tr>
        <button></button>
      </tr>
    </Table>
  );
};

export default Listmenu;
