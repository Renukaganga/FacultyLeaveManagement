import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../UserContext'; 
// import '../Dashboard.css'
import './Hodcreatereq.css'
import Hoddashboard from './Hoddashboard';
const Hodcreatereq = () => {
    const { userData } = useUserContext(); 
    const [leaveRequest, setLeaveRequest] = useState({
        id: '',
        name: '',
        role: '',
        fromDate: '',
        toDate: '',
        reason: '',
        workAdjustment: '',
        status: 'pending'
    });

    useEffect(() => {
       
        setLeaveRequest(prevState => ({
            ...prevState,
            id: userData.id || '',
            name: userData.name || '',
            role: userData.role || ''
        }));
    }, [userData]); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeaveRequest(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
     
        axios.post('/insert', leaveRequest) 
            .then(response => {
                console.log('Leave request submitted successfully:', response.data);
               
            })
            .catch(error => {
                console.error('Error submitting leave request:', error);
            });
    };

    return (
        <div className="container">
            <div className="dashboard-container">
               <Hoddashboard />
            </div>
            <div className="cards-container">
                <h1>Leave Request Form</h1><br></br>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fromDate">From Date:</label>
                        <input type="date" id="fromDate" name="fromDate" value={leaveRequest.fromDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="toDate">To Date:</label>
                        <input type="date" id="toDate" name="toDate" value={leaveRequest.toDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="reason">Reason:</label>
                        <input type="text" id="reason" name="reason" value={leaveRequest.reason} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="workAdjustment">Work Adjustment:</label>
                        <input type="text" id="workAdjustment" name="workAdjustment" value={leaveRequest.workAdjustment} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Hodcreatereq;
