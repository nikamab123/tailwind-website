import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import star from "../assets/star-fill.png";
import calendar from "../assets/calendar.png";
import pic from "../assets/img.png";
import { useLocation } from "react-router-dom";

export default function Details(props) {
  const location = useLocation();
  console.log("props", location.state);
  //   const { itemData } = props.location;

  const data = location.state.from;

  return (
    <div class="w-full flex-col h-auto  overflow-x-hidden">
      <Navbar />

      {/* ...........left starts.............................. */}
      <div class="lg:flex md:flex sm:flex">
        <div class="w-3/5 pl-20 py-20 ">
          <p class="font-bold text-3xl py-2">{data.name}</p>
          <p class="w-96 py-4">{data.intro}</p>

          <div class="flex">
            <img src={star} />
            <p class="px-2 font-bold text-xl text-blue-400">
              4.8<span class="text-normal font-normal text-black"> (89) </span>
            </p>
          </div>

          <div class="w-96 flex-col rounded-xl shadow-md py-6">
            <div class="flex justify-between px-5 pb-2">
              <p>{data.taskComplexity}</p>
              <p class="font-bold">{data.price}</p>
            </div>
            <div class="flex px-5 pb-2">
              <img class="pr-2" src={calendar} />
              <p>{data.deliveryTime}</p>
            </div>

            <div class="flex px-5 justify-between pb-1">
              <button class="w-40 bg-blue-500 text-white rounded-xl p-1 font-bold">
                Request Proposal
              </button>
              <button class="w-40 bg-white text-blue-500 rounded-xl p-1 font-bold border-2 border-blue-500">
                Chat with me
              </button>
            </div>
          </div>

          <div class="w-96 flex-col rounded-xl shadow-md py-6">
            <p class="font-bold text-3xl py-2 px-5">What people say?</p>
            <p class="w-96 py-4 px-5">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>
        {/* ...........left ends.............................. */}

        {/* ...........right starts.............................. */}
        <div class="w-auto flex-col py-20 justify-start pr-6 max-[768px]:justify-center max-[768px]:pl-20">
          <div>
            <img class="rounded-xl pb-2  md:w-96 lg:w-full w-96"  src={pic} />
          </div>
          <p class="font-bold text-3xl py-2">About {data.name}</p>

          <div class="flex justify-between">
            <div class="flex-col">
              <p class="font-bold text-gray-300">FROM</p>
              <p>{data.about.from}</p>
            </div>

            <div class="flex-col">
              <p class="font-bold text-gray-300">PARTNER SINCE</p>
              <p>{data.about.partnerSince}</p>
            </div>

            <div class="flex-col">
              <p class="font-bold text-gray-300">AVERAGE RESPONSE TIME</p>
              <p>{data.about.averageResponseTime}</p>
            </div>
          </div>

          <p class="font-bold text-gray-300 pt-6">ABOUT</p>
          <p>{data.about.description}</p>

          <div class="flex  pt-6 ">
            <div class="flex-col pr-6 w-1/2 justify-start">
              <p class="font-bold text-gray-300">SERVICES OFFERED</p>

              {data.about.services.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div class="flex-col pr-2 w-1/2 justify-start">
              <p class="font-bold text-gray-300">WHY ME?</p>
              {data.about.benefits.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ...........right ends.............................. */}

      <Footer />
    </div>
  );
}
