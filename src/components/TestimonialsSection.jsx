import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Dignisys Limited, a newly startup providing cost-effective timely services 
        to different industries, enabling them to enhance their business and 
        maximize their efficiencies to achieve their organizational mission & goals.
      </p>

      <div className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <FaQuoteLeft className="absolute left-6 top-6 text-yellow-400 text-2xl" />
        <FaQuoteRight className="absolute right-6 bottom-6 text-yellow-400 text-2xl" />
        <p className="text-gray-700 mb-6">
          “Working with Dignisys has been a game-changer for our business. 
          Their team not only provided cost-effective solutions but also guided us 
          through every step with professionalism and transparency. 
          We've noticed a significant improvement in efficiency and customer 
          satisfaction since partnering with them.”
        </p>
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Johanna Kuphal"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h4 className="font-semibold">Johanna Kuphal</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

