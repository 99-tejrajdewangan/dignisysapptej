import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 pt-24 bg-gray-50">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Accelerating Your Business with <br />
          Integrated Tech, BPM & Logistics <br />
          Solutions.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Dignisys bridges software development, process optimization, travel,
          logistics, BPO/KPO, and healthcare services—empowering organizations
          to operate smarter, scale faster, and embrace an AI-ready future.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition">
          Get In Touch →
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=900&q=80"
          alt="Business Professional"
          className="rounded-lg shadow-md w-[90%] md:w-[80%]"
        />
      </div>
    </section>
  );
};

export default Hero;
