import React from "react";

const AboutFaq = () => {
  return (
    <div className="about__faq max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Questions you might have</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded-xl">
          <h4 className="font-semibold mb-2">Is NearBuy only for Jiri?</h4>
          <p className="text-gray-600">Yes, we focus on Jiri...</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h4 className="font-semibold mb-2">How do I list my shop?</h4>
          <p className="text-gray-600">Use the signup button...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFaq;
