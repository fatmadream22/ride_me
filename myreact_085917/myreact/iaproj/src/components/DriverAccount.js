import React, { useState } from 'react';

function DriverAccount() {
    // Define static ride requests and total income data
    const initialRideRequests = [
        {
            id: '1',
            pickupLocation: '123 Main St',
            dropoffLocation: '456 Elm St',
            fare: 15.75,
        },
        {
            id: '2',
            pickupLocation: '789 Oak St',
            dropoffLocation: '321 Pine St',
            fare: 20.50,
        },
        {
            id: '3',
            pickupLocation: '555 Maple Ave',
            dropoffLocation: '888 Birch Ave',
            fare: 12.00,
        },
    ];

    // Define state for ride requests and total income
    const [rideRequests, setRideRequests] = useState(initialRideRequests);
    const [totalIncome, setTotalIncome] = useState(48.25); // Sum of initial fares
    const [dateFilter, setDateFilter] = useState('day'); // Options: 'day' or 'month'

    // Handle accepting a ride request
    const handleAcceptRide = (requestId) => {
        console.log(`Ride request with ID ${requestId} accepted.`);
        // Update ride requests after accepting
        setRideRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId));
    };

    // Handle declining a ride request
    const handleDeclineRide = (requestId) => {
        console.log(`Ride request with ID ${requestId} declined.`);
        // Update ride requests after declining
        setRideRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId));
    };

    return (
        <div style={styles.container}>
            <h2>Driver Account</h2>

            {/* Date filter */}
            <div style={styles.filter}>
                <label htmlFor="dateFilter" style={styles.label}>Filter by:</label>
                <select
                    id="dateFilter"
                    name="dateFilter"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    style={styles.select}
                >
                    <option value="day">Day</option>
                    <option value="month">Month</option>
                </select>
            </div>

            {/* Total income */}
            <p style={styles.income}>Total Income ({dateFilter}): ${totalIncome.toFixed(2)}</p>

            {/* Ride requests */}
            <div style={styles.rideRequests}>
                {rideRequests.length > 0 ? (
                    rideRequests.map((request) => (
                        <div key={request.id} style={styles.request}>
                            <p><strong>Ride ID:</strong> {request.id}</p>
                            <p><strong>Pickup:</strong> {request.pickupLocation}</p>
                            <p><strong>Drop-off:</strong> {request.dropoffLocation}</p>
                            <p><strong>Fare:</strong> ${request.fare.toFixed(2)}</p>
                            <div style={styles.actions}>
                                <button
                                    style={styles.acceptButton}
                                    onClick={() => handleAcceptRide(request.id)}
                                >
                                    Accept
                                </button>
                                <button
                                    style={styles.declineButton}
                                    onClick={() => handleDeclineRide(request.id)}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No ride requests available.</p>
                )}
            </div>
        </div>
    );
}

// CSS styles for the DriverAccount component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
    },
    filter: {
        marginBottom: '15px',
    },
    label: {
        marginRight: '10px',
        fontWeight: 'bold',
    },
    select: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    income: {
        marginBottom: '15px',
        fontSize: '18px',
    },
    rideRequests: {
        marginBottom: '15px',
    },
    request: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    actions: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    acceptButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
    },
    declineButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default DriverAccount;



/*import React, { useState, useEffect } from 'react';

function DriverAccount() {
    // Define state for ride requests, total income, and error handling
    const [rideRequests, setRideRequests] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [dateFilter, setDateFilter] = useState('day'); // Options: 'day' or 'month'
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch ride requests and total income from the backend
    useEffect(() => {
        const fetchDriverData = async () => {
            try {
                // Replace the URL below with your backend server URL for fetching ride requests
                const response = await fetch(`https://api.example.com/driver/ride-requests?dateFilter=${dateFilter}`);
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch data');
                }

                const data = await response.json();
                
                // Update ride requests and total income
                setRideRequests(data.rideRequests);
                setTotalIncome(data.totalIncome);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDriverData();
    }, [dateFilter]); // Dependency array to re-fetch data when the date filter changes

    // Handle accepting a ride request
    const handleAcceptRide = async (requestId) => {
        try {
            // Replace the URL below with your backend server URL for accepting ride requests
            const response = await fetch(`https://api.example.com/driver/ride-requests/${requestId}/accept`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to accept ride request');
            }

            // Update ride requests after accepting
            setRideRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId));
            // Optional: Trigger a re-fetch of data if necessary
            // fetchDriverData();
        } catch (error) {
            console.error('Failed to accept ride request:', error);
            setError(error.message);
        }
    };

    // Handle declining a ride request
    const handleDeclineRide = async (requestId) => {
        try {
            // Replace the URL below with your backend server URL for declining ride requests
            const response = await fetch(`https://api.example.com/driver/ride-requests/${requestId}/decline`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to decline ride request');
            }

            // Update ride requests after declining
            setRideRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId));
            // Optional: Trigger a re-fetch of data if necessary
            // fetchDriverData();
        } catch (error) {
            console.error('Failed to decline ride request:', error);
            setError(error.message);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Driver Account</h2>

            {/* Error message *
            {error && <p style={styles.error}>{error}</p>}

            {/* Date filter *
            <div style={styles.filter}>
                <label htmlFor="dateFilter" style={styles.label}>Filter by:</label>
                <select
                    id="dateFilter"
                    name="dateFilter"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    style={styles.select}
                >
                    <option value="day">Day</option>
                    <option value="month">Month</option>
                </select>
            </div>

            {/* Total income *
            <p style={styles.income}>Total Income ({dateFilter}): ${totalIncome.toFixed(2)}</p>

            {/* Ride requests *
            <div style={styles.rideRequests}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    rideRequests.map((request) => (
                        <div key={request.id} style={styles.request}>
                            <p><strong>Ride ID:</strong> {request.id}</p>
                            <p><strong>Pickup:</strong> {request.pickupLocation}</p>
                            <p><strong>Drop-off:</strong> {request.dropoffLocation}</p>
                            <p><strong>Fare:</strong> ${request.fare.toFixed(2)}</p>
                            <div style={styles.actions}>
                                <button
                                    style={styles.acceptButton}
                                    onClick={() => handleAcceptRide(request.id)}
                                >
                                    Accept
                                </button>
                                <button
                                    style={styles.declineButton}
                                    onClick={() => handleDeclineRide(request.id)}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

// CSS styles for the DriverAccount component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
    },
    filter: {
        marginBottom: '15px',
    },
    label: {
        marginRight: '10px',
        fontWeight: 'bold',
    },
    select: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    income: {
        marginBottom: '15px',
        fontSize: '18px',
    },
    rideRequests: {
        marginBottom: '15px',
    },
    request: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    actions: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    acceptButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
    },
    declineButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default DriverAccount;*/
