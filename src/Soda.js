import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Soda() {
  return (
    <div className="Soda">
      <Message>
        <h1>PICK ME!</h1>
        <h1>
          <Link to="/">GO BACK</Link>
        </h1>
      </Message>
      <img
        src="https://media3.giphy.com/media/acJgACIGXAhLa/giphy.gif?cid=ecf05e47a2ilb74fwu4ojyfanvsgvjgs4ngjzifbz6yjlxxg&rid=giphy.gif&ct=g"
        alt="Soda."
      />
    </div>
  );
}

export default Soda;
