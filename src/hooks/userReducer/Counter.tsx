import { useReducer } from "react"
  
 type State = {
    count: number;
 };
 type Action = | { type: "INCREMENT" } | { type: "DECREMENT" };

  const initialState:State = {
    count:0
  }
  
  const reducer = (state:State,action:Action)=>{
    switch (action.type) {
        case "INCREMENT":
          return {count:state.count + 1};
    
        case "DECREMENT":
          return {count:state.count - 1};

        default: return state
           
    }
  }
  
  const Counter = () => {

  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>Increase</button>
     <span>{state.count}</span>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>decrease</button>
    </>
  )
}

export default Counter