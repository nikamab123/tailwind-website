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

  const ca = [
    {
      "id": 1,
      "name": "Michael Jackson",
      "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
      "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
      "rating": 4.8,
      "reviewCount": 89,
      "taskComplexity": "Basic to complex tasks",
      "price": "€4,370",
      "deliveryTime": "Delivers within 2 days",
      "testimonial": {
        "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
        "author": "John Doe"
      },
      "about": {
        "from": "INDIA",
        "partnerSince": 2011,
        "averageResponseTime": "30 minutes",
        "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
        "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
        "benefits": ["One-time delivery", "24/7 support"]
      }
    },
    {
      "id": 2,
      "name": "Lucy Brown",
      "image": "https://images.unsplash.com/photo-1556746818-17b142980bb2?fit=crop&w=800&q=80",
      "intro": "Dedicated accountant with expertise in taxation and corporate finance.",
      "rating": 4.5,
      "reviewCount": 75,
      "taskComplexity": "Intermediate to advanced tasks",
      "price": "€3,900",
      "deliveryTime": "Delivers within 3 days",
      "testimonial": {
        "text": "Lucy has been an invaluable asset to our company's financial planning.",
        "author": "Alice Martin"
      },
      "about": {
        "from": "USA",
        "partnerSince": 2013,
        "averageResponseTime": "45 minutes",
        "description": "Committed to delivering top-notch accounting services to businesses and individuals.",
        "services": ["Taxation", "Corporate Finance", "Auditing"],
        "benefits": ["Error-free documentation", "Expert consultations"]
      }
    },
    {
      "id": 3,
      "name": "Robert Smith",
      "image": "https://images.unsplash.com/photo-1517433456452-f9633a875fbc?fit=crop&w=800&q=80",
      "intro": "Experienced in overseeing financial management of medium to large enterprises.",
      "rating": 4.6,
      "reviewCount": 65,
      "taskComplexity": "Advanced financial tasks",
      "price": "€4,500",
      "deliveryTime": "Delivers within 4 days",
      "testimonial": {
        "text": "Robert's strategic approach to financial management has been pivotal to our company's success.",
        "author": "James Walker"
      },
      "about": {
        "from": "UK",
        "partnerSince": 2010,
        "averageResponseTime": "25 minutes",
        "description": "Specialized in strategic financial planning and corporate finance.",
        "services": [
          "Corporate finance",
          "Strategic planning",
          "Asset management"
        ],
        "benefits": [
          "Comprehensive financial review",
          "Customized financial solutions"
        ]
      }
    },
    {
      "id": 4,
      "name": "Anita Patel",
      "image": "https://images.unsplash.com/photo-1563990112129-a9a72c04f5d7?fit=crop&w=800&q=80",
      "intro": "Passionate about helping startups navigate the complexities of financial compliance.",
      "rating": 4.9,
      "reviewCount": 95,
      "taskComplexity": "Basic to intermediate tasks",
      "price": "€3,900",
      "deliveryTime": "Delivers within 2 days",
      "testimonial": {
        "text": "Anita's insights have been invaluable to our startup. Her expertise in financial compliance is unmatched.",
        "author": "Raj Mehta"
      },
      "about": {
        "from": "INDIA",
        "partnerSince": 2018,
        "averageResponseTime": "20 minutes",
        "description": "Focuses on financial compliance and advisory services for startups.",
        "services": ["Financial compliance", "Advisory services", "Tax planning"],
        "benefits": ["Startup-friendly", "Tailored financial strategies"]
      }
    },
    {
      "id": 5,
      "name": "Johnathan Lee",
      "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=800&q=80",
      "intro": "Expert in streamlining business operations with financial acumen.",
      "rating": 4.5,
      "reviewCount": 72,
      "taskComplexity": "Intermediate tasks",
      "price": "€4,200",
      "deliveryTime": "Delivers within 3 days",
      "testimonial": {
        "text": "Johnathan's ability to marry financial expertise with operational efficiency has transformed our business.",
        "author": "Linda Kim"
      },
      "about": {
        "from": "CANADA",
        "partnerSince": 2012,
        "averageResponseTime": "35 minutes",
        "description": "Specializing in operational finance and business transformation.",
        "services": [
          "Operational finance",
          "Business strategy",
          "Risk assessment"
        ],
        "benefits": ["Business transformation", "Operational efficiency"]
      }
    },
    {
      "id": 6,
      "name": "Sophia Fernandez",
      "image": "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?fit=crop&w=800&q=80",
      "intro": "Champion in guiding SMEs through their financial journeys with transparency and integrity.",
      "rating": 4.8,
      "reviewCount": 88,
      "taskComplexity": "Basic to advanced tasks",
      "price": "€4,250",
      "deliveryTime": "Delivers within 2 days",
      "testimonial": {
        "text": "Sophia's consultative approach and deep knowledge have helped our business thrive financially.",
        "author": "Carlos Rodriguez"
      },
      "about": {
        "from": "SPAIN",
        "partnerSince": 2016,
        "averageResponseTime": "28 minutes",
        "description": "Dedicated to offering top-tier financial consulting for small to medium enterprises.",
        "services": ["Financial consulting", "SME advisory", "Growth strategies"],
        "benefits": ["Transparent communication", "Integrity-driven solutions"]
      }
    },
    {
      "id": 7,
      "name": "William O'Connell",
      "image": "https://images.unsplash.com/photo-1542751371-6533d14d705f?fit=crop&w=800&q=80",
      "intro": "Master of tax strategy and international finance regulations.",
      "rating": 4.6,
      "reviewCount": 78,
      "taskComplexity": "Advanced tasks",
      "price": "€5,000",
      "deliveryTime": "Delivers within 4 days",
      "testimonial": {
        "text": "William's strategies saved us from major tax implications during our international expansion.",
        "author": "Fiona Gallagher"
      },
      "about": {
        "from": "IRELAND",
        "partnerSince": 2009,
        "averageResponseTime": "32 minutes",
        "description": "Expertise in handling complex international finance and tax scenarios.",
        "services": [
          "Tax strategy",
          "International finance",
          "Regulatory compliance"
        ],
        "benefits": ["Global finance solutions", "Tax efficiency"]
      }
    },
    {
      "id": 8,
      "name": "Nina Johansson",
      "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?fit=crop&w=800&q=80",
      "intro": "Specializes in financial forensics and fraud examination.",
      "rating": 4.9,
      "reviewCount": 92,
      "taskComplexity": "Advanced forensic tasks",
      "price": "€5,150",
      "deliveryTime": "Delivers within 5 days",
      "testimonial": {
        "text": "Nina's forensic skills have been instrumental in protecting our firm from potential financial frauds.",
        "author": "Marcus Blom"
      },
      "about": {
        "from": "SWEDEN",
        "partnerSince": 2013,
        "averageResponseTime": "26 minutes",
        "description": "Focused on protecting businesses through financial forensics and fraud examination.",
        "services": [
          "Financial forensics",
          "Fraud examination",
          "Risk management"
        ],
        "benefits": ["Financial protection", "Fraud prevention"]
      }
    },
    {
      "id": 9,
      "name": "Oliver Bernard",
      "image": "https://images.unsplash.com/photo-1579637305941-57a5d3807b1d?fit=crop&w=800&q=80",
      "intro": "Dedicated to empowering non-profits with financial strategies and sustainability.",
      "rating": 4.7,
      "reviewCount": 85,
      "taskComplexity": "Intermediate to advanced tasks",
      "price": "€4,800",
      "deliveryTime": "Delivers within 3 days",
      "testimonial": {
        "text": "Oliver's insights have optimized our non-profit's financial health and long-term sustainability.",
        "author": "Clara Mathews"
      },
      "about": {
        "from": "AUSTRALIA",
        "partnerSince": 2017,
        "averageResponseTime": "30 minutes",
        "description": "Passionate about bolstering the financial backbone of non-profit organizations.",
        "services": [
          "Non-profit finance",
          "Sustainability planning",
          "Grants management"
        ],
        "benefits": ["Enhanced sustainability", "Optimized financial health"]
      }
    },
    {
      "id": 10,
      "name": "Isabella Martinez",
      "image": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?fit=crop&w=800&q=80",
      "intro": "Expert in mergers, acquisitions, and corporate restructuring with a decade of experience.",
      "rating": 4.8,
      "reviewCount": 90,
      "taskComplexity": "Complex corporate tasks",
      "price": "€6,000",
      "deliveryTime": "Delivers within 6 days",
      "testimonial": {
        "text": "Isabella played a pivotal role in our successful merger, showcasing exemplary financial acumen.",
        "author": "Rafael Vega"
      },
      "about": {
        "from": "MEXICO",
        "partnerSince": 2014,
        "averageResponseTime": "28 minutes",
        "description": "Specializes in navigating the financial complexities of mergers and acquisitions.",
        "services": [
          "Mergers and acquisitions",
          "Corporate restructuring",
          "Financial strategy"
        ],
        "benefits": ["Strategic financial guidance", "Efficient restructuring"]
      }
    }
  ]
  
  
  const [names, setNames] = useState({});
  // console.log("names: ", names);

  

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase();
    const filteredResults = ca.filter(item => item.name.toLowerCase().includes(lowercaseQuery));
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
               <Link to="/details" state={{ from: item }}>
                
              <p class='py-2 hover:cursor-pointer'>{item.name}</p>
              </Link>
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
