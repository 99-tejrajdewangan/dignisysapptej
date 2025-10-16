import React from "react";

const ContactUs = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">
            Optimize your IT infrastructure - Get a free consultation today!
          </h2>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 bg-white text-gray-800 rounded-2xl shadow-lg p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email ID</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mobile No.</label>
              <input
                type="tel"
                placeholder="+91 96595 25487"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                placeholder="India"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold rounded-lg px-6 py-2 hover:bg-yellow-500 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
