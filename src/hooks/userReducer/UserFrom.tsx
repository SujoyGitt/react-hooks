import { useReducer } from "react";
  
  type State ={
    name:string,
    email:string,
    phone: string|number
  }
 type Action = | 
    {
      type: "FILLEDVALUE";
      field: string;
      value: string;
    }
    | { type: "RESET" }
    | {type:"SUBMIT"};

  const initialState:State={
    name:'',
    email:'',
    phone: ''
  }

  const reducer = (state:State,action:Action)=>{
   switch (action.type) {
    case "FILLEDVALUE":
        return {...state,[action.field]:action.value}

    case "RESET":
        return initialState
   
    default: return state
   }
  }
const UserFrom = () => {

  const [state, dispatch] = useReducer(reducer, initialState)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
        type: "FILLEDVALUE",
        field: e.target.name,
        value: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data",state)
  }
   
  console.log(initialState)

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
     <input onChange={(e)=>handleChange(e)} name="name" value={state.name} type="text" /> <br />
     <input onChange={(e)=>handleChange(e)} name="email" value={state.email} type="email" /> <br />
     <input onChange={(e)=>handleChange(e)} name="phone" value={state.phone} type="tel"  id="" /> <br />
     <button >Submit</button> <br />
     <button type="reset" onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </form>
    </>
  )
}

export default UserFrom