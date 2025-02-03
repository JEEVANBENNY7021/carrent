import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  const [loading, ] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",
        paddingLeft:"90px",
        height: "80vh", // Full height of the viewport
      }}
    >
      <div className="sweet-loading text-center">
        <HashLoader color="#000" loading={loading} size={80} />
      </div>
    </div>
  );
}

export default Loader;
