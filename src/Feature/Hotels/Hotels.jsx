import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import useHotels from "./useHotels";
import Loader from "../../ui/Loader";

function Hotels() {
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("searchvalue");
  const room = searchparams.get("room");
  const hasParams = searchparams.toString().length > 0;
  const query = hasParams ? `${searchvalue ? `q=${searchvalue}&` : ""}accommodates=${room}` : "";
  const { isLoading, data: Hotels } = useHotels(query);
  const navigate= useNavigate()
  const location = useLocation();
  const viewedId = location.state?.viewedId;
  if (isLoading) return <Loader />;
  return (
    <div className="nearbyLocation">
      <div className="navlocation-werraper ">
        <h2>Nearby Locations</h2>
        <button onClick={() => navigate("/Hotel/add")} className="btn btn--back">
          {" "}
          Add Hotel
        </button>
      </div>
      <div className="locationList">
        {Hotels.map((item) => {
          return <Hotelsitem key={item.id} item={item} viewedId={viewedId} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;

function Hotelsitem({item, viewedId}) {
  return (
    <Link to={`Hotel/${item.id}`}>
      <div
        className={`locationItem ${item.id === viewedId ? "locationItem--view" : ""}`}
        key={item.id}
      >
        <img src={item.thumbnail_url} alt={item.name} />
        <div className="locationItemDesc">
          <p className="locaiton">{item.smart_location}</p>
          <p className="name">{item.name}</p>
          <p className="price">
            €&nbsp;{item.price}&nbsp;
            <span>night</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
