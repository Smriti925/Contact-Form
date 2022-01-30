import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";

function FormTwo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [msg, setMsg] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [statusCode, setStatusCode]=useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log("submitted");

    axios
      .post("https://retoolapi.dev/ES2DTp/data", tempObj)
      .then((response) => {if(response.status === 201)
      {
        setFirstName('');
        setLastName('');
        setMsg('');
        setOptionValue('');
      }});
      // const tempresponse=response;
      // setStatusCode(tempresponse.status);
      // if (statusCode === 201)
      // {
      //   console.log('status true');
      // }
      
  }

  const tempObj = {
    FirstName: firstName,
    LastName: lastName,
    Message: msg,
    medium: optionValue,
  };
  console.log(tempObj);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 rounded-lg text-white w-80 md:w-96">
        <div className="p-2 bg-gray-800 rounded-md flex justify-between">
          <label className="">FirstName </label>
          <input
            type="text"
            value={firstName}
            className=" rounded-md p-1 w-48 md:w-60 text-black"
           
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
        </div>
        <div className="p-2 bg-gray-800 rounded-md flex justify-between">
          <label className="">LastName</label>
          <input
            type="text"
            value={lastName}
            className=" rounded-md p-1 w-48 md:w-60 text-black"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
        </div>
        <div className="p-2 bg-gray-800 rounded-md flex justify-between">
          <label className="">Message</label>
          <textarea
            className=" h-28 rounded-md p-1 w-48 md:w-60 text-black"
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="p-2">
          <span className="">Connect with -</span>
          <div>
            <input
              type="radio"
              name="medium"
              value={optionValue}
              className=""
              onClick={(e) => setOptionValue(e.target.value)}
            ></input>
            <span className="mr-3">Instagram</span>
            <input
              type="radio"
              name="medium"
              value={optionValue}
              onClick={(e) => setOptionValue(e.target.value)}
            ></input>
            <span className="mr-3">Facebook</span>
            <input
              type="radio"
              name="medium"
              value={optionValue}
              onClick={(e) => setOptionValue(e.target.value)}
            ></input>
            <span className="mr-3">LinkedIn</span>
          </div>
        </div>
        <div className="grid justify-center">
          <button className="my-4" onClick={submitHandler}>
            <span className=" px-4 py-1 bg-gray-600 hover:bg-gray-400 rounded-md">
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormTwo;
