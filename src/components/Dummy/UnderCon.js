import React from "react";
import "./UnderCon.css";
import { Link } from "react-router-dom";
function UnderCon() {
  return (
    <div classname="b">
      <div class="gif">
        <img
        alt ="dummy"
          classname="image-work"
          src="https://freepngimg.com/thumb/money/35986-1-work.png"
        />
        
      </div>
      <h6 className="con-h6">
        Sorry, this page is currently under construction.
      </h6>
      <Link to="/">
      <div className="back-home">
        <h7>Back to Home:</h7>
        
          <img
          alt ="dummy"
            className="logo-rockets"
            src="https://img.icons8.com/fluent/240/000000/rocket.png"
          ></img>
        
      </div>
      </Link>
    </div>
  );
}

export default UnderCon;
