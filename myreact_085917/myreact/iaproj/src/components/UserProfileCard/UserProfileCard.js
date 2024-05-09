import React from "react";
import './UserProfile.css'
import userImage from "../../assets/images/users/userImage.jpg";
import { Link } from 'react-router-dom';

const UserProfileCard = () => {
    return (
        <div className="upc">
            <div className="gradiant"> </div>
                <div className="profile-down">
                    <img src={userImage} alt=""/>
                    <div className="profile-title">Omar Farid</div>
                    <div className="profile-description">
                      Taxi Driver , From Cairo
                    </div>
                    
                    <div className="profile">
                    <Link to="/UserProfile" style={{  textDecoration: 'none', marginLeft: '50px',color:"white" }}>view</Link>

                    </div>
                </div>


        </div>
    )
}
export default UserProfileCard;

/*import React, { useState, useEffect } from 'react';
import userImage from "../../assets/images/users/userImage.jpg";
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfileCard = () => {
    // State variable to hold user data
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch user data from the backend
    const fetchUserData = async () => {
        try {
            // Replace the URL below with the actual endpoint for fetching user data
            const response = await fetch('https://api.example.com/user/data');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch user data when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching user data: {error.message}</div>;
    }

    return (
        <div className="upc">
            <div className="gradiant"> </div>
            <div className="profile-down">
                <img src={userData?.profilePicture || userImage} alt="User Profile" />
                <div className="profile-title">{userData?.name || 'User Name'}</div>
                <div className="profile-description">
                    {userData?.description || 'User Description'}
                </div>
                <div className="profile">
                    <Link to="/UserProfile" style={{ textDecoration: 'none', marginLeft: '50px', color: 'white' }}>
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;*/
