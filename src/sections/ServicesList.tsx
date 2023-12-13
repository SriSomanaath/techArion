import {services} from "@/constants";

const ServicesList = () => {

  return (
    <div className="flex min-h-screen items-center justify-center bg-black flex-wrap">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
        {services.map((service, index) => (
          <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-2xl">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={service.image}
                alt={service.title}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">{service.title}</h1>
              <p className="mb-3 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{service.description}</p>
              <button className="rounded-full bg-[#00df9a] py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
