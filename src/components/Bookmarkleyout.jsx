import { Outlet } from "react-router-dom";

import { useBook } from "../context/Bookprovider";
import Map from "../Feature/map/Map";


function Bookmarkleyout() {
  const {bookmark} = useBook();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerhotel={bookmark} />
    </div>
  );
}

export default Bookmarkleyout;
