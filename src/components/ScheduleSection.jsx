import React from "react";
import scheduleImage from "../assets/stats.webp";
import monitorImage from "../assets/monitor-card.webp";

const ScheduleSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full justify-center align-middle text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          How can we help your bussiness?
        </h2>
        <p className="text-gray-500 text-md">
          We deliver the best services that you could imagine
        </p>
      </div>
      <section className="max-w-5xl flex-col md:flex-row justify-between mx-auto container flex py-6 px-4">
        {/* img */}
        <div className="flex justify-center flex-shrink-0">
          <img
            src={scheduleImage}
            className="size-100"
            alt="schedule feature image"
          />
        </div>

        {/* desc */}
        <div className="flex justify-center">
          <div className="flex flex-col justify-center gap-6 text-center md:text-right max-w-xl md:max-w-3xl">
            <p className="text-sm text-orange-400 font-bold">SCHEDULE</p>
            <h3 className="text-3xl text-gray-900 font-bold">
              Streamline Your Business with Smart Scheduling Solutions
            </h3>
            <p className="text-sm text-gray-500">
              Take control of you time and boost productivity with our
              intelligent scheduling system. Automate appointment, manage team
              availability, and deliver exceptional customer experiences through
              seamless calendar management
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
      <section className="max-w-5xl flex-col md:flex-row justify-between mx-auto container flex py-6 px-4">
        {/* img */}
        <div className="flex justify-center flex-shrink-0 order-1 md:order-2">
          <img
            src={monitorImage}
            className="size-100"
            alt="schedule feature image"
          />
        </div>
        {/* desc */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="flex flex-col justify-center gap-6 text-center md:text-left max-w-xl md:max-w-3xl">
            <p className="text-sm text-green-500/85 font-bold">MONITOR</p>
            <h3 className="text-3xl text-gray-900 font-bold">
              Introducing Best Mobile Monitoring Platform for Your Business
            </h3>
            <p className="text-sm text-gray-500">
              Monitor your business with our smart panel and dashboard with ease
              using mobile device!
            </p>
            <p>
              <a
                href="#"
                className="text-blue-500 font-bold hover:underline transition-all hover:text-blue-700"
              >
                Explore monitoring features →{" "}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;
