import React from "react";
import { msgStyleSuccess, msgStyleError, fontLato } from "./StringsNStyles";

const Card2 = ({ intro, reply, source, msgStatus, img, caption }) => {
  let msgStyle;
  if (msgStatus === 0) msgStyle = msgStyleError;
  else msgStyle = msgStyleSuccess;

  function renderSource(source) {
    if (source !== "")
      return (
        <p>
          Fonte: <a href={source}>{source}</a>
        </p>
      );
    else return null;
  }

  return (
    <div style={msgStyle}>
      <figure>
        <img src={`./img/${img}`} alt="imagem do autor da sentença" />
        <figcaption>
          <em>{caption}</em>
        </figcaption>
      </figure>
      <p>{intro}</p>
      <br />
      <p style={fontLato}>{reply}</p>
      {renderSource(source)}
    </div>
  );
};

export default Card2;
