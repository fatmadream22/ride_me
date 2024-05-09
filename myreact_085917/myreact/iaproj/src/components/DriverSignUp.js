import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DriverRegister() {
    // Initialize navigate for navigation
    const navigate = useNavigate();

    // Define state for form fields and error handling
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Simulate a successful registration
        setTimeout(() => {
            // Simulate registration conditions
            const isValidRegistration = formData.email !== '' && formData.password !== '' &&
                                        formData.name !== '' && formData.phoneNumber !== '';

            if (isValidRegistration) {
                console.log('Registration successful');
                // Redirect the driver to the desired page after successful registration
                navigate('/DriverAccount'); // Adjust the path as needed
            } else {
                // Set an error message if registration fails
                setError('Registration failed. Please ensure all fields are filled.');
            }
            setIsLoading(false);
        }, 1000); // Simulating a delay in form submission
    };

    return (
        <div style={styles.container}>
            <h2>Driver Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Name input */}
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Email input */}
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Phone number input */}
                <div style={styles.formGroup}>
                    <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
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
                    disabled={isLoading}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}

// CSS styles for the DriverRegister component
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

export default DriverRegister;




/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DriverRegister() {
    // Initialize navigate for navigation
    const navigate = useNavigate();

    // Define state for form fields and error handling
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Avoid updating if the form is already loading
        if (isLoading) return;
        
        setIsLoading(true);
        setError(null);

        try {
            // Replace the URL below with your backend server URL for registration
            const response = await fetch('https://api.example.com/driver/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register');
            }

            // Handle successful registration
            const data = await response.json();
            console.log('Registration successful:', data);
            
            // Redirect the driver to the desired page after successful registration
            navigate('/driver/dashboard'); // Adjust the path as needed
        } catch (error) {
            console.error('Failed to register:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Driver Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Name input *
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Email input *
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                {/* Phone number input *
                <div style={styles.formGroup}>
                    <label htmlFor="phoneNumber" style={styles.label}>Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
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
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}

// CSS styles for the DriverRegister component
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

export default DriverRegister;*/
