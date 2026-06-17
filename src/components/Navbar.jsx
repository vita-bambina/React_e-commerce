import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/cart-icon.svg";
import menuIcon from "../assets/images/menu.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <img src="{logo}" alt="loading" />
      </div>
      <div className="Right">
        <p id="Home">Home</p>
        <p id="Blog">Blog</p>
        <p id="Shop">Shop</p>
        <p id="cart">
          Cart <img src="{cartIcon}" alt="loading" />
        </p>
        <img id="thanu-menu" src="menuIcon" alt="Loading" />
      </div>
    </div>
  );
}

export default Navbar;
