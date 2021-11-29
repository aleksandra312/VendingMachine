import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <Message>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
      </Message>
      <Message>
        {" "}
        <h1>
          <Link to="/soda">SODA</Link>
        </h1>
        <h1>
          <Link to="/chips">CHIPS</Link>
        </h1>
        <h1>
          <Link to="/candy">CANDY</Link>
        </h1>
      </Message>
    </div>
  );
}

export default VendingMachine;
