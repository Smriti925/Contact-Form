import React, { useState, useEffect } from "react";
import axios from "axios";

function SaveResponse() {
  const [apiCall, setApiCall] = useState("");

  useEffect(() => {
    axios.get("https://retoolapi.dev/ES2DTp/data").then((res) => {
      console.log(res.data);
      setApiCall(res.data);
    });
  }, []);

  return (
    <div>
      {apiCall &&
        apiCall.map((value, index) => {
          return (
            <div key={index}>
              <h1>Name: {value.FirstName}</h1>
              <h1>LastName: {value.LastName}</h1>
              <p>Message: {value.Message}</p>
              <h1>Name: {value.medium}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default SaveResponse;
