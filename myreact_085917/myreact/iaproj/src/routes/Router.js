import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****LayoutsUserProfile*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const RegisterForm = lazy(() => import("../components/RegisterForm"));
const LoginForm = lazy(() => import("../components/LoginForm"));
const UserProfileCard = lazy(() => import ("../components/UserProfileCard/UserProfileCard"));
const CreditCardForm = lazy(() => import ("../components/CreditCardForm"));
const UserProfile = lazy(() => import ("../components/UserProfile"));
const UserAccount = lazy(() => import ("../components/UserAccount"));
const RidesHistory = lazy(() => import ("../components/RidesHistory"));
const BookRides = lazy(() => import ("../components/BookRides"));
const DriverLogin = lazy(() => import ("../components/DriverLogin"));
const DriverSignUp = lazy(() => import ("../components/DriverSignUp"));
const DriverAccount = lazy(() => import ("../components/DriverAccount"));
const AdminAccount = lazy(() => import ("../components/AdminAccount"));
const AdminAlerts = lazy(() => import ("../components/AdminAlerts"));
const AdminLogin = lazy(() => import ("../components/AdminLogin"));
const AdminManagement = lazy(() => import ("../components/AdminManagement"));
const Ride = lazy(() => import ("../components/Ride"));







/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/RegisterForm", exact: true, element: <RegisterForm /> },
      { path: "/LoginForm", exact: true, element: <LoginForm /> },
      { path: "/UserProfileCard", exact: true, element: <UserProfileCard /> },
      { path: "/CreditCardForm", exact: true, element: <CreditCardForm /> },
      { path: "/UserProfile", exact: true, element: <UserProfile /> },
      { path: "/UserAccount", exact: true, element: <UserAccount /> },
      { path: "/RidesHistory", exact: true, element: <RidesHistory /> },
      { path: "/BookRides", exact: true, element: <BookRides /> },
      { path: "/DriverLogin", exact: true, element: <DriverLogin /> },
      { path: "/DriverSignUp", exact: true, element: <DriverSignUp /> },
      { path: "/DriverAccount", exact: true, element: <DriverAccount /> },
      { path: "/AdminAccount", exact: true, element: <AdminAccount /> },
      { path: "/AdminAlerts", exact: true, element: <AdminAlerts /> },
      { path: "/AdminLogin", exact: true, element: <AdminLogin /> },
      { path: "/AdminManagement", exact: true, element: <AdminManagement /> },
      { path: "/Ride", exact: true, element: <Ride /> },






    ],
  },
];

export default ThemeRoutes;
