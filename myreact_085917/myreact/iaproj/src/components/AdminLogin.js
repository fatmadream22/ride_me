import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    // Initialize navigate for navigation
    const navigate = useNavigate();

    // Define state for form fields and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Static login data for successful login
        const validEmail = 'admin@example.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            console.log('Login successful');

            // Redirect the admin to the desired page or dashboard after successful login
            navigate('/AdminAccount'); // Adjust the path as needed
        } else {
            // Set an error message if login fails
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Email input */}
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Password input */}
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Error message */}
                {error && <p style={styles.error}>{error}</p>}

                {/* Submit button */}
                <button
                    type="submit"
                    style={styles.button}
                >
                    Log In
                </button>
            </form>
        </div>
    );
}

// CSS styles for the AdminLogin component
const styles = {
    container: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
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
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default AdminLogin;




/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    // Initialize navigate for navigation
    const navigate = useNavigate();

    // Define state for form fields and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Replace the URL below with your backend server URL for admin login
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to log in');
            }

            // Handle successful login (e.g., redirect to admin dashboard)
            const data = await response.json();
            console.log('Login successful:', data);
            
            // Redirect the admin to the desired page or dashboard after successful login
            navigate('/AdminAccount'); // Adjust the path as needed
        } catch (error) {
            console.error('Failed to log in:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Email input *
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Password input *
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Error message *
                {error && <p style={styles.error}>{error}</p>}

                {/* Submit button *
                <button
                    type="submit"
                    style={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Log In'}
                </button>
            </form>
        </div>
    );
}

// CSS styles for the AdminLogin component
const styles = {
    container: {
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
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
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
};

export default AdminLogin;*/
