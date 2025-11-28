import React from "react";

const AboutPrinciple = () => {
  return (
    <div className="about__principles max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Our principles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="about__principle bg-white shadow p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Local before global</h3>
          <p className="text-gray-600">We prioritize Jiri merchants...</p>
        </div>

        <div className="about__principle bg-white shadow p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Clarity over complexity</h3>
          <p className="text-gray-600">Clean layouts and clear pricing...</p>
        </div>

        <div className="about__principle bg-white shadow p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Light on data</h3>
          <p className="text-gray-600">Optimized for limited connectivity...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPrinciple;
