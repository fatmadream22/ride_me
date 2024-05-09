import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Ride = () => {
    // Get the ride ID from the URL params
    const { rideId } = useParams();

    // Hardcoded ride data based on the rideId
    const rideData = {
        id: rideId,
        driverId: '123',
        driverName: 'John Doe',
        carType: 'Sedan',
        startingPoint: '123 Main St',
        destination: '456 Elm St',
        price: 25.50
    };

    return (
        <div style={styles.container}>
            <h2>Ride Details</h2>
            <div style={styles.detailsContainer}>
                {/* Display ride details */}
                <p><strong>Ride ID:</strong> {rideData.id}</p>
                <p><strong>Driver:</strong> <Link to={`/UserProfile/${rideData.driverId}`}>{rideData.driverName}</Link></p>
                <p><strong>Car:</strong> {rideData.carType}</p>
                <p><strong>Starting Point:</strong> {rideData.startingPoint}</p>
                <p><strong>Destination:</strong> {rideData.destination}</p>
                <p><strong>Price:</strong> ${rideData.price.toFixed(2)}</p>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <p>Want to book this ride?</p>
                <Link to="/BookRides" style={{ color: '#007bff', textDecoration: 'none' }}>Book</Link>
            </div>
        </div>
    );
};

// CSS styles for the Ride component
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
    detailsContainer: {
        marginTop: '20px',
    },
};

export default Ride;



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Ride = () => {
    // Define state for ride data
    const [rideData, setRideData] = useState(null);
  
    // Get the ride ID from the URL params
    const { rideId } = useParams();
  
    // Fetch ride data from the server when the component mounts or rideId changes
    useEffect(() => {
        fetchRideData();
    }, [rideId]);
  
    // Fetch ride data from the server
    const fetchRideData = async () => {
        try {
            // Replace the URL with your backend server URL for fetching ride data
            const response = await axios.get(`https://api.example.com/rides/${rideId}`);
            // Update the rideData state with the retrieved data
            setRideData(response.data);
        } catch (error) {
            console.error('Error fetching ride data:', error);
        }
    };

    // If ride data is not yet loaded, display a loading message
    if (!rideData) {
        return <p>Loading ride data...</p>;
    }

    return (
        <div style={styles.container}>
            <h2>Ride Details</h2>
            <div style={styles.detailsContainer}>
                {/* Display ride details *
                <p><strong>Ride ID:</strong> {rideData.id}</p>
                <p><strong>Driver:</strong> <Link to={`/UserProfile/${rideData.driverId}`}>{rideData.driverName}</Link></p> 
                <p><strong>Car:</strong> {rideData.carType}</p>
                <p><strong>Starting Point:</strong> {rideData.startingPoint}</p>
                <p><strong>Destination:</strong> {rideData.destination}</p>
                <p><strong>Price:</strong> ${rideData.price}</p>

            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Want to book this Ride?</p>
          <Link to="/BookRides" style={{ color: '#007bff', textDecoration: 'none' }}>Book</Link>
        </div>
        </div>
    );
};

// CSS styles for the Ride component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    detailsContainer: {
        marginTop: '20px',
    },
};

export default Ride;*/
