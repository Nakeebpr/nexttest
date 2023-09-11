"use client"


import Button from "@/components/button/Button";
import React, { useState } from "react";
import About from "../about/page";


function Home() {
  const [data, setData] = useState([]);
  const handleChildData = async (newData) => {
    console.log(newData)
    setData(newData);
  };
  
  return (
    <div>
      Welcome to Home test
      <Button data="posts" sendDataToParent={handleChildData} />
      {data.length>0  &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.id}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
        <About/>
    </div>
  );
}

export default Home;
