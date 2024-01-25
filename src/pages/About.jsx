import React from "react";
import hero from "../assets/about-hero.png";
export const About = () => {
  return (
    <>
      <div className="bg-slate-200 flex flex-col justify-center items-center lg:h-[80vh]">
        <img
          src={hero}
          alt="heroImg"
          className=" w-full h-56 lg:w-72 lg:mt-4"
        />
        <h1 className="text-3xl font-['arial']  p-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-[16px] font-['arial'] pt-0 p-4 lg:text-center">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <div className="bg-orange-400 text-gray-200 w-80 rounded-2xl mb-10 ">
          <h1 className="p-10">
            Your destination is waiting. Your van is ready.
          </h1>
          <button className="bg-gray-700 text-gray-200 p-4 mt-0 ml-10 mb-10 rounded-lg hover:bg-gray-600">
            Explore our vans
          </button>
        </div>
      </div>
    </>
  );
};
