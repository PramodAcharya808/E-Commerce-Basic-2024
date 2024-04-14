import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "../Styles/general_styles.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="py-4">
      <Container>
        <Link to="/" className="me-5">
          Home
        </Link>
        <Nav className="me-auto">
          <Link to="/">Add to cart</Link>
        </Nav>

        <Badge
          badgeContent={4}
          color="warning"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </Badge>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="cart_menu">
            <i
              class="fa-solid fa-circle-xmark close_cart"
              onClick={handleClose}
            ></i>
            <div className="cart_message_section">
              <p className="cart_message">Cart is empty</p>
              <img
                src="../../../public/cart.gif"
                alt="Cart Loading.."
                className="cart_gif"
              />
            </div>
          </div>
        </Menu>
      </Container>
    </Navbar>
  );
};

export default Header;
