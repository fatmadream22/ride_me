import React from 'react';

function AdminAlerts() {
    // Define static alerts data
    const alerts = [
        {
            id: '1',
            type: 'Account Review',
            details: 'Driver account requires review due to low ratings.',
        },
        {
            id: '2',
            type: 'New Registration',
            details: 'New driver account registration awaiting approval.',
        },
        {
            id: '3',
            type: 'Account Suspension',
            details: 'Passenger account has been reported for inappropriate behavior.',
        },
    ];

    // Handle accepting an account
    const handleAcceptAccount = (alertId) => {
        console.log(`Account with alert ID ${alertId} accepted.`);
        // Update alerts after accepting the account
        // In a real application, you would update the backend and refresh the data.
    };

    // Handle rejecting an account
    const handleRejectAccount = (alertId) => {
        console.log(`Account with alert ID ${alertId} rejected.`);
        // Update alerts after rejecting the account
        // In a real application, you would update the backend and refresh the data.
    };

    return (
        <div style={styles.container}>
            <h2>Admin Alerts</h2>

            {/* Alerts list */}
            <div style={styles.alerts}>
                {alerts.map((alert) => (
                    <div key={alert.id} style={styles.alert}>
                        <p><strong>Type:</strong> {alert.type}</p>
                        <p><strong>Details:</strong> {alert.details}</p>
                        <div style={styles.actions}>
                            <button
                                style={styles.acceptButton}
                                onClick={() => handleAcceptAccount(alert.id)}
                            >
                                Accept
                            </button>
                            <button
                                style={styles.declineButton}
                                onClick={() => handleRejectAccount(alert.id)}
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// CSS styles for the AdminAlerts component
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
    alerts: {
        marginBottom: '15px',
    },
    alert: {
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

export default AdminAlerts;



/*import React, { useState, useEffect } from 'react';

function AdminAlerts() {
    // Define state for alerts and error handling
    const [alerts, setAlerts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch alerts from the backend
    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                // Replace the URL below with your backend server URL for fetching alerts
                const response = await fetch('');
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch alerts');
                }

                const data = await response.json();
                
                // Update the alerts state with the fetched data
                setAlerts(data.alerts);
            } catch (error) {
                console.error('Failed to fetch alerts:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAlerts();
    }, []);

    // Handle accepting an account
    const handleAcceptAccount = async (alertId) => {
        try {
            // Replace the URL below with your backend server URL for accepting accounts
            const response = await fetch(`https://api.example.com/admin/alerts/${alertId}/accept`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to accept account');
            }

            // Update alerts after accepting the account
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== alertId));
        } catch (error) {
            console.error('Failed to accept account:', error);
            setError(error.message);
        }
    };

    // Handle rejecting an account
    const handleRejectAccount = async (alertId) => {
        try {
            // Replace the URL below with your backend server URL for rejecting accounts
            const response = await fetch(`https://api.example.com/admin/alerts/${alertId}/reject`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to reject account');
            }

            // Update alerts after rejecting the account
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== alertId));
        } catch (error) {
            console.error('Failed to reject account:', error);
            setError(error.message);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Alerts</h2>

            {/* Error message *
            {error && <p style={styles.error}>{error}</p>}

            {/* Alerts list *
            <div style={styles.alerts}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    alerts.map((alert) => (
                        <div key={alert.id} style={styles.alert}>
                            <p><strong>Type:</strong> {alert.type}</p>
                            <p><strong>Details:</strong> {alert.details}</p>
                            <div style={styles.actions}>
                                <button
                                    style={styles.acceptButton}
                                    onClick={() => handleAcceptAccount(alert.id)}
                                >
                                    Accept
                                </button>
                                <button
                                    style={styles.declineButton}
                                    onClick={() => handleRejectAccount(alert.id)}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

// CSS styles for the AdminAlerts component
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
    alerts: {
        marginBottom: '15px',
    },
    alert: {
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

export default AdminAlerts;*/
