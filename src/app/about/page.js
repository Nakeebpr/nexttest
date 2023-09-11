


import Button from "@/components/button/Button";
import { get } from "@/services/ApiService";
import React from "react";

const getData = async() => {

    console.log("data from server")
    const response = await get(`posts`)
    return response?.data
}


async function About() {

  const data = await getData();

  
  // const handleChildData = async (newData) => {
  //   "use server"
  //   console.log(newData)
  //   return newData;
  // };

  // let data = await handleChildData()
  // console.log(data)
  
  return (
    <div>
      Welcome to About test
      {/* <Button data="posts" sendDataToParent={handleChildData}/> */}
      <Button data="posts" />
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.id}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
}

export default About;
