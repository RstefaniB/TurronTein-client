import React, { useState } from "react";
// import SignUpInfo from "../SignUp/SignUp";
// import PersonalInfo from "../PersonalInfo.jsx/PersonalInfo";
// import OtherInfo from "../OtherInfo.jsx/OtherInfo";
import SignUp from "../SignUp/SignUp";
import Q1 from "../../pages/Q1"
import Q2 from "../../pages/Q2"
import Q3 from "../../pages/Q3";
import Q4 from "../../pages/Q4"
import GetToKnowMe from "../../pages/CreateSurvey";

// var emoji = require('node-emoji')


// Component that stores most of the information 
const Form = () => {


  const title = [
    'Hey! Lets get to know each other a bit more :)',
    'Fancy to try something new in the market of goods such as protein-based Turrones ?',
    'Would you like the idea of adding protein-based Turrones to your eating habbits?',
    'Which flavours do you like?',
    'How about brittleness of the bar',
    'How many protein bars do you usually eat a week?',
    'Does your food diet consist of any of the following protein meals listed below?']

  const message = ['Upon completion of this survey, a sample box with our Signature Brand will be delivered to the specified address free of charge']

  const [page, setPage] = useState(0);
  const [newSurvey, setNewSurvey] = useState({});

  const displaysPage = () => {
    // return <div>Estoy Aqui</div>
    switch (page) {
      case 0:
        return (<GetToKnowMe newSurvey={newSurvey} setNewSurvey={setNewSurvey} />);

      case 1:
        return <Q1 />

      case 2:
        return <Q2 />

      case 3:
        return <Q3 />

      case 4:
        return <Q4 />

      default:
        console.log('out')
    }
  };

  // const deliverMessage = () => {
  //   return message
  // }

  return (
    <>
      <div className="form">
        <h1>{title[page]}</h1>
      </div>
      <div className="progressbar">

      </div>
      <div className="form-container">
        <div className="header">

        </div>
        <div className="body">{displaysPage()}

          <div className="footer" >

          </div>

          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}


          >Previous</button>

          <button
            disabled={page === title.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}

          >Next</button>

        </div>

      </div>
    </>
  )
}


export default Form;







































// function Form() {
//   const [page, setPage] = useState(0);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: "",
//     username: "",
//     nationality: "",
//     other: "",
//   });

//   const FormTitles = ["Sign Up", "Personal Info", "Other"];

//   const PageDisplay = () => {
//     if (page === 0) {
//       return <SignUpInfo formData={formData} setFormData={setFormData} />;
//     } else if (page === 1) {
//       return <PersonalInfo formData={formData} setFormData={setFormData} />;
//     } else {
//       return <OtherInfo formData={formData} setFormData={setFormData} />;
//     }
//   };

//   return (
//     <div className="form">
//       <div className="progressbar">
//         <div
//           style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
//         ></div>
//       </div>
//       <div className="form-container">
//         <div className="header">
//           <h1>{FormTitles[page]}</h1>
//         </div>
//         <div className="body">{PageDisplay()}</div>
//         <div className="footer">
//           <button
//             disabled={page == 0}
//             onClick={() => {
//               setPage((currPage) => currPage - 1);
//             }}
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => {
//               if (page === FormTitles.length - 1) {
//                 alert("FORM SUBMITTED");
//                 console.log(formData);
//               } else {
//                 setPage((currPage) => currPage + 1);
//               }
//             }}
//           >
//             {page === FormTitles.length - 1 ? "Submit" : "Next"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
