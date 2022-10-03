// import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import LoadingComponent from "./components/Loading";
// import Navbar from "./components/Navbar/Navbar";
// import { getLoggedIn, logout } from "./services/auth";
// import routes from "./config/routes";
// import * as USER_HELPERS from "./utils/userToken";
// import Form from "./components/Survey/Form";

import './App.css';
import { Routes, Route } from "react-router-dom";
// import HomePage from './pages/HomePage';
import Form from './components/Survey/Form';
import NavbarComponent from './components/Navbar/Navbar';
import SignUpPage from './pages/SignupPage';
import GaleryPage from './pages/SurveyGalery';
import IsPrivate from './components/Routes/isPrivate'
import CreatePage from './pages/CreateSurvey';



function App() {
  return (
    <>
      <div className='App'>
        <NavbarComponent />
        <Routes>
          <Route path='/registro' element={<SignUpPage />} />

          {/* <Form /> */}
          <Route path='/home' element={<Form />} />
          <Route path='/galery' element={
            <IsPrivate>
              <GaleryPage />
            </IsPrivate>
          } />
          <Route path='/create' element={<CreatePage />} />
          {/* <Route path='/home' element={<HomePage />} /> */}


        </Routes>
      </div>
    </>
  )

}

export default App;



// const [user, setUser] = useState(null);
// const [isLoading, setIsLoading] = useState(true);

// const [inputFields, setInputFields] = useState([
//   { name: '', age: '' }

// ])
// return (
//   <div className="App">
//     <form>
//       {inputFields.map((input, index) => {
//         return (
//           <div key={index}>
//             <input
//               name='name'
//               placeholder='Name'
//               value={input.name}
//             />
//             <input
//               name='age'
//               placeholder='Age'
//               value={input.age}
//             />
//           </div>
//         )
//       })}
//     </form>
//     <div>
//       <Form />

//     </div>
//   </div>
// );

//   useEffect(() => {
  //     const accessToken = USER_HELPERS.getUserToken();
  //     if (!accessToken) {
    //       return setIsLoading(false);
  //     }
  //     getLoggedIn(accessToken).then((res) => {
  //       if (!res.status) {
  //         return setIsLoading(false);
  //       }
  //       setUser(res.data.user);
  //       setIsLoading(false);
  //     });
  //   }, []);

  //   function handleLogout() {
  //     const accessToken = USER_HELPERS.getUserToken();
  //     if (!accessToken) {
  //       setUser(null);
  //       return setIsLoading(false);
  //     }
  //     setIsLoading(true);
  //     logout(accessToken).then((res) => {
  //       if (!res.status) {
  //         // deal with error here
  //         console.error("Logout was unsuccessful: ", res);
  //       }
  //       USER_HELPERS.removeUserToken();
  //       setIsLoading(false);
  //       return setUser(null);
  //     });
  //   }

  //   function authenticate(user) {
  //     setUser(user);
  //   }

  //   if (isLoading) {
  //     return <LoadingComponent />;
  //   }
  //   return (
  //     <div className="App">
  //       <Navbar handleLogout={handleLogout} user={user} />
  //       <Routes>
  //         {routes({ user, authenticate, handleLogout }).map((route) => (
  //           <Route key={route.path} path={route.path} element={route.element} />
  //         ))}
  //       </Routes>
  //     </div>
  //   );
  // }

