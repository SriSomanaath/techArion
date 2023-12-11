"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

import Interface from "@/components/Interface";
import DropDown from "@/components/DropDown";
import {ProductsCatalog} from "@/constants";

export default function Home() {

  const [click, setClick] = useState(false);

  const handleClick = () =>  setClick(!click)

  return (
    <>
    <header>
      <nav className="bg-slate-900">
        <div className="flex justify-between z-50 text-white px-6 lg:px-20">
          <div className="flex items-center flex-1 mb-4">
            <span className="text-xl font-bold">
            <Image
              src='/techarion_cover.png'
              width={200}
              height={5}
              className='ml-4'
              alt='car logo'
            />
            </span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
          <button onClick={handleClick} className="lg:hidden absolute right-4 top-2 mt-2">
                {click ? 
                  <Image
                  src='/close.png'
                  width={40}
                  height={2}
                  className='ml-2 cursor-pointer'
                  alt='close menu'
                />
                :
                <Image
                src='/menu.png'
                width={40}
                height={2}
                className='ml-2 cursor-pointer'
                alt='open menu'
              />
                }
              </button>
              <div className="flex-10">
                <ul className={`lg:flex text-center lg:flex-row ${click ? '' : 'max-sm:hidden sm:hidden md:hidden'} relative right-4`}>
                  <Link spy={true} smooth={true} to="SHOP"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="SHOP" /></li></Link>
                  <Link spy={true} smooth={true} to="ABOUT"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="ABOUT" /></li></Link>
                  <Link spy={true} smooth={true} to="PRODUCTS"><li className="hover:text-whit transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="PRODUCTS" ProductsCatalog={ProductsCatalog} /></li></Link>
                  <Link spy={true} smooth={true} to="SERVICES"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="SERVICES" /></li></Link>
                  <Link spy={true} smooth={true} to="CAREERS"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="CAREERS" /></li></Link>
                  <Link spy={true} smooth={true} to="BLOGS"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="BLOGS" /></li></Link>
                  <Link spy={true} smooth={true} to="CONTACT US"><li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"><DropDown SectionName="CONTACT US" /></li></Link>
                </ul>
              </div>
          </div>
        </div>
      </nav>
      <Interface />
    </header>
    </>
  );
}
