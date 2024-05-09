import React, { useState } from 'react';

function AdminManagement() {
    // Define static drivers' data
    const initialDrivers = [
        {
            id: '1',
            name: 'John Doe',
            rating: 1.5,
        },
        {
            id: '2',
            name: 'Alice Johnson',
            rating: 2.1,
        },
        {
            id: '3',
            name: 'Peter Green',
            rating: 2.3,
        },
        {
            id: '4',
            name: 'Michael Brown',
            rating: 1.8,
        },
    ];

    // Define state for drivers' data and rating threshold
    const [drivers, setDrivers] = useState(initialDrivers);
    const [ratingThreshold, setRatingThreshold] = useState(2); // Threshold for low-rated drivers

    // Handle blocking a driver
    const handleBlockDriver = (driverId) => {
        console.log(`Driver with ID ${driverId} has been blocked.`);
        // Update drivers state after blocking a driver
        setDrivers((prevDrivers) => prevDrivers.filter((driver) => driver.id !== driverId));
    };

    // Filter low-rated drivers
    const lowRatedDrivers = drivers.filter((driver) => driver.rating < ratingThreshold);

    return (
        <div style={styles.container}>
            <h2>Admin Management</h2>

            {/* Low-rated drivers */}
            <div style={styles.lowRatedDrivers}>
                {lowRatedDrivers.length > 0 ? (
                    lowRatedDrivers.map((driver) => (
                        <div key={driver.id} style={styles.driver}>
                            <p><strong>Name:</strong> {driver.name}</p>
                            <p><strong>Rating:</strong> {driver.rating}</p>
                            <button
                                style={styles.blockButton}
                                onClick={() => handleBlockDriver(driver.id)}
                            >
                                Block Driver
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No drivers with low ratings.</p>
                )}
            </div>
        </div>
    );
}

// CSS styles for the AdminManagement component
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
    lowRatedDrivers: {
        marginBottom: '15px',
    },
    driver: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    blockButton: {
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default AdminManagement;



/*import React, { useState, useEffect } from 'react';

function AdminManagement() {
    // Define state for drivers' data, threshold, and error handling
    const [drivers, setDrivers] = useState([]);
    const [ratingThreshold, setRatingThreshold] = useState(2); // Example threshold for low-rated drivers
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch drivers' data from the backend
    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                // Replace the URL below with your backend server URL for fetching drivers' data
                const response = await fetch('');
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch drivers');
                }

                const data = await response.json();
                
                // Update the drivers state with the fetched data
                setDrivers(data.drivers);
            } catch (error) {
                console.error('Failed to fetch drivers:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDrivers();
    }, []);

    // Handle blocking a driver
    const handleBlockDriver = async (driverId) => {
        try {
            // Replace the URL below with your backend server URL for blocking a driver
            const response = await fetch(`https://api.example.com/admin/drivers/${driverId}/block`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to block driver');
            }

            // Update drivers state after blocking a driver
            setDrivers((prevDrivers) => prevDrivers.filter((driver) => driver.id !== driverId));
        } catch (error) {
            console.error('Failed to block driver:', error);
            setError(error.message);
        }
    };

    // Filter low-rated drivers
    const lowRatedDrivers = drivers.filter((driver) => driver.rating < ratingThreshold);

    return (
        <div style={styles.container}>
            <h2>Admin Management</h2>

            {/* Error message *
            {error && <p style={styles.error}>{error}</p>}

            {/* Low-rated drivers *
            <div style={styles.lowRatedDrivers}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    lowRatedDrivers.length > 0 ? (
                        lowRatedDrivers.map((driver) => (
                            <div key={driver.id} style={styles.driver}>
                                <p><strong>Name:</strong> {driver.name}</p>
                                <p><strong>Rating:</strong> {driver.rating}</p>
                                <button
                                    style={styles.blockButton}
                                    onClick={() => handleBlockDriver(driver.id)}
                                >
                                    Block Driver
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No drivers with low ratings.</p>
                    )
                )}
            </div>
        </div>
    );
}

// CSS styles for the AdminManagement component
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
    lowRatedDrivers: {
        marginBottom: '15px',
    },
    driver: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
    blockButton: {
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

export default AdminManagement;*/
