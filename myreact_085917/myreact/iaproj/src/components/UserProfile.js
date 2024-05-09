import React, { useState } from 'react';
import userImage from "../assets/images/users/userImage.jpg";

function UserProfile() {
    // Define state for the user's profile information
    const [profileData] = useState({
        name: 'Omar Farid',
        email: 'omar.farid@gmail.com',
        profilePicture: userImage,
        phoneNumber: '01155462255',
        carNumber:'Car Number:2334',
        carType:'Car Type:BMW',
        rating: 4 // User's rating (4 out of 5 stars)
    });
    

    // Define state for user feedback and rating
    const [feedback, setFeedback] = useState({
        rating: 0,
        comment: ''
    });

    // Handle input change for feedback form
    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback({
            ...feedback,
            [name]: value
        });
    };

    // Handle feedback submission
    const handleFeedbackSubmit = () => {
        // Here you would typically send the feedback data to a server for saving
        // For now, just print the feedback data to the console
        console.log('User Feedback:', feedback);
        // Clear feedback fields after submission
        setFeedback({
            rating: 0,
            comment: ''
        });
    };

    // Function to render stars feedback
    const renderStars = () => {
        const totalStars = 5;
        const filledStars = profileData.rating;
        
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= filledStars) {
                // Render filled star
                stars.push(
                    <span key={i} style={styles.filledStar}>★</span>
                );
            } else {
                // Render empty star
                stars.push(
                    <span key={i} style={styles.emptyStar}>☆</span>
                );
            }
        }
        return stars;
    };

    return (
        <div style={styles.container}>
            <h2>Driver Profile</h2>
            <div style={styles.profilePictureContainer}>
                <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    style={styles.profilePicture}
                />
            </div>

            {/* Display name, email, and phone number */}
            <div>
                <p style={styles.name}>{profileData.name}</p>
                <p style={styles.email}>{profileData.email}</p>
                <p style={styles.phoneNumber}>{profileData.phoneNumber}</p>
                <p style={styles.carNumber}>{profileData.carNumber}</p>
                <p style={styles.carType}>{profileData.carType}</p>

            </div>

            {/* Display current stars feedback */}
            <div style={styles.starsContainer}>
                {renderStars()}
            </div>

            {/* Feedback form */}
            <div style={styles.formGroup}>
                <label htmlFor="rating" style={styles.label}>Rate this driver:</label>
                <select
                    id="rating"
                    name="rating"
                    value={feedback.rating}
                    onChange={handleFeedbackChange}
                    style={styles.select}
                >
                    <option value="0">Select rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>

                <label htmlFor="comment" style={styles.label}>Leave a comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={feedback.comment}
                    onChange={handleFeedbackChange}
                    style={styles.textarea}
                />
            </div>

            {/* Submit feedback button */}
            <button
                style={styles.submitButton}
                onClick={handleFeedbackSubmit}
            >
                Submit Feedback
            </button>
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
    name: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    email: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    phoneNumber: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    carNumber: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    carType: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    starsContainer: {
        fontSize: '24px',
        color: '#FFD700',
        marginBottom: '10px',
        textAlign: 'center',
    },
    filledStar: {
        marginRight: '2px',
    },
    emptyStar: {
        marginRight: '2px',
    },
    select: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '10px',
    },
    textarea: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        minHeight: '80px',
        resize: 'vertical',
    },
    submitButton: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    
};

export default UserProfile;



/*import React, { useState, useEffect } from 'react';
import userImage from "../assets/images/users/userImage.jpg";

function UserProfile() {
    // Define state for the user's profile information
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        profilePicture: userImage,
        phoneNumber: '',
        carNumber: '',
        carType: '',
        rating: 0
    });

    // Define state for user feedback and rating
    const [feedback, setFeedback] = useState({
        rating: 0,
        comment: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user profile data from the backend
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Replace the URL below with the actual endpoint for fetching user data
                const response = await fetch('https://api.example.com/user/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Handle input change for feedback form
    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback({
            ...feedback,
            [name]: value
        });
    };
    // Function to render stars feedback
    const renderStars = () => {
        const totalStars = 5;
        const filledStars = profileData.rating;
        
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= filledStars) {
                // Render filled star
                stars.push(
                    <span key={i} style={styles.filledStar}>★</span>
                );
            } else {
                // Render empty star
                stars.push(
                    <span key={i} style={styles.emptyStar}>☆</span>
                );
            }
        }
        return stars;
    };


    // Handle feedback submission
    const handleFeedbackSubmit = async () => {
        try {
            // Replace the URL below with the actual endpoint for submitting feedback
            const response = await fetch('https://api.example.com/user/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedback)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Feedback submitted successfully!');
            // Clear feedback fields after submission
            setFeedback({
                rating: 0,
                comment: ''
            });
        } catch (error) {
            console.error('Failed to submit feedback:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching user data: {error.message}</div>;
    }

    return (
        <div style={styles.container}>
            <h2>Driver Profile</h2>
            <div style={styles.profilePictureContainer}>
                <img
                    src={profileData.profilePicture}
                    alt="Profile"
                    style={styles.profilePicture}
                />
            </div>

            {/* Display name, email, and phone number *
            <div>
                <p style={styles.name}>{profileData.name}</p>
                <p style={styles.email}>{profileData.email}</p>
                <p style={styles.phoneNumber}>{profileData.phoneNumber}</p>
                <p style={styles.carNumber}>{profileData.carNumber}</p>
                <p style={styles.carType}>{profileData.carType}</p>
            </div>

            {/* Display current stars feedback *
            <div style={styles.starsContainer}>
                {renderStars()}
            </div>

            {/* Feedback form *
            <div style={styles.formGroup}>
                <label htmlFor="rating" style={styles.label}>Rate this driver:</label>
                <select
                    id="rating"
                    name="rating"
                    value={feedback.rating}
                    onChange={handleFeedbackChange}
                    style={styles.select}
                >
                    <option value="0">Select rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>

                <label htmlFor="comment" style={styles.label}>Leave a comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={feedback.comment}
                    onChange={handleFeedbackChange}
                    style={styles.textarea}
                />
            </div>

            {/* Submit feedback button *
            <button
                style={styles.submitButton}
                onClick={handleFeedbackSubmit}
            >
                Submit Feedback
            </button>
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
    name: {
        fontSize: '18px',
        marginBottom: '5px',
    },
    email: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    phoneNumber: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    carNumber: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    carType: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    starsContainer: {
        fontSize: '24px',
        color: '#FFD700',
        marginBottom: '10px',
        textAlign: 'center',
    },
    filledStar: {
        marginRight: '2px',
    },
    emptyStar: {
        marginRight: '2px',
    },
    select: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '10px',
    },
    textarea: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        minHeight: '80px',
        resize: 'vertical',
    },
    submitButton: {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default UserProfile;*/










