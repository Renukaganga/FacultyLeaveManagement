import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Hoddashboard from './Hoddashboard';
import '../Rejected.css';

function Hodreq() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get('http://localhost:8081/hpending')
            .then(response => {
                // Update the state with the fetched data
                setRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once after initial render

    const [processedRequests, setProcessedRequests] = useState([]);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const handleAccept = (id) => {
        // Update status to 'Accepted' using Axios
        updateStatus(id, 'approved', formattedDate);
    };

    const handleReject = (id) => {
        // Update status to 'Rejected' using Axios
        updateStatus(id, 'rejected', formattedDate);
    };

    const updateStatus = (id, status, formattedDate) => {
        axios.post(`http://localhost:8081/updateLeave`, { id, status, formattedDate })
            .then(response => {
                if (response.status === 200) {
                  
                    setRequests(requests.map(request => {
                        if (request.id === id) {
                            return { ...request, status };
                        }
                        return request;
                    }));
             
                    setProcessedRequests([...processedRequests, id]);
                } else {
                    throw new Error('Failed to update status');
                }
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };

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
                            <p className="status-text">Status: <span className="rejected">{request.status}</span></p>
                            <p><strong>Rejected date:{formattedDate}</strong></p>
                            <div className="button-container">
                                {!processedRequests.includes(request.id) && (
                                    <>
                                        <button onClick={() => handleAccept(request.id)}>Accept</button>
                                        <button onClick={() => handleReject(request.id)}>Reject</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hodreq;
