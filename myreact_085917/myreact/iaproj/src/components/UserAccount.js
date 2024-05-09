import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests

function UserAccount() {
    // Define state for the user's profile information
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        profilePicture: '' // You can start with an empty string as a default
    });

    // Define state to control the edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Fetch user profile data from the API when the component mounts
    useEffect(() => {
        fetchUserProfile();
    }, []);

    // Fetch user profile data from the .NET backend
    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('');
            setProfileData(response.data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    // Handle input change when editing the profile
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

    // Handle profile update
    const handleProfileUpdate = async () => {
        try {
            const response = await axios.put('', profileData);
            console.log('Profile updated successfully:', response.data);

            // Refresh the user profile data from the API after updating
            fetchUserProfile();
            
            // Exit edit mode after updating
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>My Account</h2>
            <div style={styles.profilePictureContainer}>
                <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    style={styles.profilePicture}
                />
            </div>

            {/* Display name and email */}
            {isEditing ? (
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                    />

                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
            ) : (
                <div>
                    <p style={styles.name}>{profileData.name}</p>
                    <p style={styles.email}>{profileData.email}</p>
                </div>
            )}

            {/* Edit and save buttons */}
            {isEditing ? (
                <div style={styles.buttonContainer}>
                    <button style={styles.button} onClick={handleProfileUpdate}>
                        Save
                    </button>
                    <button
                        style={styles.cancelButton}
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <button style={styles.button} onClick={() => setIsEditing(true)}>
                    Edit Profile
                </button>
            )}
        </div>
    );
}

// CSS styles for the UserProfile component
const styles = {
    container: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    profilePictureContainer: {
        textAlign: 'center',
        marginBottom: '15px',
    },
    profilePicture: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    name: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    email: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    cancelButton: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#6c757d',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default UserAccount;




/*import React, { useState } from 'react';
import userImage from "../assets/images/users/userImage.jpg";

function UserAccount() {
    // Define state for the user's profile information
    const [profileData, setProfileData] = useState({
        name: 'Ali Ahmed',
        email: 'ali@gmail.com',
        profilePicture: userImage // Pass the imported userImage directly
    });

    // Define state to control the edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle input change when editing the profile
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

    // Handle profile update
    const handleProfileUpdate = () => {
        // Here you would typically send the updated profile data to a server for saving
        // For now, just print the updated data to the console
        console.log('Updated Profile Data:', profileData);
        
        // Exit edit mode after updating
        setIsEditing(false);
    };

    return (
        <div style={styles.container}>
            <h2>My Account</h2>
            <div style={styles.profilePictureContainer}>
                <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    style={styles.profilePicture}
                />
            </div>

            {/* Display name and email *
            {isEditing ? (
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                    />

                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
            ) : (
                <div>
                    <p style={styles.name}>{profileData.name}</p>
                    <p style={styles.email}>{profileData.email}</p>
                </div>
            )}

            {/* Edit and save buttons *
            {isEditing ? (
                <div style={styles.buttonContainer}>
                    <button style={styles.button} onClick={handleProfileUpdate}>
                        Save
                    </button>
                    <button
                        style={styles.cancelButton}
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <button style={styles.button} onClick={() => setIsEditing(true)}>
                    Edit Profile
                </button>
            )}
        </div>
    );
}

// CSS styles for the UserProfile component
const styles = {
    container: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    profilePictureContainer: {
        textAlign: 'center',
        marginBottom: '15px',
    },
    profilePicture: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    name: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    email: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    cancelButton: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#6c757d',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default UserAccount;*/


