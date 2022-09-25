import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";

function Layout() {
  return (
    <Router>
      <NavLink to="/" className="nav-link">
        Home |
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Layout;
