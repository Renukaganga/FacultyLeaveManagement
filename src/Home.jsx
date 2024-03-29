import React, { useState } from 'react';
import './Home.css'; // Import CSS file

function Home() {
  const initialProfileData = {
    id:'234',
    name: 'John Doe',
    designation: 'Principal',
    photo: 'https://patch.com/img/cdn/users/127225/2011/06/raw/e628d0c6857a66e2fed1bc2c6dc11437.jpg?width=640', // URL to the photo
    joinDate: 'January 1, 2022',
    address: '123 Main St, City, Country',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com'
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-info">
        <img src={profileData.photo} alt="Profile" />
        <div>
          <p><strong>Name:</strong> {isEditing ? <input type="text" name="name" value={profileData.name} onChange={handleChange} /> : profileData.name}</p>
          <p><strong>Designation:</strong> {isEditing ? <input type="text" name="designation" value={profileData.designation} onChange={handleChange} /> : profileData.designation}</p>
          <p><strong>Join Date:</strong> {profileData.joinDate}</p>
          <p><strong>Address:</strong> {isEditing ? <input type="text" name="address" value={profileData.address} onChange={handleChange} /> : profileData.address}</p>
          <p><strong>Phone Number:</strong> {isEditing ? <input type="text" name="phoneNumber" value={profileData.phoneNumber} onChange={handleChange} /> : profileData.phoneNumber}</p>
          <p><strong>Email:</strong> {isEditing ? <input type="text" name="email" value={profileData.email} onChange={handleChange} /> : profileData.email}</p>
          {isEditing ? <button onClick={handleSave}>Save</button> : <button onClick={handleEdit}>Edit</button>}
        </div>
      </div>
    </div>
  );
}

export default Home;
