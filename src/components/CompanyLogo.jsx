import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

function CompanyLogo() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="w-full container mx-auto py-20 flex md:flex-row flex-col sm:items-center items-center font-medium overflow-hidden gap-10 ">
      <div className="w-full md:w-[300px] shrink-0 text-gray-600 md:border-l-4 md:border-t-0 border-t-4 border-l-0 border-blue-500  bg-white px-8 md:py-4 py-6  z-10 md:text-base text-md font-semibold text-center sm:mb-4 ">
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className="flex whitespace-nowrap animate-marquee items-center ">
        {logos.map((logo, index) => {
          return (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-95 cursor-pointer"
            />
          );
        })}
        {logos.map((logo, index) => {
          return (
            <img
              key={`dupe-${index}`}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-95 cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}

export default CompanyLogo;
