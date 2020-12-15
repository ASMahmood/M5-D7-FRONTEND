import React from "react";
import { Alert } from "react-bootstrap";
import MyBadge from "./MyBadge";

const WarningSign = (props) => {
  return (
    <Alert className={props.className}>
      <h1>
        {" "}
        <MyBadge color="success" text="wow!" />
        {props.warningText}
        <MyBadge color="success" text="so cool!" />
      </h1>
    </Alert>
  );
};

export default WarningSign;
