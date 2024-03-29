import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Accepted.css';
import Hoddashboard from './Hoddashboard'; // Import the Hoddashboard component

function Accepted() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8081/accepted'); 
                // Sort the requests array based on the acceptance date in descending order
                const sortedRequests = response.data.sort((a, b) => new Date(b.acceptdate) - new Date(a.acceptdate));
                setRequests(sortedRequests);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []); 

    return (
        <div className="container">
            <div className="Hoddashboard-container">
                <Hoddashboard />
            </div>
            <div className="approved-leaves-container">
                <h2>Approved Leave Requests</h2>
                <div className="cards-container">
                    {requests.map(request => (
                        <div key={request.id} className="leave-card">
                            <h3>Name:{request.name}</h3>
                            <p><strong>Reason:</strong> {request.reason}</p>
                            <p><strong>From Date:</strong> {request.fromd}</p>
                            <p><strong>To Date:</strong> {request.tod}</p>
                            <p><strong>Work Adjustment:</strong>{request.workadjustment} </p>
                            <p><strong>Status:{request.status}d</strong>  </p>
                            <p className="acceptance-date">Accepted on: {request.acceptdate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accepted;
