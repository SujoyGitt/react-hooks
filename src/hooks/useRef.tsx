import { useState, useRef, useEffect, useContext } from 'react';
import Parent from './Parent';
import { useData } from '../context/UserContext';

const UseRef = () => {
  // const [name, setname] = useState<string |null>('');

  // const [count, setcount] = useState(0)
  const {name,setName}= useData()
  console.log(name)
  const count = useRef(0)
  useEffect(() => {
    count.current = count.current + 1;
  }, [name])

  return (
    <>
     <input type="text" onChange={(e)=>setName(e.target.value)}  />
      <h1>{name}</h1>
      <h2>count of type - {count.current}</h2>
     <Parent/>
    </>
  )
}

export default UseRef
