"use client";

import { useState } from "react";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface DropDownProps {
  SectionName: string; // Assuming SectionName is a string, update the type accordingly
  ProductsCatalog?: any[]; // Assuming ProductsCatalog is an array, update the type accordingly
}

const DropDown: React.FC<DropDownProps> = ({ SectionName, ProductsCatalog }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex rounded-md p-2 m-2 items-center justify-between font-bold tracking-wide border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {SectionName}
        {ProductsCatalog && (
          <>
            {!isOpen ? (
              <AiOutlineCaretDown className="space-x-2"></AiOutlineCaretDown>
            ) : (
              <AiOutlineCaretUp></AiOutlineCaretUp>
            )}
          </>
        )}
      </button>
      {ProductsCatalog && (
        isOpen && (
          <div className="absolute flex-row lg:top-20 top-10 lg:right-2 right-32 flex flex-col items-center rounded-lg p-2 w-full">
            {ProductsCatalog.map((item, i) => (
              <div key={i} className="flex w-full justify-between bg-sky-500 cursor-pointer rounded-lg border-l-transparent hover:border-l-white border-l-4 m-1 hover:text-black">
                <h5 className="font-bold p-4 text-sm w-full">{item.title}</h5>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default DropDown;
