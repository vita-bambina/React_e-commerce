import { Link } from "react-router-dom";
import Closebutton from "../assets/images/closebutton.svg";

function Moredropdown({ showDropdown, setShowDropdown }) {
  return (
    <>
      {showDropdown && (
        <div id="More_dropdown" className="dropdown">
          <div className="inner_more_dropdown">
            <div className="dropdown_header">
              <p>Categories</p>
              <img
                className="dropdown_closebtn"
                src={Closebutton}
                alt="Loading"
                onClick={() => setShowDropdown(false)}
              />
            </div>
            <div className="dropdown_list">
              <Link to="/" onClick={() => setShowDropdown(false)}>
                All Catalog
              </Link>
              <Link to="/eco-home-decor" onClick={() => setShowDropdown(false)}>
                Eco Home Decor
              </Link>
              <Link to="/raffia-bags" onClick={() => setShowDropdown(false)}>
                Raffia Bags
              </Link>
              <Link to="/raffia-earrings" onClick={() => setShowDropdown(false)}>
                Raffia Earrings
              </Link>
              <Link to="/adire-prints" onClick={() => setShowDropdown(false)}>
                Adire Prints
              </Link>
              <Link to="/raffia-products" onClick={() => setShowDropdown(false)}>
                Raffia Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Moredropdown;