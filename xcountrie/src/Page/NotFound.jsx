import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={require("../assets/NotFound.png")}
        style={{ width: "100%", objectFit: "cover" }}
      />

      <Link to="/">
        <button className="button">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
