import React from "react";

export default function Saludar(props) {
  return (
    <>
      <button onClick={() => props.saludarFn(props.userInfo.name)}>
        Saludar
      </button>
    </>
  );
}
