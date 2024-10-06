import * as React from 'react'

interface IInputProps {
      type?: "text" | "email" | "phone";
      placeholder: string;
      className?:string;
      value: string;
      onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
      validator:(value:string)=>boolean;
      errorMsg:string;
      name:string;
}

export const Input:React.FC<IInputProps> = ({
      type,
      placeholder,
      value,
      onChange,
      validator,
      errorMsg,
      name
})=>{
      const[valid,setValid] = React.useState(true);
      const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
              const newVar = e.target.value;
              onChange(e);
              setValid(validator(newVar))
      }
return(
      <div className="mb-6">
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      name = {name}
      className={`w-full py-2 border-b-2 px-2 mb-12 outline-none ${
      valid ? 'border-gray-300' : 'border-red-500'
      }`}
      />
      {errorMsg && !valid && (
      <div className="text-red-500 text-sm">{errorMsg}</div>
      )}
      </div>
)
}
