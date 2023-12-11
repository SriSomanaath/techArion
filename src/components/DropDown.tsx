"use client";

import { useState } from "react";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const DropDown = ({SectionName, ProductsCatalog}) => {

 const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex ">
    <button onClick={()=> setIsOpen((prev)=> !prev)} className="flex rounded-md p-2 m-2 items-center justify-between font-bold tracking-wide border-4 border-transparent active:border-white duration-300 active:text-white">
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
                    <div className="absolute flex-row top-20 flex flex-col items-start rounded-lg p-2 w-full">
                        {ProductsCatalog.map((item, i) => (
                            <div key={i} className="flex w-full justify-between hover:bg-blue-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                                <h3 className="font-bold p-4">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                )
        )}
    </div>
  )
}

export default DropDown