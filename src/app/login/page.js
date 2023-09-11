import Button from "@/components/button/Button";
import React from "react";

function Login() {
  console.log("process.env.TEST_CODE");
  console.log(process.env.TEST_CODE);
  return (
    <div>
      <Button data="hello new" />
      Welcome to login
    </div>
  );
}

export default Login;
