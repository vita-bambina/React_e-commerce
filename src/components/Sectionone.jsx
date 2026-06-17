function Sectionone() {
  return (
    <div className="section_one">
      <div className="nav">
        <a href="./index.html">All Catalog</a>
        <a href="./eco-home-decor/index.html">Eco Home Decor</a>
        <a href="./raffia-bags/index.html">Raffia Bags</a>
        <a href="./raffia-earrings/index.html">Raffia Earrings</a>
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
        <input type="text" placeholder="Search for catalog" className="btnTwo" />
        <div className="search_icon">
          <img src="images\search_two.svg" alt="Loading" className="search_img" />
        </div>
      </div>
    </div>
  );
}
export default Sectionone;
