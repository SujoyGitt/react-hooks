import React, { useCallback, useMemo, useState, useTransition } from 'react'
import Table from './Table';

const expensiveFunc = (num)=>{
 console.log("Calculating....");
 for (let index = 0; index < 1000000000; index++) {};
 return num * 3
}

const MyUseMemo = () => {
  const [number, setNumber] = useState<number>(0);
  const [theme, setTheme] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();

  const styles = {
    backgroundColor: theme ? "black":"white",
    color:   theme ? "white" :"black"
  }
  const memoizeCalculatTable = useCallback(() => {
    console.log("calculating table... ")

      return [number*1,number*2,number*3,number*4,number*5]
    },
    [number],
  )
  
  // const calculateTable = ()=>{
  //   console.log("calculating table... ")
  //   return [number*1,number*2,number*3,number*4,number*5]
  // }

  const memoCalculation = useMemo(() => {return expensiveFunc(number)}, [number])
  // const calculation = expensiveFunc(number);

  return (
    <>
    <div style={styles}>

     <input type="number" value={number} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>startTransition(()=>setNumber(Number(e.target.value)))}/>

     {isPending && <p>calculating list...</p>}

     <h2> Calculation number is - {memoCalculation}</h2>

     <button onClick={()=>setTheme(!theme)}>Toggle</button>

     <Table calculateTable={memoizeCalculatTable} />

     

    </div>
    </>
  )
}

export default MyUseMemo