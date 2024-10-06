
export function AsideDiv() {
  return (
      <div className="w-full pt-20">
        <h3 className="font-semibold text-left mb-6">Offices</h3>
        <p className="text-gray-text text-left">United States</p>
        <p className="text-gray-text text-left mb-6">500 5th Avenue Suite 400, NY 10110</p>
        <p className="text-gray-text text-left">United Kingdom</p>
        <p className="text-gray-text text-left mb-6">High St, Bromley BR1 !DN</p>
        <p className="text-gray-text text-left">France</p>
        <p className="text-gray-text text-left mb-14">
          80 avenue des Terroris de Frnce,Paris
        </p>
        <div>
          <h3 className="font-semibold text-left mb-10">For Quick Inquiries</h3>
          <div className="flex mb-5">
            <img
              className="w-5"
              src="./assets/images/kingdom.png"
              alt="kingdom-flag"
            />
            <p className="text-gray-text">+44 77777777</p>
          </div>
          <div className="flex mb-5">
            <img
              className="w-5"
              src="./assets/images/usa.png"
              alt="kingdom-flag"
            />
            <p className="text-gray-text">+1 77777777</p>
          </div>
        </div>
        <h2 className="font-semibold text-left mt-20">Would you like to join our newsitter</h2>
        <div className="flex mt-8">
          <input
            className="border-b-4 mb-2 outline-none"
            type="email"
            placeholder="Email"
          />
          <button className="bg-green-app w-16 h-14 flex justify-center items-center mx-6 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>
        </div>
      </div>
  );
}
