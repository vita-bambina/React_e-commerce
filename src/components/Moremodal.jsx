import { useState } from "react";
import { Link } from "react-router-dom";

function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="more2">
      <p id="more" onClick={() => setIsOpen(true)}>More</p>
      <img src="/images/more.svg" alt="Loading..." onClick={() => setIsOpen(true)} />

      {isOpen && (
        <div id="More_dropdown" className="dropdown">
          <div className="inner_more_dropdown">
            <div className="dropdown_header">
              <p>Categories</p>
              <img src="/images/closebutton.svg" alt="Close" onClick={close} />
            </div>
            <div className="dropdown_list">
              <Link to="/" onClick={close}>All Catalog</Link>
              <Link to="/ecohomedecor" onClick={close}>Eco Home Decor</Link>
              <Link to="/raffiabags" onClick={close}>Raffia Bags</Link>
              <Link to="/raffiaearrings" onClick={close}>Raffia Earrings</Link>
              <Link to="/adireprints" onClick={close}>Adire Prints</Link>
              <Link to="/raffiaproducts" onClick={close}>Raffia Products</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoreDropdown;