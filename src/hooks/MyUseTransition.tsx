import { useState, useTransition } from "react"

const MyUseTransition = ({}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null)
  const[isPending,startTransition]=useTransition();

  const handleSubmit = ()=>{
    startTransition(async () => {
      const error = updateName(name);
      if (error) {
        setError(error)
        return ;
      }
      redirect("/path");

    })
  }

  return (
    <>
     <input type="text" />
     <button value={name} onClick={handleSubmit} disabled={isPending} onChange={(e)=>setName(e.target.value)}>update1</button>
    </>
  )
}

export default MyUseTransition