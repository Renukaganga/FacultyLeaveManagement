import React, { useState } from 'react';
import './Request.css';
import Dashboard from './Dashboard';

const leaveRequestsData = [
    {
        id: 1,
        facultyName: 'abc',
        reason: 'Family emergency',
        fromDate: '2024-03-15',
        toDate: '2024-03-17',
        workAdjustment: 'Assigned to substitute teacher'
    },
    {
        id: 2,
        facultyName: 'xyz',
        reason: 'Medical appointment',
        fromDate: '2024-03-18',
        toDate: '2024-03-18',
        workAdjustment: 'Postponed class'
    },
    {
        id: 3,
        facultyName: 'dbf',
        reason: 'Medical appointment',
        fromDate: '2024-03-18',
        toDate: '2024-03-18',
        workAdjustment: 'Postponed class'
    },
    {
        id: 4,
        facultyName: 'tyr',
        reason: 'Medical appointment',
        fromDate: '2024-03-18',
        toDate: '2024-03-18',
        workAdjustment: 'Postponed class'
    },
    // Add more leave request data as needed
];

function Requested() {
    const [requests, setRequests] = useState(leaveRequestsData);

    const handleAccept = (id) => {
        setRequests(prevRequests => prevRequests.map(request =>
            request.id === id ? { ...request, status: 'Accepted' } : request
        ));
    };

    const handleReject = (id) => {
        setRequests(prevRequests => prevRequests.map(request =>
            request.id === id ? { ...request, status: 'Rejected' } : request
        ));
    };

    return (
        <div className="container">
            <div className="dashboard-container">
                <Dashboard />
            </div>
            <div className="requested-leaves-container">
                <h2>Requested Leaves</h2>
                {requests.map(request => (
                    <div key={request.id} className="requested-card">
                        <table>
                            <thead>
                                <tr>
                                    <th>Faculty Name</th>
                                    <th>Reason for Leave</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Work Adjustment</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{request.facultyName}</td>
                                    <td>{request.reason}</td>
                                    <td>{request.fromDate}</td>
                                    <td>{request.toDate}</td>
                                    <td>{request.workAdjustment}</td>
                                    <td className="status">{request.status || 'Pending'}</td>
                                    <td className="actions">
                                        {request.status ? (
                                            <span style={{ color: request.status === 'Accepted' ? 'green' : 'red' }}>
                                                {request.status}
                                            </span>
                                        ) : (
                                            <>
                                                <button onClick={() => handleAccept(request.id)}>Accept</button>
                                                <button onClick={() => handleReject(request.id)}>Reject</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Requested;
