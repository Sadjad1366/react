export function Inputs() {
  return (
    <div className="w-full flex justify-between mt-20">
      {/* Inputs */}
      <div className="flex flex-col">
        <input
          className="border-b-4 py-5 mb-2 outline-none"
          type="text"
          placeholder="Your Company Name"
        />
        <input
          className="border-b-4 py-3 mb-2 outline-none"
          type="text"
          placeholder="Nature of bussiness"
        />
        <div className="flex px-2">
          <input
            className="border-b-4 py-5 mb-2 mr-8 outline-none"
            type="text"
            placeholder="Address"
          />
          <input
            className="border-b-4 py-5 mb-2 outline-none"
            type="text"
            placeholder="Postcode"
          />
        </div>
        <input
          className="border-b-4 py-5 mb-2 outline-none"
          type="text"
          placeholder="Contact Name"
        />
        <input
          className="border-b-4 py-5 mb-2 outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="border-b-4 py-5 mb-2 outline-none"
          type="text"
          placeholder="Linkdin"
        />
        <input
          className="border-b-4 py-5 mb-2 outline-none"
          type="text"
          placeholder="Let's talk about your idea"
        />
    <div>
      <label className="w-full bg-red-500">
        <input type="file" />
      </label>
    </div>

      </div>
      {/* Offices */}
      <div>
        <h3 className="font-semibold text-left">Offices</h3>
        <p className="text-left">United States</p>
        <p className="text-left">United Kingdom</p>
        <p className="text-left">High St, Bromley BR1 !DN</p>
        <p className="text-left">France</p>
        <p className="text-left">80 avenue des Terroris de Frnce,Paris</p>

        <div>
          <h3 className="font-semibold text-left">For Quick Inquiries</h3>
          <div className="flex">
            <img
              className="w-5"
              src="./assets/images/kingdom.png"
              alt="kingdom-flag"
            />
            <p>+44 77777777</p>
          </div>
          <div className="flex">
            <img
              className="w-5"
              src="./assets/images/usa.png"
              alt="kingdom-flag"
            />
            <p>+1 77777777</p>
          </div>
        </div>
        <h2 className="font-semibold">Would you like to join our newsitter</h2>
        <div className="flex">
          <input
            className="border-b-4 mb-2 outline-none"
            type="text"
            placeholder="Email"
          />
          <button className="bg-green-500 w-9 flex justify-center items-center mx-2">
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
    </div>
  );
}
