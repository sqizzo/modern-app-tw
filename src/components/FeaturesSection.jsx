import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col gap-16 py-24 px-12 items-center justify-center text-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold text-gray-900">
          How can we help your bussiness?
        </h2>
        <p className="text-gray-500 text-md">
          We deliver the best services that you could imagine
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center">
        <div className="flex flex-col items-center gap-2 max-w-xs shadow-lg hover:shadow-xl transition-all p-10 rounded-xl hover:-translate-y-2 flex-shrink-0 group">
          <div className="size-24 flex items-center justify-center flex-shrink-0 bg-violet-100 rounded-full text-3xl group-hover:bg-violet-200 transition-colors">
            🔍
          </div>
          <h4 className="mt-8 text-xl font-bold">Find out what you need</h4>
          <p className="text-gray-500 text-md">
            We research the thing that you need the most
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 max-w-xs shadow-lg hover:shadow-xl transition-all p-10 rounded-xl  hover:-translate-y-2 flex-shrink-0 group">
          <div className="size-24 flex items-center justify-center flex-shrink-0 bg-blue-100 rounded-full text-3xl group-hover:bg-blue-200">
            ⚙️
          </div>
          <h4 className="mt-8 text-xl font-bold">We work out the details</h4>
          <p className="text-gray-500 text-md">
            We communicate the protocols from the engagement models
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 max-w-xs shadow-lg hover:shadow-xl transition-all p-10 rounded-xl  hover:-translate-y-2 flex-shrink-0 group">
          <div className="size-24 flex items-center justify-center flex-shrink-0 bg-red-100 rounded-full text-3xl group-hover:bg-red-200">
            🚀
          </div>
          <h4 className="mt-8 text-xl font-bold">We get to work fast</h4>
          <p className="text-gray-500 text-md">
            The fastest protocol to make sure the business done fast!
          </p>
        </div>
      </div>
      <div className="w-fit">
        <button className="bg-blue-600 px-8 py-4 rounded-full text-md font-medium text-white cursor-pointer hover:shadow-blue-500/30 hover:shadow-lg transition-all hover:bg-blue-700">
          Become our Partner
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
