import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    // Define state for form fields and error handling
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [formError, setFormError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError(null);

        // Simulate a successful registration after a delay
        setTimeout(() => {
            // Hardcoded registration conditions for simulation
            const isRegistrationValid = formData.username !== '' && formData.email !== '' && formData.password !== '';

            if (isRegistrationValid) {
                console.log('Registration successful');

                // Redirect to the login page after successful registration
                navigate('/LoginForm'); // Adjust the path as needed
            } else {
                // Set an error message if registration fails
                setFormError('Registration failed. Please ensure all fields are filled.');
            }

            setIsLoading(false);
        }, 1000); // Simulate a delay in form submission
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                        required
                    />
                </div>
                {formError && <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div>} {/* Display form error */}
                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <p>Already have an account?</p>
                    <Link to="/LoginForm" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
