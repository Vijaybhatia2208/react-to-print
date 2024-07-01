// App.jss

import './App.css'; 
import React, { useRef } from 'react';
import { FaPhoneAlt, FaLinkedin  } from "react-icons/fa"; // PHONE ICON IMPORTED
import { IoLocationOutline } from "react-icons/io5"; // LOCATION ICON IMPORTED
import { MdOutlineEmail } from "react-icons/md"; // ICONS IMPORTED
import { useReactToPrint } from 'react-to-print'; // IMPORT STATEMENT FROM REACT-TO-PRINT

function App() {

  const contentToPrint = useRef(null);
  // FUNCTION FOR GENERATE PDF
  const generatePDF = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  // HERE HAVE ADDED DUMMY DATA, READERS CAN ADD DATA FOR THEMSELVES FOR TESTING PURPOSES. 
  const aboutme = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum";
  const natureOfWork = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt   explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunturmagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas  nulla pariatur?"
  const skills = ['Javascript -Advance', 'Typescript- Advance', 'Python- Advance', 'NodeJs- Advance',
    'ReactJS- Advance', 'NextJS- Advance', 'React Native- Advance', 'AWS- Intermediate', 'Django- Intermediate'];

  // RENDERING
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}> 
        <button 
          onClick={() => generatePDF(null, () => contentToPrint.current)}
        >Print</button> 
      </div>

      <div  className="app"  >
        <div className="template" ref={contentToPrint} >

          {/* Section 1 */}
          <div className='part1' style={{}}>
            <img  src='img.png' alt="profiles" />  {/* PROFILE IMPAGE */ }
          </div>

          {/* Section 2 */}
          <div className='part2'>
            <h1 className="user"> Little Giant </h1> {/* USER NAME */ }

            {/* Phone Number | Email | Linkedin */}
            <div className='details'>
              <div style={{ display: 'flex', gap: '10px'}}>
                <FaPhoneAlt /> 
                <span>1111111111</span> 
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <MdOutlineEmail />
                <span>test@test</span>
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <FaLinkedin />
                <span>
                  <a href='https://www.linkedin.com/in/vijay-bhatia-031950216/' >Vijay</a>
                </span>
              </div>
            </div>
            <div className='location'>
              <IoLocationOutline />
              <span> New Delhi , India</span>
            </div>

            {/* About Me */}
            <h3 style={{ margin: '0'}}> About Me </h3>
            <hr style={{ fontWeight: 'bold', margin: '0', marginBottom: '10px' }}/>
            <div  className='content'>
              {aboutme}
            </div>

            {/* Nature of Work */}
            <h3 style={{ margin: '0'}}> Nature of work </h3>
            <hr style={{ fontWeight: 'bold', margin: '0', marginBottom: '10px' }}/>
            <div className='content'>
              {natureOfWork}
            </div>

            {/* Skills  */}
            <h3 style={{ margin: '0'}}> Nature of work </h3>
            <hr style={{ fontWeight: 'bold', margin: '0', marginBottom: '10px' }}/>
            <ul className='content'>
              { skills.map((val, i) => { 
                return (<li key={i} style={{lineHeight: '1.5rem'}}>{val}</li>);
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
