import React, { useState } from 'react';

function CreditCardForm() {
    // Define state for the form fields
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    // Define state for form errors
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate the form data
    const validate = () => {
        let formErrors = {};
        
        // Validate cardholder name
        if (!formData.cardholderName) {
            formErrors.cardholderName = 'Cardholder name is required';
        }
        
        // Validate card number
        const cardNumberRegex = /^\d{16}$/; // Card number must be 16 digits
        if (!cardNumberRegex.test(formData.cardNumber)) {
            formErrors.cardNumber = 'Card number must be 16 digits';
        }
        
        // Validate expiration date
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
        if (!expirationDateRegex.test(formData.expirationDate)) {
            formErrors.expirationDate = 'Expiration date must be in MM/YY format';
        }

        // Validate CVV code
        const cvvRegex = /^\d{3,4}$/; // CVV code must be 3 or 4 digits
        if (!cvvRegex.test(formData.cvv)) {
            formErrors.cvv = 'CVV must be 3 or 4 digits';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            console.log('Form submitted successfully');
            console.log('Form Data:', formData);
            // Add your form submission logic here (e.g., sending data to a server)
        } else {
            console.log('Form contains errors');
        }
    };

    // Define CSS styles for the form
    const styles = {
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        formGroup: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px'
        },
        errorText: {
            color: 'red',
            fontSize: '14px',
            marginTop: '5px'
        },
        submitButton: {
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2>Credit Card Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="cardholderName" style={styles.label}>Cardholder Name:</label>
                    <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cardholderName && <span style={styles.errorText}>{errors.cardholderName}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="cardNumber" style={styles.label}>Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cardNumber && <span style={styles.errorText}>{errors.cardNumber}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="expirationDate" style={styles.label}>Expiration Date:</label>
                    <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.expirationDate && <span style={styles.errorText}>{errors.expirationDate}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="cvv" style={styles.label}>CVV:</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cvv && <span style={styles.errorText}>{errors.cvv}</span>}
                </div>

                <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default CreditCardForm;


/*import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests

function CreditCardForm() {
    // Define state for the form fields
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    // Define state for form errors
    const [errors, setErrors] = useState({});
    // State for server response or feedback message
    const [responseMessage, setResponseMessage] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate the form data
    const validate = () => {
        let formErrors = {};
        
        // Validate cardholder name
        if (!formData.cardholderName) {
            formErrors.cardholderName = 'Cardholder name is required';
        }
        
        // Validate card number
        const cardNumberRegex = /^\d{16}$/; // Card number must be 16 digits
        if (!cardNumberRegex.test(formData.cardNumber)) {
            formErrors.cardNumber = 'Card number must be 16 digits';
        }
        
        // Validate expiration date
        const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
        if (!expirationDateRegex.test(formData.expirationDate)) {
            formErrors.expirationDate = 'Expiration date must be in MM/YY format';
        }

        // Validate CVV code
        const cvvRegex = /^\d{3,4}$/; // CVV code must be 3 or 4 digits
        if (!cvvRegex.test(formData.cvv)) {
            formErrors.cvv = 'CVV must be 3 or 4 digits';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validate()) {
            try {
                // Replace the URL with your backend server URL for processing the form data
                const response = await axios.post('https://api.example.com/process_payment', formData);
                
                // Handle successful form submission
                setResponseMessage('Payment processed successfully!');
                
                // Optionally, reset the form data
                setFormData({
                    cardholderName: '',
                    cardNumber: '',
                    expirationDate: '',
                    cvv: ''
                });
            } catch (error) {
                console.error('Error processing payment:', error);
                
                // Handle errors (e.g., network issues, server errors)
                setResponseMessage('Error processing payment. Please try again.');
            }
        } else {
            console.log('Form contains errors');
        }
    };

    // Define CSS styles for the form
    const styles = {
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        formGroup: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px'
        },
        errorText: {
            color: 'red',
            fontSize: '14px',
            marginTop: '5px'
        },
        submitButton: {
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer'
        },
        responseMessage: {
            marginTop: '10px',
            color: 'green' // Use red if it's an error
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2>Credit Card Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="cardholderName" style={styles.label}>Cardholder Name:</label>
                    <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cardholderName && <span style={styles.errorText}>{errors.cardholderName}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="cardNumber" style={styles.label}>Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cardNumber && <span style={styles.errorText}>{errors.cardNumber}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="expirationDate" style={styles.label}>Expiration Date:</label>
                    <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.expirationDate && <span style={styles.errorText}>{errors.expirationDate}</span>}
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="cvv" style={styles.label}>CVV:</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errors.cvv && <span style={styles.errorText}>{errors.cvv}</span>}
                </div>

                <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
            {/* Display server response message *
            {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}
        </div>
    );
}

export default CreditCardForm;*/


