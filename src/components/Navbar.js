import React from "react";
import logo from "../assets/image1.png";
import arrow from "../assets/downarrow.png";

export default function Navbar() {
  return (
    <div class="w-full h-auto flex-row items-center min-w-10 flex-wrap">
      <div class="w-3/5 flex pl-20 min-w-10 flex-wrap">
        <img class="px-2 pt-1" src={logo} />

        <div class="flex justify-center items-center px-4">
          <p class="text-xl text-black font-poppins font-bold">Solutions</p>
          <img class="pt-1" src={arrow} />
        </div>

        <div class="flex justify-center items-center px-4">
          <p class="text-xl text-black font-poppins font-bold">Features</p>
          <img class="pt-1" src={arrow} />
        </div>

        <div class="flex justify-center items-center px-4">
          <p class="text-xl text-black font-poppins font-bold">Blogs</p>
        </div>

        <div class="flex justify-center items-center px-4">
          <p class="text-xl text-black font-poppins font-bold">About</p>
          <img class="pt-1" src={arrow} />
        </div>

        {/* <div class="flex justify-center items-center px-4">
          <button class="btn-primary">Save changes</button>
        </div> */}

        


      </div>

      {/* <div class="w-1/5 flex justify-start items-center">
        <button class="btn-primary">Save changes</button>
        <button class="btn-primary">Save changes</button>
      </div> */}

    </div>
  );
}
