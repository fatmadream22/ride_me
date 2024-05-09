import React from 'react';

function RidesHistory() {
    // Define static rides history data
    const ridesHistory = [
        {
            date: '2024-05-01',
            location: '123 Main St to 456 Elm St',
            cost: 15.75,
            driver: 'John Doe'
        },
        {
            date: '2024-05-02',
            location: '789 Oak St to 321 Pine St',
            cost: 10.50,
            driver: 'Alice Johnson'
        },
        {
            date: '2024-05-03',
            location: '555 Maple Ave to 888 Birch Ave',
            cost: 20.00,
            driver: 'Peter Green'
        }
        // Add more ride history objects as needed
    ];

    // Render component
    return (
        <div style={styles.container}>
            <h2>Rides History</h2>

            {/* Display rides history */}
            {ridesHistory.length > 0 ? (
                <ul style={styles.ridesList}>
                    {ridesHistory.map((ride, index) => (
                        <li key={index} style={styles.rideItem}>
                            <div style={styles.rideDetails}>
                                <div><strong>Ride Date:</strong> {ride.date}</div>
                                <div><strong>Location:</strong> {ride.location}</div>
                                <div><strong>Cost:</strong> ${ride.cost.toFixed(2)}</div>
                                <div><strong>Driver:</strong> {ride.driver}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rides history available.</p>
            )}
        </div>
    );
}

// CSS styles for the RidesHistory component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    ridesList: {
        listStyle: 'none',
        padding: '0',
    },
    rideItem: {
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    rideDetails: {
        fontSize: '14px',
    },
};

export default RidesHistory;



/*import React, { useState, useEffect } from 'react';

function RidesHistory() {
    // Define state for the rides history
    const [ridesHistory, setRidesHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch rides history data from the server
    useEffect(() => {
        fetchRidesHistory();
    }, []);

    // Function to fetch rides history data from the server
    const fetchRidesHistory = async () => {
        try {
            // Replace the URL below with the actual endpoint where your ride history data can be fetched
            const response = await fetch('https://api.example.com/rides/history');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Set the rides history data in the state
            setRidesHistory(data);
            setLoading(false);
        } catch (error) {
            // Handle fetch error
            console.error('Failed to fetch rides history:', error);
            setError(error);
            setLoading(false);
        }
    };

    // Render component
    return (
        <div style={styles.container}>
            <h2>Rides History</h2>

            {loading && <p>Loading rides history...</p>}
            {error && <p>Error fetching rides history: {error.message}</p>}

            {/* Display rides history *
            {ridesHistory.length > 0 ? (
                <ul style={styles.ridesList}>
                    {ridesHistory.map((ride, index) => (
                        <li key={index} style={styles.rideItem}>
                            <div style={styles.rideDetails}>
                                <div><strong>Ride Date:</strong> {ride.date}</div>
                                <div><strong>Location:</strong> {ride.location}</div>
                                <div><strong>Cost:</strong> ${ride.cost.toFixed(2)}</div>
                                <div><strong>Driver:</strong> {ride.driver}</div>
                                {/* Add more details as needed *
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rides history available.</p>
            )}
        </div>
    );
}

// CSS styles for the RidesHistory component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
    },
    ridesList: {
        listStyle: 'none',
        padding: '0'
    },
    rideItem: {
        padding: '10px',
        borderBottom: '1px solid #ccc'
    },
    rideDetails: {
        fontSize: '14px'
    }
};

export default RidesHistory;*/
