import { Routes, Route } from "react-router-dom";
import Layout from "./components/Mainlayout";
import Shop from "./pages/shop/Shop";
import AdirePrints from "./pages/adire-prints/Adireprints";
import Eco_home_decor from "./pages/eco-home-decor/Ecohomedecor";
import RaffiaBags from "./pages/raffiabags/Raffiabags";
import RaffiaEarrings from "./pages/raffia-earrings/Raffiaearrings";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Shop />} />
        <Route path="/adire-prints" element={<AdirePrints />} />
        <Route path="/eco-home-decor" element={<Eco_home_decor />} />
        <Route path="/raffia-bags" element={<RaffiaBags />} />
        <Route path="/raffia-earrings" element={<RaffiaEarrings />} />
      </Route>
    </Routes>
  );
}

export default App;
