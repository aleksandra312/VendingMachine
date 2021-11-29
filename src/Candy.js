import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Candy() {
  return (
    <div className="Candy">
      <Message>
        <h1>SO SWEET!</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      <img
        src="https://media4.giphy.com/media/fcFLXGFbsxj8I/giphy.gif?cid=ecf05e47fwm0kbwr1j8bhmiiq4gt407ot42yax9qzquuaov2&rid=giphy.gif&ct=g"
        alt="KitKat candy bar."
      />
    </div>
  );
}

export default Candy;
