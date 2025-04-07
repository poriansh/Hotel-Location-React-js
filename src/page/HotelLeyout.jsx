import {Outlet} from "react-router-dom";
import Map from "../Feature/map/Map";



function HotelLeyout() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map  />
    </div>
  );
}

export default HotelLeyout;
