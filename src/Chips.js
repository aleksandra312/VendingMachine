import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function Chips() {
  return (
    <div className="Chips">
      <Message>
        <h1>CRUNCHY! YUM</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      <img
        src="https://media0.giphy.com/media/6IaZ59jH1OEqmZzREZ/giphy.gif?cid=ecf05e47q1kl6wg34t8yywnsnanixpfjg0tnza2w4qtu49y6&rid=giphy.gif&ct=g"
        alt="Chips."
      />
    </div>
  );
}

export default Chips;
