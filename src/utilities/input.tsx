import * as React from 'react'

interface IInputProps {
      type?: string;
      placeholder?: string;
      className?:string
}

export const Input:React.FC<IInputProps> = ({
      type = "text",
      placeholder,
})=>{
return(
      <input
      className="border-b-4 py-5 mb-2 outline-none"
      type={type}
      placeholder={placeholder}
    />
)
}
