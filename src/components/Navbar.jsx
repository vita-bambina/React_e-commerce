import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/cart-icon.svg";
import menuIcon from "../assets/images/menu.svg";
import { useState } from "react";
import Thanumodal from "./Thanumodal";
import Loginmodal from "./Loginmodal";
import Signupmodal from "./Signupmodal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <div className="Navbar">
      <div className="left">
        <img src={logo} alt="loading" />
      </div>
      <div className="Right">
        <p id="Home">Home</p>
        <p id="Blog">Blog</p>
        <p id="Shop">Shop</p>
        <p id="cart">
          Cart <img src={cartIcon} alt="loading" />
        </p>
        <img
          id="thanu-menu"
          src={menuIcon}
          alt="Loading"
          onClick={() => {
            console.log("MENU CLICKED");
            setShowModal(true);
          }}
        />
        <Thanumodal
          showModal={showModal}
          setShowModal={setShowModal}
          handleOpenLogin={() => setOpenLogin(true)}
        />
        {openLogin && (
          <Loginmodal
            openLogin={openLogin}
            handleClose={() => setOpsenLogin(false)}
            handleOpenSignup={() => {
              setOpenLogin(false);
              setOpenSignup(true);
            }}
          />
        )}

        {openSignup && (
          <Signupmodal
            openSignup={openSignup}
            handleCloseSignup={() => setOpenSignup(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
