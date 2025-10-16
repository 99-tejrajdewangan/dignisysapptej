import React from "react";
import { Truck, Plane, Headphones, Briefcase, HeartPulse, Code } from "lucide-react";

const services = [
  {
    icon: <Truck size={32} className="text-yellow-500" />,
    title: "Logistics",
    desc: "Dignisys Limited provides cutting technology offerings apart from providing a great and unique customer service and time savings products.",
  },
  {
    icon: <Plane size={32} className="text-yellow-500" />,
    title: "Travels",
    desc: "Dignisys Limited is providing excellent Domestic and International Holidays travel based on your requirement on planning a honeymoon, solo trip.",
  },
  {
    icon: <Headphones size={32} className="text-yellow-500" />,
    title: "BPO",
    desc: "• Intelligent Finance Operations • Sourcing and Procurement • Supply Chain • Compliance as a Service",
  },
  {
    icon: <Briefcase size={32} className="text-yellow-500" />,
    title: "KPO",
    desc: "The scope of KPO business includes preparation of accounts, tax returns, computer aided simulation, engineering and development, financial services.",
  },
  {
    icon: <HeartPulse size={32} className="text-yellow-500" />,
    title: "Healthcare Services",
    desc: "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease.",
  },
  {
    icon: <Code size={32} className="text-yellow-500" />,
    title: "Software Solution",
    desc: "The market is booming every day with continuous demand for creative and customised software development.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-8 md:px-20 py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Dignisys Limited is a newly startup providing cost effective timely
        services to different industries, enabling them to enhance their
        business and maximize their efficiencies to achieve their organizational
        mission & goals.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {service.desc}
            </p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition">
              Know More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;