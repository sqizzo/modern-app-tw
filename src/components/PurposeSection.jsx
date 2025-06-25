import React from "react";

const PurposeSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 text-center md:text-left items-center">
          {/* First col */}
          <div className="">
            <p className="text-sm text-purple-500 font-bold mb-2">
              ACHIEVE MORE
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-extrabold text-gray-900">
              Purpose of a convoy is to keep your team
            </h2>
          </div>
          {/* Second col */}
          <div className="md:flex-row flex-col flex gap-6 justify-center items-center md:items-start">
            <div className="size-8 rounded-full bg-gradient-to-tl from-purple-600 to-purple-300"></div>
            <div className="w-3/4">
              <h3 className="text-lg mb-2 font-bold text-gray-900">
                Built for impact
              </h3>
              <p className="text-md text-gray-500 ">
                We identify and nurture a truly diverse team of designers,
                developers, and marketers
              </p>
            </div>
          </div>
          <div className="md:flex-row flex-col flex gap-6 justify-center items-center md:items-start">
            <div className="size-8 rounded-full bg-gradient-to-tl from-orange-600 to-orange-200"></div>
            <div className="w-3/4">
              <h3 className="text-lg mb-2 font-bold text-gray-900">
                In sync with you
              </h3>
              <p className="text-md text-gray-500 ">
                We work the way you do by adapting your workflows and rhythm. We
                aim to blend in for a seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
