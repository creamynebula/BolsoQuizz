import React from "react";
import { msgStyleSuccess, msgStyleError } from "./StringsNStyles";

const Card2 = ({ intro, message, msgStatus }) => {
  let msgStyle;
  if (msgStatus === 0) msgStyle = msgStyleError;
  else msgStyle = msgStyleSuccess;

  if (message === null || message === "") return null;
  else
    return (
      <div style={msgStyle}>
        <p>{intro}</p>
        <p>{message}</p>
      </div>
    );
};

export default Card2;
