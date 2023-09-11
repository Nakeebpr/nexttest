"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Routing() {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/login')}>Click to route</button>
    </div>
  );
}

export default Routing;


