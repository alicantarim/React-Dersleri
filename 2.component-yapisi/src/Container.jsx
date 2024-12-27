import React from "react";

function Container({ children }) {
  return (
    <div>
      <div
        style={{
          color: "white",
          backgroundColor: "red",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        CONTAINER COMPONENTİ ÇALIŞTI.
      </div>
      {children}
    </div>
  );
}

export default Container;
