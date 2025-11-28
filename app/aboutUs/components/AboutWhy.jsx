import React from "react";

const AboutWhy = () => {
  return (
    <div className="about__why max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6 py-12">
      <div className="about__whyCard bg-white shadow p-6 rounded-xl">
        <h2 className="about__whyTitle text-2xl font-semibold mb-3">
          Why we built NearBuy
        </h2>
        <p className="about__whyText text-gray-600 mb-4">
          Keeping more of every rupee inside Jiri...
        </p>
        <div className="about__stats mt-4">
          <p className="text-gray-700">
            Merchants onboarded: <strong>30+</strong>
          </p>
          <p className="text-gray-700">
            Local categories: <strong>8</strong>
          </p>
        </div>
      </div>

      <div className="about__how bg-white shadow p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">How NearBuy works</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Merchants register & add products</li>
          <li>Customers browse and order</li>
          <li>Orders are delivered or scheduled</li>
          <li>Local pickup available</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutWhy;
