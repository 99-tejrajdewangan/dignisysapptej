import React from "react";

const stats = [
  { number: "200", label: "Custom Apps" },
  { number: "45", label: "Happy Customers" },
  { number: "3560", label: "Hours of Work" },
  { number: "750", label: "Development Awards" },
];

const CompanySuccess = () => {
  return (
    <section className="px-8 md:px-20 py-20 bg-gray-50 text-center relative overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Company Success
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-gray-900">{item.number}</h3>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Background Map */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution_gray_blue.png"
        alt="world map background"
        className="absolute inset-0 opacity-5 object-cover w-full h-full"
      />
    </section>
  );
};

export default CompanySuccess;