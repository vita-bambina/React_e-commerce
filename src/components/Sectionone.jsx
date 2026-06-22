import { Link } from "react-router-dom";

function Sectionone() {
  return (
    <div className="section_one">
      <div className="nav">
        <Link to="/">All Catalog</Link>
        <Link to="/eco-home-decor">Eco Home Decor</Link>
        <Link to="/raffia-bags">Raffia Bags</Link>
        <Link to="/raffia-earrings">Raffia Earrings</Link>

        <div className="more2">
          <p id="more">More</p>
          <img src="images/more.svg" alt="Loading..." />
        </div>
      </div>
      <div className="nav2">
        <button className="btnOne">
          <span>Filter </span>
          <img src="images/sort.svg" alt="Loading" />
        </button>
        <input
          type="text"
          placeholder="Search for catalog"
          className="btnTwo"
        />
        <div className="search_icon">
          <img
            src="images\search_two.svg"
            alt="Loading"
            className="search_img"
          />
        </div>
      </div>
    </div>
  );
}
export default Sectionone;
