import React from "react";
import homeBg from "../assets/home-hero.png";
export const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    height: "87vh",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div style={containerStyle}>
        <div className="text-center text-white mt-40 flex justify-center flex-col items-center">
          <h1 className="font-sans text-6xl text-start ml-2">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="font-sans text-lg mt-8 text-start ml-2">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button
            className="bg-orange-600 p-3 text-lg rounded-lg
        mt-12 w-96 hover:bg-orange-500"
          >
            Find your van
          </button>
        </div>
      </div>
    </>
  );
};
