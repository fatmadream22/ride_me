import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const location = useLocation();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  // Check if the current location is either login or register page
  const isLoginPage = location.pathname === '/LoginForm';
  const isRegisterPage = location.pathname === '/RegisterForm';
  const isDriverLoginPage = location.pathname === '/DriverLogin';
  const isDriverSignUpPage = location.pathname === '/DriverSignUp';
  const isAdminLoginPage = location.pathname === '/AdminLogin';


  // If on the login or register page, do not render the header
  if (isLoginPage || isRegisterPage || isDriverLoginPage || isDriverSignUpPage  || isAdminLoginPage) {
    return null;
  }

  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>

        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
              </Link>

            </NavItem>
          
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link to="/BookRides" className="dropdown-link">Book a Ride</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/CreditCardForm" className="dropdown-link">Pay for a Ride</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/RidesHistory" className="dropdown-link">History</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Settings</DropdownItem>
            
            <DropdownItem>
              <Link to="/UserAccount" className="dropdown-link">Profile</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/LoginForm" className="dropdown-link">Logout</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
