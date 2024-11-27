import { Outlet } from "react-router-dom";
import Map from "./Map";
import { useBook } from "../context/Bookprovider";


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
