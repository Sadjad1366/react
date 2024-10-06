import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full bg-gray-base flex gap-x-52 items-center px-3 py-4">
      <p className="text-gray-text text-2xl px-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </p>
      <div className="hidden md:flex">
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          Company
        </a>
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          Services
        </a>
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          FinTech Solution
        </a>
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          Protects
        </a>
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          Portfolio
        </a>
        <a className="mx-3 text-gray-text hover:underline decoration-green-500" href="#">
          Contact us
        </a>
      </div>
      <button className="md:hidden" onClick={openMenu}>
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      {menu && (
        <div className="md:hidden absolute top-16 left-0 w-full h-full bg-gray-base p-4">
          <a className="block my-2 text-gray-text" href="#">
            Company
          </a>
          <a className="block my-2 text-gray-text" href="#">
            Services
          </a>
          <a className="block my-2 text-gray-text" href="#">
            FinTech Solution
          </a>
          <a className="block my-2 text-gray-text" href="#">
            Protects
          </a>
          <a className="block my-2 text-gray-text" href="#">
            Portfolio
          </a>
          <a className="block my-2 text-gray-text" href="#">
            Contact us
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
