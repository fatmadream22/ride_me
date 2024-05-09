import React from 'react';
import { Link } from 'react-router-dom';

function AdminAccount() {
    // Define static rides data
    const rides = [
        {
            id: '1',
            driverName: '   Ahmed Ali',
            passengerName: 'Mohammed El-Shazly',
            pickupLocation: '123 Main St',
            dropoffLocation: '456 Elm St',
            fare: 15.75,
            feedback: 'Great ride!',
            rating: 4.5
        },
        {
            id: '2',
            driverName: 'Ramy Saad',
            passengerName: 'Kareem Mohammed',
            pickupLocation: '789 Oak St',
            dropoffLocation: '321 Pine St',
            fare: 10.50,
            feedback: 'Good service.',
            rating: 4.0
        },
        {
            id: '3',
            driverName: 'Peter john',
            passengerName: 'Sarah Ahmed',
            pickupLocation: '555 Maple Ave',
            dropoffLocation: '888 Birch Ave',
            fare: 20.00,
            feedback: 'Average experience.',
            rating: 3.5
        }
    ];

    return (
        <div style={styles.container}>
            <h2>Admin Account</h2>

            {/* Rides data */}
            <div style={styles.rides}>
                {rides.map((ride) => (
                    <div key={ride.id} style={styles.ride}>
                        <p><strong>Ride ID:</strong> {ride.id}</p>
                        <p><strong>Driver:</strong> {ride.driverName}</p>
                        <p><strong>Passenger:</strong> {ride.passengerName}</p>
                        <p><strong>Pickup:</strong> {ride.pickupLocation}</p>
                        <p><strong>Drop-off:</strong> {ride.dropoffLocation}</p>
                        <p><strong>Fare:</strong> ${ride.fare.toFixed(2)}</p>
                        <p><strong>Feedback:</strong> {ride.feedback || 'No feedback'}</p>
                        <p><strong>Rating:</strong> {ride.rating || 'No rating'}</p>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <p>View Low Rating Drivers</p>
                <Link to="/AdminManagement" style={{ color: '#007bff', textDecoration: 'none' }}>View</Link>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <p>Accounts Management</p>
                <Link to="/AdminAlerts" style={{ color: '#007bff', textDecoration: 'none' }}>View</Link>
            </div>
        </div>
    );
}

// CSS styles for the AdminAccount component
const styles = {
    container: {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    rides: {
        marginBottom: '15px',
    },
    ride: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default AdminAccount;



/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function AdminAccount() {
    // Define state for rides data and error handling
    const [rides, setRides] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch ride data from the backend
    useEffect(() => {
        const fetchRides = async () => {
            try {
                // Replace the URL below with your backend server URL for fetching ride data
                const response = await fetch('');
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch rides');
                }

                const data = await response.json();
                
                // Update the rides state with the fetched data
                setRides(data.rides);
            } catch (error) {
                console.error('Failed to fetch rides:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRides();
    }, []);

    return (
        <div style={styles.container}>
            <h2>Admin Account</h2>

            {/* Error message 
            {error && <p style={styles.error}>{error}</p>}

            {/* Rides data *
            <div style={styles.rides}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    rides.map((ride) => (
                        <div key={ride.id} style={styles.ride}>
                            <p><strong>Ride ID:</strong> {ride.id}</p>
                            <p><strong>Driver:</strong> {ride.driverName}</p>
                            <p><strong>Passenger:</strong> {ride.passengerName}</p>
                            <p><strong>Pickup:</strong> {ride.pickupLocation}</p>
                            <p><strong>Drop-off:</strong> {ride.dropoffLocation}</p>
                            <p><strong>Fare:</strong> ${ride.fare.toFixed(2)}</p>
                            <p><strong>Feedback:</strong> {ride.feedback || 'No feedback'}</p>
                            <p><strong>Rating:</strong> {ride.rating || 'No rating'}</p>
                        </div>
                    ))
                )}
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>View Low Rating Drivers</p>
          <Link to="/AdminManagement" style={{ color: '#007bff', textDecoration: 'none' }}>View</Link>
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Accounts Management</p>
          <Link to="/AdminAlerts" style={{ color: '#007bff', textDecoration: 'none' }}>View</Link>
        </div>
        </div>
        
    );
}

// CSS styles for the AdminAccount component
const styles = {
    container: {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    rides: {
        marginBottom: '15px',
    },
    ride: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default AdminAccount;*/
