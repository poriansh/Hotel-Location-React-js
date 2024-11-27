import {Outlet} from "react-router-dom";
import Map from "./Map";
import { useHotel } from "../context/Hotelprovider";

function Appleyout() {
   const {hotels} = useHotel();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerhotel={hotels} />
    </div>
  );
}

export default Appleyout;
