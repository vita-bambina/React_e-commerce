import Navbar from "./Navbar";
import Sectionone from "./Sectionone";
import Sectiontwo from "./Sectiontwo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="body">
      <div className="background">
        <Navbar />
        <Sectionone />
        <Sectiontwo />
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
