// import React, { useEffect, useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState(false);

//   useEffect(() => {
//     const uname = localStorage.getItem('uname');
//     if (uname) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('uname'); // Remove the username from localStorage
//     setLogin(false); // Set login state to false
//     navigate('/frontpage'); // Redirect to the login page
//   };

//   return (
//     <div className='navbar-fixed'>
//       <div className='nav'>
//         <NavLink to='/phome'><button className='btn1'>Home</button></NavLink>
//         <NavLink to='/about'><button className='btn2'>About</button></NavLink>
//         <NavLink to='/request'><button className='btn2'>Requested</button></NavLink>
//         <NavLink to='/reject'><button className='btn2'>Rejected</button></NavLink>
//         <NavLink to='/approved'><button className='btn2'>Approved</button></NavLink>
//         {login && <NavLink to='/frontpage'><button className='btn2' onClick={handleLogout}>Logout</button></NavLink>}
//         {login ? (
//           <NavLink to='/phome'><button className='btn3'>Profile</button></NavLink>
//         ) : (
//           <NavLink to='/frontpage'><button className='btn4'>Login</button></NavLink>
//         )}
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout logic here (e.g., clear session, update state)
        setIsLoggedIn(false);
    };

    return (
        <div>
            <div className='nav'>
                {!isLoggedIn && (
                    <>
                        <NavLink to='/home'><button>Home</button></NavLink>
                        <NavLink to='/about'><button>About</button></NavLink>
                        <NavLink to='/frontpage'><button>Sign up / Log in</button></NavLink>
                    </>
                )}
                {isLoggedIn && (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;
