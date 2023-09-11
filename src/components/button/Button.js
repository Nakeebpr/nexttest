
"use client"

import { get } from "@/services/ApiService"


function Button({data,sendDataToParent}) {

  // const [childData, setChildData] = useState("");

  const task = async() => {
    try {
      const response = await get(data)
      // console.log(response)
      sendDataToParent(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={task}>Click me</button>
    </div>
  )
}

export default Button
