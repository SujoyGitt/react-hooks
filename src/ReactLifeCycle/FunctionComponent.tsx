import { useEffect, useState } from "react"

const FunctionComponent = () => {
  const [count, setcount] = useState<number >(0);

  useEffect(() => {
   console.log('component mouting')
  }, [])
  
  useEffect(() => {
    console.log('component re render');

    return console.log("Fun component will unmount")
  }, [count])
  
  return (
    <>
     <h1>count - {count}</h1>
     <button onClick={()=>setcount(count+1)}>Increase</button>
    </>
  )
}

export default FunctionComponent