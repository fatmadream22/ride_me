import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import axios from "axios";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const Sidebar = () => {
  // Define state for user data
  const [userData, setUserData] = useState({
    profilePicture: user1,
    name: "Ali Ahmed",
    navigationLinks: [
      { title: "Home", href: "/starter", icon: "bi bi-house" },
      { title: "Notifications", href: "/alerts", icon: "bi bi-bell" },
      { title: "About", href: "/about", icon: "bi bi-people" },
      { title: "Rides", href: "/Ride", icon: "bi bi-info-circle" },

      // Add more navigation links as needed
    ],
  });
  
  const location = useLocation(); // Use useLocation hook

  // Define state for checking if the component should render the sidebar
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(true);

  // Check if the current location is either login or register page
  useEffect(() => {
    const isLoginPage = location.pathname === '/LoginForm';
    const isRegisterPage = location.pathname === '/RegisterForm';
    const isDriverLoginPage = location.pathname === '/DriverLogin';
    const isDriverSignUpPage = location.pathname === '/DriverSignUp';
    const isAdminLoginPage = location.pathname === '/AdminLogin';
    
    setShouldRenderSidebar(!(isLoginPage || isRegisterPage || isDriverLoginPage || isDriverSignUpPage || isAdminLoginPage));
  }, [location.pathname]);

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Fetch user data from the server
  const fetchUserData = async () => {
    try {
      // Replace the URL below with your backend server URL for fetching user data
      const response = await axios.get('https://api.example.com/user/data');
      
      // Update the userData state with the retrieved data
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Toggle sidebar visibility
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  // Close the sidebar
  const closeSidebar = () => {
    document.getElementById("sidebarArea").classList.remove("showSidebar");
  };

  if (!shouldRenderSidebar) {
    return null; // Early return to skip rendering the sidebar
  }

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img src={userData.profilePicture} alt="user" width="50" className="rounded-circle" />
          <button
            type="button"
            className="btn btn-light ms-auto text-white d-lg-none"
            onClick={showMobilemenu}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">{userData.name}</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {userData.navigationLinks.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                onClick={closeSidebar} // Close sidebar when item is clicked
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Link to="/LoginForm" className="nav-link" onClick={closeSidebar}>
            Logout
          </Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
