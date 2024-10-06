import { Input } from "../utilities/input";
import React, { useState } from "react";
import Btn from "./Btn";

export function InputsDiv() {
  interface IFormData {
    Company: string;
    Nature: string;
    Address: string;
    Postcode: string;
    Contact: string;
    ContactPhone: string;
    Email: string;
    Linkdin: string;
    Talk: string;
  }
  const [formData, setFormData] = useState<IFormData>({
    Company: "",
    Nature: "",
    Address: "",
    Postcode: "",
    Contact: "",
    ContactPhone: "",
    Email: "",
    Linkdin: "",
    Talk: "",
  });

  const [isValid, setIsValid] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const validForm = Object.values({ ...formData, [name]: value }).every(
      (value) => value !== ""
    );
    setIsValid(validForm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subData = {
      Company: formData.Company,
      Nature: formData.Nature,
      Address: formData.Address,
      Postcode: formData.Postcode,
      Contact: formData.Contact,
      ContactPhone: formData.ContactPhone,
      Email: formData.Email,
      Linkdin: formData.Linkdin,
      Talk: formData.Talk,
    };
    console.log(subData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full flex justify-between mt-20">
        {/* Inputs */}
        <div className="flex flex-col">
          <Input
            value={formData.Company}
            name="Company"
            placeholder="Company Name"
            type="text"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter a company name"
          />
          <Input
            value={formData.Nature}
            name="Nature"
            placeholder="Nature of bussiness"
            type="text"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter nature"
          />

          <div className="w-full flex px-2 justify-between gap-x-2">
            <Input
              value={formData.Address}
              name="Address"
              placeholder="Address"
              validator={(value) => value.length > 0}
              onChange={changeHandler}
              errorMsg="Please enter address"
            />
            <Input
              value={formData.Postcode}
              name="Postcode"
              placeholder="Postcode"
              validator={(value) => value.length > 0}
              onChange={changeHandler}
              errorMsg="Please enter postcode"
            />
          </div>
          <Input
            value={formData.Contact}
            name="Contact"
            placeholder="Contact name"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter contacts"
          />
          <Input
            value={formData.ContactPhone}
            name="ContactPhone"
            placeholder="Contact phone"
            type="phone"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter phones"
          />
          <Input
            value={formData.Email}
            name="Email"
            placeholder="Email"
            type="email"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter email"
          />
          <Input
            value={formData.Linkdin}
            name="Linkdin"
            placeholder="Linkdin"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter linkdin"
          />
          <Input
            value={formData.Talk}
            name="Talk"
            placeholder="Let's talk about your idea"
            validator={(value) => value.length > 0}
            onChange={changeHandler}
            errorMsg="Please enter talk"
          />

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
       <Btn disabled={!isValid}>Submit</Btn>
          <div className="flex text-left mt-6">
            <input type="checkbox" />
            <p className="px-2 text-gray-text">
              I want to protect my data by signing an NDA
            </p>
          </div>
        </div>
        {/* Offices */}
      </div>
    </form>
  );
}
