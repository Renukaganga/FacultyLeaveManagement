import React, { useState } from 'react';
import { useUserContext } from '../UserContext'; // Import useUserContext hook
import '../Phome.css';
import Fdashboard from './Fdashboard';
import axios from 'axios'

function Fhome() {
    const { userData, updateUser } = useUserContext(); // Access user data from context
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
      axios.post('http://localhost:8081/updateUser', userData)
          .then(res => {
              console.log('User data updated successfully:', res.data);
              setIsEditing(false);
          })
          .catch(err => {
              console.error('Error updating user data:', err);
          });
  };

  

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        updateUser({ ...userData, [name]: value });
    };

  
    console.log('userData:', userData);
    console.log('isEditing:', isEditing);

    return (
        <div className="container">
           <div className="Dashboard-container">
                <Fdashboard />
            </div>
            <div className="userData">
                <h1>Welcome {userData.name}!</h1>
                <p><strong>ID:</strong> {userData.id}</p>
                <p><strong>Name:</strong> {isEditing ? <input type="text" name="name" value={userData.name} onChange={handleChange} /> : userData.name}</p>
                <p><strong>Designation:</strong> {isEditing ? <input type="text" name="designation" value={userData.designation} onChange={handleChange} /> : userData.designation}</p>
                <p><strong>Email:</strong> {isEditing ? <input type="text" name="email" value={userData.email} onChange={handleChange} /> : userData.email}</p>
                <p><strong>Phone Number:</strong> {isEditing ? <input type="text" name="phno" value={userData.phno} onChange={handleChange} /> : userData.phno}</p>
                <p><strong>Address:</strong> {isEditing ? <input type="text" name="address" value={userData.address} onChange={handleChange} /> : userData.address}</p>
                {isEditing ? <button onClick={handleSave}>Save</button> : <button onClick={handleEdit}>Edit</button>}
            </div>
            
        </div>
    );
}

export default Fhome;
