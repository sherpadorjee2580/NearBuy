import React from "react";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <section className="about__team max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">The team behind NearBuy</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="about__teamCard bg-white shadow p-6 rounded-xl flex flex-col items-start text-center">
          <Image
            src="/images/MyProfile.jpg"
            width={60}
            height={60}
            alt="Merchant"
            className="about__teamImg rounded-full"
          />
          <h4 className="font-semibold mt-3">Local merchants</h4>
          <p className="text-gray-600 text-sm mt-1">Shop owners & farmers...</p>
        </div>

        <div className="about__teamCard bg-white shadow p-6 rounded-xl flex flex-col items-start text-center">
          <Image
            src="/images/MyProfile.jpg"
            width={60}
            height={60}
            alt="Designer"
            className="about__teamImg rounded-full"
          />
          <h4 className="font-semibold mt-3">Design & product</h4>
          <p className="text-gray-600 text-sm mt-1">Experience & flows...</p>
        </div>

        <div className="about__teamCard bg-white shadow p-6 rounded-xl flex flex-col items-start text-center">
          <Image
            src="/images/MyProfile.jpg"
            width={60}
            height={60}
            alt="Partners"
            className="about__teamImg rounded-full"
          />
          <h4 className="font-semibold mt-3">Community partners</h4>
          <p className="text-gray-600 text-sm mt-1">Advisors in Jiri...</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
