import React from "react";
import Image from "next/image";

const AboutContact = () => {
  return (
    <div className="about__contact max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
      <div className="about__form bg-white shadow p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>

        <div className="flex flex-col gap-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Full name"
          />
          <input className="w-full border p-3 rounded" placeholder="Email" />

          <select className="w-full border p-3 rounded">
            <option>Select a reason</option>
            <option>General inquiry</option>
            <option>Merchant support</option>
          </select>

          <textarea
            className="w-full border p-3 rounded h-32"
            placeholder="Your message"
          ></textarea>

          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send message
          </button>
        </div>
      </div>

      {/* Right Contact Details */}
      <div className="about__info bg-white shadow p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Reach us directly</h2>

        <p>
          <strong>Email:</strong> support@nearbuy.local
        </p>
        <p>
          <strong>Phone:</strong> +977-980XXXXXXX
        </p>
        <p>
          <strong>Office:</strong> Jiri Bazaar, Dolakha
        </p>

        <div className="mt-4">
          <Image
            src="/images/map.png"
            width={500}
            height={300}
            className="rounded-xl"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
