import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  const location = useLocation();

  // Check if the current location is the login or register page
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // Check if the current location is either the login or register page
  const shouldHideHeader = isLoginPage || isRegisterPage;

  return (
    <main>
      {/* Render the Header only if not on the login or register page*/ }
      {!shouldHideHeader && <Header />}
      <div className="pageWrapper d-lg-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;