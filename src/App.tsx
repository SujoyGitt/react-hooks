import { useEffect, useState } from 'react'

import './App.css'

import UseRef from './hooks/useRef';
import ContextWrapper from './context/UserContext';
import Counter from './hooks/userReducer/Counter';
import UserFrom from './hooks/userReducer/UserFrom';
import MyUseMemo from './hooks/MyUseMemo';
import MyUseTransition from './hooks/MyUseTransition';

function App() {
const [show, setShow] = useState<boolean>(true);
const [name, setName] = useState("Sujoy") ;

 
  return (
    <>
    <ContextWrapper userDetails={{name,setName}}>
      {/* <UseRef/>
      <hr />
      <Counter/>
      <hr />
      <UserFrom/>
      <hr />
      <MyUseMemo/>
      <hr /> */}
      <MyUseTransition/>
    </ContextWrapper>
    </>
  )
}


export default App
