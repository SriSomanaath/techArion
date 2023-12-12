import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import ServicesList from "@/sections/ServicesList";
import ContactUs from "@/sections/ContactUs";

const Interface = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b w-full'>
        <Hero />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className='padding-x py-10'>
        <ServicesList />
      </section>
      <section className=' padding-x py-10'>
        <ContactUs />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default Interface;