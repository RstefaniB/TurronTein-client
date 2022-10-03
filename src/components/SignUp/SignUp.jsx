import React from "react";

const SignUp = () => {
  const message = ['Upon completion of this survey, a sample box with our Signature Brand will be delivered to the specified address free of charge ;)']

  return (
    <div>
      <div className="singup-container h2">
        <input type='text' placeholder="Firstname..." /><br></br>
        <input type='text' placeholder="Lastname..." /><br></br>
        <input type='text' placeholder="Email..." /><br></br>
        <input type='text' placeholder="Age..." /><br></br>
        <input type='text' placeholder="Sport..." /><br></br>
        <input type='text' placeholder="City..." /><br></br>
      </div>
      <h2>{message}</h2>
    </div>


  )
}

export default SignUp;



























// function SignUpInfo({ formData, setFormData }) {
//   return (
//     <div className="sign-up-container">
//       <input
//         type="text"
//         placeholder="Email..."
//         value={formData.email}
//         onChange={(event) =>
//           setFormData({ ...formData, email: event.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Password..."
//         value={formData.password}
//         onChange={(event) =>
//           setFormData({ ...formData, password: event.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Confirm Password..."
//         value={formData.confirmPassword}
//         onChange={(event) =>
//           setFormData({ ...formData, confirmPassword: event.target.value })
//         }
//       />
//     </div>
//   );
// }