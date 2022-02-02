import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiData() {
  const PrettyPrintJson = ({ data }) => (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
  const example = [
    {
      title: "JAVASCRIPT",
      logosrc: "https://img.icons8.com/color/96/000000/javascript--v2.png",
    },
    {
      title: "REACT",
      logosrc:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      title: "REDUX",
      logosrc: "https://img.icons8.com/color/96/000000/redux.png",
    },
    {
      title: "NEXTJS",
      logosrc: "/nextjs-removebg-preview.png",
    },
    {
      title: "C++",
      logosrc: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
    },
    {
      title: "C",
      logosrc: "https://img.icons8.com/color/96/000000/c-programming.png",
    },
    {
      title: "GIT",
      logosrc: "https://img.icons8.com/color/96/000000/git.png",
    },
    {
      title: "GITHUB",
      logosrc: "https://img.icons8.com/ios-filled/96/000000/github.png",
    },
    {
      title: "DSA",
      logosrc:
        "https://img.icons8.com/external-itim2101-flat-itim2101/96/000000/external-algorithm-smartphone-technology-itim2101-flat-itim2101.png",
    },
  ];

  return (
    <div>
      <PrettyPrintJson data={example} />
    </div>
  );
}

export default ApiData;
