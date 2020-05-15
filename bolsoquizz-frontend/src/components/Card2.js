import React from "react";
import { msgStyleSuccess, msgStyleError } from "./StringsNStyles";

const Card2 = ({ intro, reply, source, msgStatus, img, caption }) => {
  let msgStyle;
  if (msgStatus === 0) msgStyle = msgStyleError;
  else msgStyle = msgStyleSuccess;

  function renderSource(source) {
    if (source !== "") return <p>Fonte: {source}</p>;
    else return null;
  }

  if (reply === null || reply === "") return null;
  else
    return (
      <div style={msgStyle}>
        <figure>
          <img src={`./img/${img}`} alt="imagem do autor da sentença" />
          <figcaption>
            <em>{caption}</em>
          </figcaption>
        </figure>
        <p></p>
        <p>{intro}</p>
        <p>{reply}</p>
        {renderSource(source)}
      </div>
    );
};

export default Card2;
