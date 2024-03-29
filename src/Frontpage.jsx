import React, { useState } from "react";
import axios from 'axios';
import './Frontpage.css'; 
import { useNavigate } from "react-router-dom";
import { useUserContext } from './UserContext';

function Frontpage() {
    const navigate = useNavigate(); 
    const { updateUser } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password, role })
        .then(res => {
            console.log(res);
            if(res.data.success) {
                const userData = res.data.data;
                console.log(userData[0])
                updateUser(userData[0]); // Update user data in context
                if (role === 'principal') {
                    navigate('/phome', { state: { email } });
                } else if (role === 'faculty') {
                    navigate('/fhome', { state: { email} });
                } else {
                    navigate('/hhome', { state: { email} });
                }
            } else {
                console.log("Invalid credentials");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 col-sm-8'>
                    <div className='login-container'>
                        <div className='login-box'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="email"><strong>Email</strong></label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        className='form-control'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password"><strong>Password</strong></label>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className='form-control'
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="role"><strong>User Role</strong></label>
                                    <select
                                        className='form-control'
                                        onChange={e => setRole(e.target.value)}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="faculty">Faculty</option>
                                        <option value="hod">HOD</option>
                                        <option value="principal">Principal</option>
                                    </select>
                                </div>
                                <button type='submit' className='btn btn-success w-100'><strong>Log in</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Frontpage;
