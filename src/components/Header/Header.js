import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Home, HomeIcon, Telegram } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../Button/Button";
import "./Header.sass";
const Header = () => {
  const pathName = useLocation();

  return (
    <Navbar className="header" sticky="top" expand="lg">
      <Nav.Link as={NavLink} to="/" className={"header_navlink"}>
        <Navbar.Brand className="header_home">
          <Home />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName == "/portfolio" ? "header_link" : "header_link"}
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a key={key} href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
