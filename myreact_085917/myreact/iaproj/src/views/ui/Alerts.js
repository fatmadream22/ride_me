import React, { useState } from "react";
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Notifications
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <Alert color="primary">
            Hey! Is the last trip was good?
            </Alert>
            <Alert color="primary">
            There is a good offer for you
            </Alert>
            <Alert color="primary">
            Your trip is beginning now
            </Alert>
            <Alert color="primary">New order recieved</Alert>
            <Alert color="primary">
             Please ,rate your last trip!
            </Alert>
            <Alert color="primary">Rate our RideMe app to help us improving it</Alert>
          </div>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Alerts;




/*import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = ({ userId }) => {
  // Define state for the alerts data
  const [alertsData, setAlertsData] = useState([]);
  
  // Define state to track visibility of each alert
  const [visibleAlerts, setVisibleAlerts] = useState({});
  
  // Fetch user-specific alerts from the server when the component mounts
  useEffect(() => {
    fetchUserAlerts();
  }, [userId]);
  
  // Fetch user-specific alerts data from the server
  const fetchUserAlerts = async () => {
    try {
      // Replace the URL with your backend server URL for fetching user-specific alerts
      const response = await axios.get(`https://api.example.com/alerts?userId=${userId}`);
      
      // Update the alertsData state with the retrieved data
      setAlertsData(response.data);
      
      // Initialize the visibleAlerts state based on the alerts data
      const initialVisibleAlerts = response.data.reduce((acc, alert) => {
        acc[alert.id] = true;
        return acc;
      }, {});
      
      setVisibleAlerts(initialVisibleAlerts);
    } catch (error) {
      console.error('Error fetching user-specific alerts:', error);
    }
  };
  
  // Handle dismissing an alert
  const handleDismissAlert = (alertId) => {
    setVisibleAlerts({
      ...visibleAlerts,
      [alertId]: false
    });
  };
  
  return (
    <div>
      {/* --------------------------------------------------------------------------------*
      {/* Card-1*
      {/* --------------------------------------------------------------------------------*
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Notifications
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            {/* Display alerts dynamically *
            {alertsData.map((alert) => (
              visibleAlerts[alert.id] && (
                <Alert
                  key={alert.id}
                  color="primary"
                  isOpen={visibleAlerts[alert.id]}
                  toggle={() => handleDismissAlert(alert.id)}
                >
                  {alert.message}
                </Alert>
              )
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;*/