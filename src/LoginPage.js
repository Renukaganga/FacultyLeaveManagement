
// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';

// function LoginPage() {
//     const [regno, setRegno] = useState('');
//     const [phno, setPhno] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/login', {
//                 regno,
//                 phno
//             });
//             console.log(response.data.message); // Login successful
//             // Handle successful login, e.g., redirect to dashboard
//         } catch (error) {
//             console.error(error.response.data.error); // Invalid credentials or server error
//             // Handle error, e.g., display error message to user
//         }
//     };

//     return (
//         <div className="login-page">
//             <div className="login-form">
//                 <h2>Login</h2>
//                 <div className="form-group">
//                     <label htmlFor="regno">Registration Number:</label>
//                     <input
//                         type="text"
//                         id="regno"
//                         value={regno}
//                         onChange={(e) => setRegno(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phno">Phone Number:</label>
//                     <input
//                         type="text" 
//                         id="phno"
//                         value={phno}
//                         onChange={(e) => setPhno(e.target.value)}
//                     />
//                 </div>
//                 <div >
//                     <button  className="btn" onClick={handleLogin}>Login</button>
//                 </div>
//             </div>
//             <div className="image-section">
             
//                 <img src="https://th.bing.com/th/id/R.728e12a855bbcb2dfb7e43f923001fb8?rik=Viig%2f8BE0RKhug&riu=http%3a%2f%2fwww.svespsychologybvrm.in%2fimages%2fvishnulogo.png&ehk=jpLX4CrWmzZbstO3MgsWUNHs7S5nrA%2fmCsm2QghEEJo%3d&risl=&pid=ImgRaw&r=0" alt="Placeholder" />
//             </div>
//         </div>
//     );
// }

// export default LoginPage;
// https://www.targetadmission.com/img/colleges/optimized/600/IMG-1-3456561.jpg