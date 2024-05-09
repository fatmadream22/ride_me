import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    // Define state for form fields and error handling
    const [formData, setFormData] = useState({
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

        // Simulate a successful login after a delay
        setTimeout(() => {
            // Hardcoded valid credentials for simulation
            const isValidLogin = formData.email === 'user@example.com' && formData.password === 'password123';

            if (isValidLogin) {
                console.log('Login successful');

                // Redirect to the desired page after successful login
                navigate('/Starter'); // Adjust the path as needed
            } else {
                // Set an error message if login fails
                setFormError('Invalid email or password. Please try again.');
            }

            setIsLoading(false);
        }, 1000); // Simulate a delay in form submission
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
            <form onSubmit={handleSubmit}>
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
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                {/* Links to other pages */}
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <p>Want to create an account?</p>
                    <Link to="/RegisterForm" style={{ color: '#007bff', textDecoration: 'none' }}>Register</Link>
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <p>Are you admin?</p>
                    <Link to="/AdminLogin" style={{ color: '#007bff', textDecoration: 'none' }}>Login as an Admin</Link>
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <p>Are you a Driver?</p>
                    <Link to="/DriverLogin" style={{ color: '#007bff', textDecoration: 'none' }}>Login as a Driver</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
