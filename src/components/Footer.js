import React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import wp from "../assets/wp.png";

export default function Footer() {
  return (
    <div class="w-full flex bg-blue-500 ">
      {/* ...........................blue........................ */}
      <div class="flex-col">
        <div class="w-full flex justify-between px-8 pb-6 min-w-10 flex-wrap">
            <div class="flex-col w-60 pr-4">
                <img class="pt-6 text-sm" src={logo} />
                <p>India's first platform dedicated to simplifying partner search</p>
            </div>

            <div class="flex-col w-44 text-white  py-4 ">
              <p class="font-bold py-4">COMPANY</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>   

            <div class="flex-col w-44 text-white  py-4">
              <p class="font-bold py-4">SOLUTIONS</p>
              <p>Search</p>
              <p>Connect</p>
              <p>Research</p>
              <p>Academy</p>
            </div>  

            <div class="flex-col w-44 text-white  py-4">
              <p class="font-bold py-4">RESOURCES</p>
              <p>Blogs</p>
              <p>Forms</p>
            </div>  

            <div class="flex-col w-44 text-white  py-4">
              <p class="font-bold py-4">SUPPORT</p>
              <p>Help</p>
              <p>Contact Us</p>
            </div>  

            <div class="flex-col w-44 text-white  py-4">
              <p class="font-bold py-4">LEGAL</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Accessibility</p>

            </div>  
        </div>

        <hr class="w-full justify-self-center h-2 m-4 self-center"/>

        <div class="w-full flex justify-between px-8 pb-6 min-w-10 flex-wrap">
          <p class="text-white">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>

          <div class="flex w-44 justify-between">
            <img src={fb} />
            <img src={insta} />
            <img src={linkedin} />
            <img src={wp} />
          </div>
        </div>

        <div class="w-screen flex bg-black justify-center">
        <p class="text-white text-center text-sm py-4">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
        </div>


      </div>
      {/* ...........................blue........................ */}
     

      {/* ...........................black........................ */}
    </div>
  );
}
