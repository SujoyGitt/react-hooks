import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

const UserContext = createContext(null);

type UserDetails = {
  name: string,
  setName:Dispatch<SetStateAction<string>>;
};

type ContextWrapperProps = {
  children: ReactNode;
  userDetails: UserDetails;
};
const ContextWrapper = ({children,userDetails}: ContextWrapperProps)=>{
    return <UserContext.Provider value={userDetails}>
        {children}
    </UserContext.Provider>
}

export default ContextWrapper;

export const useData = ()=>{
   const context = useContext(UserContext);
   if (!context) {
        throw new Error("useData must be used inside ContextWrapper");
   }
   return context;
}