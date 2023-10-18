import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Link and Switch
import Navbar from "../components/Navbar";
import img1 from "../assets/picture1.png";
import img2 from "../assets/picture2.png";
import img3 from "../assets/picture3.png";
import Card from "../components/card";
import search from "../assets/search.png";
import connect from "../assets/connect.png";
import research from "../assets/research.png";
import academy from "../assets/academy.png";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import Footer from "../components/Footer";

export default function Home(props) {
  const data = [
    {
      id: 1,
      no: "1st",
      title: "Commencement of business ",
      desc: "Invested shareholders must confirm payment and office address ",
      due: "Within 180 days ",
      penulty: "₹50,000 for the company,₹1,000 /day for directors",
    },
    {
      id: 2,
      no: "2nd",
      title: "Auditor Appointment ",
      desc: "Company informs new auditor and submits ADT.1 form to ROC. ",
      due: "Within 30 days ",
      penulty: "₹300 per month",
    },
    {
      id: 3,
      no: "3rd",
      title: "DIN eKYC ",
      desc: "Directors share personal information for identification & verification ",
      due: "Every year ",
      penulty: "₹5000 one time",
    },
    {
      id: 4,
      no: "4th",
      title: "DPT-3",
      desc: "Companies report money taken from people to ROC; auditors confirm details.",
      due: "Within 30 days ",
      penulty: "₹300 per month.",
    },
    {
      id: 5,
      no: "5th",
      title: "MCA Form AOC-4",
      desc: "It's like an official report card for a company's documents ",
      due: "On or Before 30th November ",
      penulty: "₹200 per day (No upper limit)*",
    },
    {
      id: 6,
      no: "6th",
      title: "MCA Form MGT-7",
      desc: "Companies must annually report activities and finances to the registrar.",
      due: "On or Before 31st December",
      penulty: "₹200 per day(No upper limit)* ",
    },
  ];

  
  
  const [names, setNames] = useState({});
  // console.log("names: ", names);

  fetch('http://localhost:5001/ca')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data here
    console.log(data); // This will log the data to the console
    setNames(data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    console.log("se",names)
    const lowercaseQuery = query.toLowerCase();
    const filteredResults = names.filter(item => item.name.toLowerCase().includes(lowercaseQuery));
    setResults(filteredResults);
    setShow(true);
  };

  return (
    <div class="w-full flex-col h-auto bg-gradient-to-r from-[#FEDDEE] overflow-x-hidden">
      <Navbar />

      {/* ..........................after navabar starts.......................... */}
      <div class="w-full flex justify-start items-center pl-20 min-w-10 flex-wrap">
        <div class="w-1/3 flex-col h-auto my-10 min-w-fit">
          <div class="flex-col">
            <p class="text-5xl font-bold">
              Find{" "}
              <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Partners
              </span>{" "}
              (CAs){" "}
            </p>
            <p class="text-5xl font-bold">available online</p>
            <p>
              <span class="font-bold">CONNECT</span> with us where your services
              are listed and visible to a
            </p>
            <p>myriad of businesses seeking CA’s for compliance support</p>
          </div> 

          <div class='flex py-4'>
          <input
          type='text'
          className='p-2 rounded-l-lg w-64'
          placeholder='Search by name'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className='btn-primary rounded-l-none' onClick={handleSearch}>
          SEARCH
        </button>
          </div>

          
        {show && (
        <div class="p-2 rounded-l-lg w-64 bg-white h-44 overflow-y-scroll">
        {results.length > 0 ? (
          results.map(item => (
            <div key={item.id}>
               {/* <Link to={{
                  pathname: `/details`,
                  state: { itemData:item.id } // Pass the entire data object
                }}> */}
              <p class='py-2 hover:cursor-pointer'>{item.name}</p>
              {/* </Link> */}
              {/* Add other properties you want to display */}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      )}

        </div>

        {/* ..................image part...................... */}
        <div class="w-3/5 flex my-10 justify-end min-w-10 flex-wrap">
          <img class="px-2 mt-10 min-w-fit" src={img1} />
          <img class="px-2 mb-6 min-w-fit" src={img2} />
          <img class="pl-2 mt-4 mb-2 min-w-fit" src={img3} />
        </div>
      </div>
      {/* ..........................after navabar ends.......................... */}

      {/* ..........................text part starts.......................... */}
      <div class="w-full h-auto flex pt-20">
        <div class="w-full flex-col items-end">
          <p class="text-5xl font-bold text-center">
            Want to
            <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Join
            </span>{" "}
            Us?
          </p>

          <p class="text-center">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </div>
      </div>
      {/* ..........................text part ends.......................... */}

      {/* ................cards...................... */}
      <div class="w-full h-auto flex pt-20 mx-10  flex-wrap justify-center items-center">
        {data.map((item, index) => (
          <Card 
          no={item.no}
          title={item.title}
          desc={item.desc}
          due={item.due}
          penulty={item.penulty}
          />
        ))}
      </div>

      <div class="w-full flex justify-center items-center my-2">
      <p class="w-4/5 text-start text-sm mx-10 text-clip">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span class="font-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>


      
      {/* ..........................3rd section.......................... */}
      <div class="w-full flex justify-start items-start pl-20 min-w-10 flex-wrap mt-28 overflow-hidden">
        <div class="w-1/3 flex-col h-auto  min-w-fit text-clip">
          <div class="flex-col">
            <p class="text-5xl font-bold">
              <span class="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                All-in-One
              </span>{" "}
              platform{" "}
            </p>
            <p class="text-5xl font-bold">that Makes Easier</p>

            <div class="text-md my-8 text-md">
            <p>
            We are more than a platform; 
            <p>We are your success partner. Discover our services to achieve </p>
            <p>your business and educational goals</p>
            </p>
            </div>

            <div class="w-full flex pt-4">
              <div class="flex-col pr-6">
                <div class="flex">
                  <img class="w-8 h-8" src={search} />
                  <div class="flex-col pl-2">
                  <p><span class="font-bold">SEARCH</span> for </p>
                  <p>vital</p>
                  <p>company information </p>
                  </div>
                </div>

                <div class="flex pt-4">
                  <img class="w-8 h-8" src={research} />
                  <div class="flex-col pl-2">
                  <p><span class="font-bold">RESEARCH</span> and </p>
                  <p>generate reports </p>
                  <p>that drive growth </p>
                  </div>
                </div>
              </div>

              <div class="flex-col">
              <div class="flex">
                  <img class="w-8 h-8" src={connect} />
                  <div class="flex-col pl-2">
                  <p><span class="font-bold">CONNECT</span> with the</p>
                  <p>resources to meet</p>
                  <p>your business needs</p>
                  </div>
                </div>

                <div class="flex pt-4">
                  <img class="w-8 h-8" src={academy} />
                  <div class="flex-col pl-2">
                  <p><span class="font-bold">ACADEMY</span> to give you</p>
                  <p>the skills for success</p>
                  <p>in your career</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          
        </div>

        {/* ..................image part...................... */}
        <div class="w-3/5 flex my-10 justify-end min-w-10 flex-wrap">
          <div class="flex-col">
            <div class="flex">
              <div class="flex-col items-end">
                <div class="bg-fuchsia-100 p-2 my-2 rounded-t-xl rounded-bl-xl w-fit">Hey, check out loreumipsum services. </div>
                <div class="bg-fuchsia-100 p-2 my-2 rounded-t-xl rounded-bl-xl w-fit">I learned from their videos, got my first job.</div>
                <div class="bg-fuchsia-100 p-2 my-2 rounded-t-xl rounded-bl-xl w-fit">You won't be disappointed with their services.</div>
                
                <div class="mt-20 mb-0">
                <div class="bg-blue-100 p-2 my-2 rounded-b-xl rounded-tr-xl w-fit ">I got a perfect analysis report from them too</div>
                <div class="bg-blue-100 p-2 mt-2 rounded-b-xl rounded-tr-xl w-fit">Oh, that's great.</div>
                </div>

              </div>

              <img src={student}/>

            </div>
          </div>

          <div class="w-full justify-start pl-8">
            <img class="" src={teacher}/>
          </div>
          
          
        </div>

      </div>
      {/* ..........................after navabar ends.......................... */}



      <Footer/>
    </div>
  );
}
