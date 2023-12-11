import Image from 'next/image'

import Interface from "@/components/Interface";
import DropDown from "@/components/DropDown";
import {ProductsCatalog} from "@/constants";

export default function Home() {
  return (
    <header>
          <nav className="flex justify-between">
          <div>
          <Image
              src='/techarion_cover.png'
              width={200}
              height={5}
              className='ml-4'
              alt='car logo'
            />
          </div>
          <div className="flex flex-row">
          <DropDown SectionName = "SHOP"  />
          <DropDown SectionName = "ABOUT"  />
          <DropDown SectionName = "PRODUCTS" ProductsCatalog={ProductsCatalog} />
          <DropDown SectionName = "SERVICES"  />
          <DropDown SectionName = "CAREERS"  />
          <DropDown SectionName = "BLOGS"  />
          <DropDown SectionName = "CONTACT US"  />
          </div>
          </nav>
      <Interface />
    </header>
  );
}
