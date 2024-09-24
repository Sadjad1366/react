import { Input } from "../utilities/input";

export function InputsDiv() {
  return (
    <div className="w-full flex justify-between mt-20">
      {/* Inputs */}
      <div className="flex flex-col">
          <Input placeholder="Company Name"/>
          <Input placeholder="Nature of bussiness"/>

        <div className="flex px-2 justify-between gap-x-2">
          <Input placeholder="Address"/>
          <Input placeholder="Postcode"/>
        </div>
        <Input placeholder="Contact name"/>
        <Input placeholder="Email"/>
        <Input placeholder="Linkdin"/>
        <Input placeholder="Let's talk about your idea"/>

        <div className="flex w-full mt-14">
          <label className="flex justify-center w-full border-[3px] border-gray-300 border-dashed cursor-pointer bg-gray-50 ">
            <div className="flex items-center justify-between px-2 py-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-gray-text mb-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>

              <p className="mb-2 text-sm text-gray-text dark:text-gray-400 px-3">
                Upload Additional File
              </p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
        <p className="text-gray-text text-left text-[10px] pt-3">
          Attach file.File size of your documents should not exceed 10MB
        </p>
        {/* Submit button & checkBox */}
        <button className="bg-green-app mt-11 py-4 text-white">SUBMIT</button>
        <div className="flex text-left mt-6">
        <input type="checkbox"/><p className="px-2 text-gray-text">I want to protect my data by signing an NDA</p>
        </div>
      </div>
      {/* Offices */}
    </div>
  );
}
