import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(/AboutWallpaper.jpg)]">
      <div className="bg-white m-2 p-8 rounded-lg shadow-md lg:w-1/2 sm:w-full bg-slate-200">
        <h2 className="text-5xl font-bold mb-6 text-center text-gray-800">
          Now that you know who we are, tell us -
        </h2>
        <div className="mb-4 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-gray-600 font-semibold mb-2">Who Are You?</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block text-gray-600 font-semibold mb-2">What do we call you?</label>
            <input
              type="text"
              placeholder="Your Number"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">What number do we call you on?</label>
          <input
            type="tel"
            placeholder="Your E-Mail"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Where did you find us?</label>
          <input
            type="text"
            placeholder="???"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">What can we do for you?</label>
          <textarea
            placeholder="Write your message here..."
            rows={4}
            className="w-full border rounded-md p-2 resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">How much are you willing to spend?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
            <button className="bg-zinc-400 hover:bg-zinc-500 text-black font-bold py-2 px-4 rounded">10-15L</button>
            <button className="bg-zinc-400 hover:bg-zinc-500 text-black font-bold py-2 px-4 rounded">20-25L</button>
            <button className="bg-zinc-400 hover:bg-zinc-500 text-black font-bold py-2 px-4 rounded">25L+</button>
            <button className="bg-zinc-400 hover:bg-zinc-500 text-black font-bold py-2 px-4 rounded">1-5L</button>
          </div>
        </div>
        <div className="mb-4">
          <button className="block text-gray-600 font-semibold mb-2">INR/USD</button>
        </div>
        <button className="bg-[#00df9a] text-black font-bold px-6 py-3 rounded-md hover:bg-emerald-500 w-full focus:outline-none">
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
