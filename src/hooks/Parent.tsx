import { useRef } from "react"
import CustomInput from "./CustomInput"

const Parent = () => {
  const inputRef  = useRef<HTMLInputElement|null>(null)

  return (
    <>
    <CustomInput ref={inputRef}/>
    
    <button onClick={()=>inputRef.current?.focusInput()}>Focus</button>
    <button onClick={()=>inputRef.current?.clearInput()}>Clear</button>
    </>
  )
}

export default Parent