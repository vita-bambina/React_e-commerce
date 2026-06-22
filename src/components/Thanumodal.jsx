import { useState } from "react";
import Closebutton from "../assets/images/closebutton.svg";
import Logo from "../assets/images/logo.svg";

function Thanumodal({ showModal, setShowModal, handleOpenLogin }) {
  return (
    <>
      {showModal && (
        <div className="secret">
          <div className="inner_thanu_modal">
            <div className="position">
              <img id="modal_logo" src={Logo} alt="Logo" />

              <img
                id="close_Modal"
                src={Closebutton}
                alt="Close"
                onClick={() => setShowModal(false)}
              />
            </div>
            <h6 id="About">About</h6>
            <h6
              id="login"
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("Login clicked");
                handleOpenLogin();
                setShowModal(false);
              }}
            >
              Login
            </h6>
          </div>
        </div>
      )}
    </>
  );
}
export default Thanumodal;
