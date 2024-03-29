import React, { useState, useEffect } from 'react';
import Hoddashboard from './Hoddashboard';
import '../Rejected.css'

function Rejected() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://localhost:8081/hreject')
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched data
                setRequests(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once after initial render

    return (
        <div className="container">
            <div className="dashboard-container">
                <Hoddashboard />
            </div>
            <div className="rejected-leaves-container">
                <h2>Rejected Leave Requests</h2>
                <div className="cards-container">
                    {requests.map(request => (
                        <div key={request.id} className="leave-card">
                            <h3>{request.name}</h3>
                            <p><strong>Id no:{request.id}</strong></p>
                            <p><strong>Reason:</strong> {request.reason}</p>
                            <p><strong>From Date:</strong> {request.fromd}</p>
                            <p><strong>To Date:</strong> {request.tod}</p>
                            <p><strong>Work Adjustment:</strong> {request.workadjustment}</p>
                            <p className="status-text">Status: <span className="rejected">{request.status}d</span></p>
                            <p><strong>Rejected date:{request.acceptdate}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rejected;
