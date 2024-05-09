import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
    const [searchData, setSearchData] = useState({
        carType: '',
        smokingPreference: '',
        city: '',
        region: ''
    });

    const [searchResults, setSearchResults] = useState([]); // State for search results
    const [isLoading, setIsLoading] = useState(false); // State for loading state
    const [formError, setFormError] = useState(null); // State to track form errors
    const [bookingStatus, setBookingStatus] = useState(null); // State to track booking status (success or failure)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchData({
            ...searchData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if any field is empty
        if (!searchData.carType || !searchData.smokingPreference || !searchData.city || !searchData.region) {
            setFormError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        setFormError(null);

        try {
            // Replace the URL below with your backend server URL for searching rides
            const response = await fetch('https://api.example.com/rides/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(searchData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch search results');
            }

            // Handle successful search results
            const data = await response.json();
            setSearchResults(data.results); // Update state with search results

            // Call the onSearch function with the search data (optional)
            if (onSearch) {
                onSearch(data.results);
            }
        } catch (error) {
            console.error('Failed to fetch search results:', error);
            setFormError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle booking a ride
    const handleBookRide = async (rideId) => {
        try {
            // Replace the URL below with your backend server URL for booking a ride
            const response = await fetch(`https://api.example.com/rides/${rideId}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to book ride');
            }

            // Handle successful booking
            console.log(`Ride ${rideId} booked successfully!`);
            setBookingStatus(`Ride ${rideId} booked successfully!`);
        } catch (error) {
            console.error(`Failed to book ride ${rideId}:`, error);
            setBookingStatus(`Failed to book ride ${rideId}: ${error.message}`);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Search For Rides</h2>
            <form onSubmit={handleSubmit}>
              
                {/* Form fields... */}                
        <select
          name="carType"
          value={searchData.carType}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          <option value="">Select Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option>
          <option value="Mercedes">Mercedes</option>
          <option value="hatchback">Hatchback</option>

        </select>
        <select
          name="smokingPreference"
          value={searchData.smokingPreference}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          <option value="">Select Smoking Preference</option>
          <option value="smoking">Smoking Allowed</option>
          <option value="non-smoking">Non-Smoking</option>
        </select>
        <select
          name="city"
          value={searchData.city}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
         <option value="">Select City </option>
          <option value="cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Giza">Giza</option>
          <option value="Port Said">Port Said</option>
          <option value="Fayoum">Fayoum</option>
          <option value="Aswan">Aswan</option>

        </select>
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={searchData.region}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        />
                <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div> {/* Display form error */}
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {/* Display search results */}
            {searchResults.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Search Results:</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                <strong>Ride ID:</strong> {result.id} <br />
                                <strong>Car Type:</strong> {result.carType} <br />
                                <strong>Smoking Preference:</strong> {result.smokingPreference} <br />
                                <strong>City:</strong> {result.city} <br />
                                <strong>Region:</strong> {result.region} <br />
                                
                                {/* Add a Book button */}
                                <button
                                    style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                                    onClick={() => handleBookRide(result.id)}
                                >
                                    Book
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display booking status */}
            {bookingStatus && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <p>{bookingStatus}</p>
                </div>
            )}
        </div>
    );
};

export default Search;




/*import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    searchTerm: '',
    carType: '',
    smokingPreference: '',
    city: '',
    region: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search For Rides..."
          value={searchData.searchTerm}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            outline: 'none',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <select
          name="carType"
          value={searchData.carType}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          <option value="">Select Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <select
          name="smokingPreference"
          value={searchData.smokingPreference}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          <option value="">Select Smoking Preference</option>
          <option value="smoking">Smoking Allowed</option>
          <option value="non-smoking">Non-Smoking</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={searchData.city}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={searchData.region}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;*/
