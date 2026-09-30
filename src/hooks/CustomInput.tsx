import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const CustomInput = forwardRef<HTMLInputElement,{}>((props, ref)=> {
  const inputRef  = useRef<HTMLInputElement|null>(null)

   useImperativeHandle(ref, () => {
    return {
      focusInput() {
       if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.style.outline = "box-shadow(0 5px 5px red)";
       }
      },
      clearInput() {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      }
    };
  }, []);
  return (
    <input type="text" ref={inputRef} />
  )
})

export default CustomInput