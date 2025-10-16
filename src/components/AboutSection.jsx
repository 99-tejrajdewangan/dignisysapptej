import React from "react";

const AboutSection = () => {
  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      {/* Heading */}
      <h3 className="text-sm font-semibold text-yellow-600 mb-2">ABOUT US</h3>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Dignisys is a start-up venture by a team <br />
            of investors and professionals with <br />
            multitude of experience.
          </h2>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Company Building"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Experience in technology, travel, logistics, shipping, software
            development, federal contracting, BPO management and technology
            enablers.
          </p>
          <p>
            Using this vast pool of knowledge and experience, Dignisys has the
            skills and backing to deliver outstanding and consistent services to
            our business partners and clients, enabling them to expand their
            business and maximize their efficiencies to achieve their
            organizational mission & goals. We say it’s the start of something
            big and you are welcome to join us in our journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
