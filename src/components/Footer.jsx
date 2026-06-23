import Footer_logo from "../assets/images/logo2.svg";

function Footer() {
  return (
    <div className="lastline">
      <div className="Content">
        <div className="Content_1">
          <div className="logo-1">
            <img src={Footer_logo} alt="Loading" />
          </div>
          <div className="sub_content">
            <h4 className="sub_content_title">Catalog</h4>
            <p>Raffia</p>
            <p>Wood-work</p>
            <p>Adire</p>
          </div>
          <div className="sub_content">
            <h4 className="sub_content_title">Company</h4>
            <p>About us</p>
            <p>Shop</p>
            <p>Blog</p>
          </div>
          <div className="sub_content">
            <h4 className="sub_content_title">Contact</h4>
            <p>@shopthanu</p>
            <p>@shopthanu</p>
            <p>@shopthanu</p>
            <p>@shopthanu</p>
          </div>
        </div>
        <hr className="line" />
        <div className="content_2">
          <p>2026 shoptanu.com</p>
          <p>Legal</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
