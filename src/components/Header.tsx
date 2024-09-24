import { useState } from 'react';

function Header() {

      const[menu, setMenu] = useState(false)

      const openMenu = () =>{
            setMenu(!menu)
      }

  return (
<div className="w-full bg-gray-base flex justify-between items-center px-3 py-4">
      <p className="text-gray-text text-2xl px-10">Logo</p>
      <div className={`w-full mx-5 ${menu ? 'block' : 'hidden'}`}>
            <a className="mx-3 text-gray-text" href="#">Company</a>
            <a className="mx-3 text-gray-text" href="#">Services</a>
            <a className="mx-3 text-gray-text" href="#">FinTech Solution</a>
            <a className="mx-3 text-gray-text" href="#">Protects</a>
            <a className="mx-3 text-gray-text" href="#">Portfolio</a>
            <a className="mx-3 text-gray-text" href="#">Contact us</a>
      </div>
<button onClick={openMenu}><svg  className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg></button>
</div>
  )
}
export default Header
