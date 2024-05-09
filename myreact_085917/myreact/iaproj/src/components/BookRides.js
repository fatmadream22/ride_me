import React, { useState } from 'react';

function BookRide() {
    // Define state for the form data
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropOffLocation: '',
        rideDate: '',
        rideTime: '',
        vehicleType: 'Taxi', // Default vehicle type
    });

    // Define state for form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        setIsSubmitting(true);

        // Assume the booking is successful
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionSuccess(true);
        }, 1000); // Simulating a delay in form submission
    };

    return (
        <div style={styles.container}>
            <h2>Book a Ride</h2>
            {submissionSuccess && <p>Ride booked successfully!</p>}

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="pickupLocation" style={styles.label}>Pickup Location:</label>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="dropOffLocation" style={styles.label}>Drop-Off Location:</label>
                    <input
                        type="text"
                        id="dropOffLocation"
                        name="dropOffLocation"
                        value={formData.dropOffLocation}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="rideDate" style={styles.label}>Ride Date:</label>
                    <input
                        type="date"
                        id="rideDate"
                        name="rideDate"
                        value={formData.rideDate}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="rideTime" style={styles.label}>Ride Time:</label>
                    <input
                        type="time"
                        id="rideTime"
                        name="rideTime"
                        value={formData.rideTime}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="vehicleType" style={styles.label}>Vehicle Type:</label>
                    <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        style={styles.input}
                    >
                        <option value="Taxi">Taxi</option>
                        <option value="Comfort">Comfort</option>
                        <option value="Scooter">Scooter</option>
                        <option value="Shuttle">Shuttle</option>
                    </select>
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Booking...' : 'Book Ride'}
                </button>
            </form>
        </div>
    );
}

// CSS styles for the BookRide component
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
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
};

export default BookRide;


/*import React, { useState } from 'react';

function BookRide() {
    // Define state for the form data
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropOffLocation: '',
        rideDate: '',
        rideTime: '',
        vehicleType: 'standard'
    });

    // Define state for form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);

    // Handle input change
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
        setIsSubmitting(true);
        setSubmissionError(null);

        try {
            // Replace the URL below with the actual endpoint where your booking request should be sent
            const response = await fetch('https://api.example.com/rides/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Handle successful booking
            setSubmissionSuccess(true);
        } catch (error) {
            // Handle submission error
            console.error('Failed to submit booking request:', error);
            setSubmissionError(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Book a Ride</h2>
            {submissionSuccess && <p>Ride booked successfully!</p>}
            {submissionError && <p>Error submitting booking request: {submissionError.message}</p>}

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="pickupLocation" style={styles.label}>Pickup Location:</label>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="dropOffLocation" style={styles.label}>Drop-Off Location:</label>
                    <input
                        type="text"
                        id="dropOffLocation"
                        name="dropOffLocation"
                        value={formData.dropOffLocation}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="rideDate" style={styles.label}>Ride Date:</label>
                    <input
                        type="date"
                        id="rideDate"
                        name="rideDate"
                        value={formData.rideDate}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="rideTime" style={styles.label}>Ride Time:</label>
                    <input
                        type="time"
                        id="rideTime"
                        name="rideTime"
                        value={formData.rideTime}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="vehicleType" style={styles.label}>Vehicle Type:</label>
                    <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        style={styles.input}
                    >
                        <option value="Taxi">Taxi</option>
                        <option value="Comfort">Comfort</option>
                        <option value="Scooter">Scooter</option>
                        <option value="Shuttle">Shuttle</option>
                    </select>
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Booking...' : 'Book Ride'}
                </button>
            </form>
        </div>
    );
}

// CSS styles for the BookRide component
const styles = {
    container: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column'
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
    }
};

export default BookRide;*/
