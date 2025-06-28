import React from "react";
import scheduleImage from "../assets/stats.webp";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl flex-col md:flex-row justify-between mx-auto container flex py-6 px-4">
      {/* img */}
      <div className="flex justify-center">
        <img
          src={scheduleImage}
          className="size-100"
          alt="schedule feature image"
        />
      </div>
      {/* desc */}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-6 text-center md:text-left max-w-xl md:max-w-3xl">
          <p className="text-sm text-orange-400 font-bold">SCHEDULE</p>
          <h3 className="text-3xl text-gray-900 font-bold">
            Streamline Your Business with Smart Scheduling Solutions
          </h3>
          <p className="text-sm text-gray-500">
            Take control of you time and boost productivity with our intelligent
            scheduling system. Automate appointment, manage team availability,
            and deliver exceptional customer experiences through seamless
            calendar management
          </p>
          <p>
            <a
              href="#"
              className="text-blue-500 font-bold hover:underline transition-all hover:text-blue-700"
            >
              Explore scheduling features →{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
