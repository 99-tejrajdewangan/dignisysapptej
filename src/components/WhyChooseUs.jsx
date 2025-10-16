import React from "react";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Broad Expertise & Versatility",
    desc: "Founded by professionals with deep experience across technology, travel, logistics, shipping, software development, federal contracting, BPO management, and tech enablement — enabling them to deliver consistent, high-quality services tailored to diverse business needs.",
  },
  {
    title: "Cost-Effective, Timely, and Efficient Services",
    desc: "A startup committed to offering cost-effective, timely solutions that help clients enhance business operations and achieve their objectives with efficiency.",
  },
  {
    title: "Efficiency, Trust & Technology-Driven Execution",
    desc: "Our logistics network leverages clear, effective communication, process optimization, and modern tech to maximize freight efficiency and reduce back-haul wastage.",
  },
  {
    title: "Convenience, Affordability & 24/7 Support",
    desc: "Positioned as a cutting-edge travel reservation service, offering affordable pricing, safe booking systems, and round-the-clock travel agent support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0b1b3f] text-white px-8 md:px-20 py-20">
      <h3 className="text-sm font-semibold text-yellow-400 mb-2">
        OUR KEY USP’S
      </h3>
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">Why Choose Us</h2>

      <div className="space-y-8">
        {reasons.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <ArrowRight className="text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;