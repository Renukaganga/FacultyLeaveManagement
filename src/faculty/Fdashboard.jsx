import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.css';

function Fdashboard() {
  return (
    <div className="Dashboard">
      <div className="dashboard">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to='/fhome' className="nav-link"><button className="btn btn-primary">Home</button></NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink to='/fnew' className="nav-link"><button className="btn btn-primary">Create Request</button></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/history' className="nav-link"><button className="btn btn-primary">History</button></NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to='/' className="nav-link"><button className="btn btn-primary">Logout</button></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fdashboard;
