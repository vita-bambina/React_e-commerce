import { Link } from "react-router-dom";
import More from "../assets/images/more.svg";
import Filter from "../assets/images/sort.svg";
import Search_Btn from "../assets/images/Search_two.svg";
import Moredropdown from "./Moremodal";
import { useState } from "react";

function Sectionone() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="section_one">
      <div className="nav">
        <Link to="/">All Catalog</Link>
        <Link to="/eco-home-decor">Eco Home Decor</Link>
        <Link to="/raffia-bags">Raffia Bags</Link>
        <Link to="/raffia-earrings">Raffia Earrings</Link>

        <div
          className="more2"
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => setShowDropdown(true)}
        >
          <p id="more">More</p>
          <img src={More} alt="Loading..." />

          <Moredropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            onClick={() => {
              console.log("More clicked");
              setShowDropdown(true);
            }}
          />
        </div>
      </div>
      <div className="nav2">
        <button className="btnOne">
          <span>Filter </span>
          <img src={Filter} alt="Loading" />
        </button>
        <input
          type="text"
          placeholder="Search for catalog"
          className="btnTwo"
        />
        <div className="search_icon">
          <img src={Search_Btn} alt="Loading" className="search_img" />
        </div>
      </div>
    </div>
  );
}
export default Sectionone;
