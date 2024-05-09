import React from 'react';
import { Col, Row } from 'reactstrap';
import Blog from '../components/Blog';
import Search from '../components/Search';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard';
import bg1 from '../assets/images/bg/bg1.jpg';
import bg2 from '../assets/images/bg/bg2.jpg';
import bg3 from '../assets/images/bg/bg3.jpg';
import bg4 from '../assets/images/bg/bg4.jpg';

const BlogData = [
    {
        image: bg1,
        title: 'Hop on RideMe Moto',
        subtitle: 'Move through traffic & save time',
        btnbg: 'primary',
    },
    {
        image: bg2,
        title: 'Hop on a shuttle',
        subtitle: 'Pre-book seat, ride in comfort',
        btnbg: 'primary',
    },
    {
        image: bg3,
        title: 'Plan for outings',
        subtitle: 'Reserve a ride ahead of time',
        btnbg: 'primary',
    },
    {
        image: bg4,
        title: 'Reserve for events',
        subtitle: 'Meet up at the time and enjoy!',
        btnbg: 'primary',
    },
];

// Define static data for driver profiles
const driverProfiles = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
        name: 'Peter Green',
        email: 'peter.green@example.com',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    },
    // Add more profiles as needed
];

const Starter = () => {
    return (
        <div>
            {/* Search Bar */}
            <Search />
            <br />

            {/* Blog Cards */}
            <Row>
                {BlogData.map((blog, index) => (
                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Blog
                            image={blog.image}
                            title={blog.title}
                            subtitle={blog.subtitle}
                            color={blog.btnbg}
                        />
                    </Col>
                ))}
            </Row>

            {/* Separator for Driver Profiles */}
            <div style={styles.separatorContainer}>
                <div style={styles.separatorLine}>
                    <span style={styles.separatorText}>Drivers Profiles</span>
                </div>
            </div>

            {/* User Profile Cards */}
            <Row>
                {driverProfiles.map((profile, index) => (
                    <Col md="4" key={index}>
                        <UserProfileCard
                            name={profile.name}
                            email={profile.email}
                            profilePicture={profile.profilePicture}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

// CSS styles for the Starter component
const styles = {
    separatorContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '30px 20px',
        paddingLeft: '20px',
    },
    separatorLine: {
        borderLeft: '40px solid #007BFF',
        display: 'flex',
        alignItems: 'center',
    },
    separatorText: {
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: '15px',
        margin: '0',
        marginLeft: '-15px',
        marginRight: '2px',
        backgroundColor: 'white',
    },
};

export default Starter;



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'reactstrap';
import Blog from '../components/Blog';
import Search from '../components/Search';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard';
import bg1 from '../assets/images/bg/bg1.jpg';
import bg2 from '../assets/images/bg/bg2.jpg';
import bg3 from '../assets/images/bg/bg3.jpg';
import bg4 from '../assets/images/bg/bg4.jpg';

const BlogData = [
  {
    image: bg1,
    title: 'Hop on RideMe Moto',
    subtitle: 'Move through traffic & save time',
    btnbg: 'primary',
  },
  {
    image: bg2,
    title: 'Hop on a shuttle',
    subtitle: 'Pre-book seat, ride in comfort',
    btnbg: 'primary',
  },
  {
    image: bg3,
    title: 'Plan for outings',
    subtitle: 'Reserve a ride ahead of time',
    btnbg: 'primary',
  },
  {
    image: bg4,
    title: 'Reserve for events',
    subtitle: 'Meet up at the time and enjoy!',
    btnbg: 'primary',
  },
];

const Starter = () => {
  // Define state for user profiles
  const [driverProfiles, setDriverProfiles] = useState([]);
  
  // Fetch driver profiles from the server when the component mounts
  useEffect(() => {
    fetchDriverProfiles();
  }, []);
  
  // Fetch driver profiles data from the server
  const fetchDriverProfiles = async () => {
    try {
      // Replace the URL below with your backend server URL for fetching driver profiles
      const response = await axios.get('https://api.example.com/drivers');
      
      // Update the driverProfiles state with the retrieved data
      setDriverProfiles(response.data);
    } catch (error) {
      console.error('Error fetching driver profiles:', error);
    }
  };

  return (
    <div>
      {/* Search Bar *
      <Search />
      <br />
      
      {/* Blog Cards *
      <Row>
        {BlogData.map((blog, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blog.image}
              title={blog.title}
              subtitle={blog.subtitle}
              color={blog.btnbg}
            />
          </Col>
        ))}
      </Row>

      {/* Separator for Driver Profiles *
      <div style={styles.separatorContainer}>
          <div style={styles.separatorLine}>
              <span style={styles.separatorText}>Drivers Profiles</span>
          </div>
      </div>

      {/* User Profile Cards *
      <Row>
        {driverProfiles.map((profile, index) => (
          <Col md="4" key={index}>
            <UserProfileCard
              name={profile.name}
              email={profile.email}
              profilePicture={profile.profilePicture}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  separatorContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 20px',
    paddingLeft: '20px',
  },
  separatorLine: {
    borderLeft: '40px solid #007BFF',
    display: 'flex',
    alignItems: 'center',
  },
  separatorText: {
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '15px',
    margin: '0',
    marginLeft: '-15px',
    marginRight: '2px',
    backgroundColor: 'white',
  },
};

export default Starter;*/
