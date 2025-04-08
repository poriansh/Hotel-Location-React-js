import {Link, useSearchParams} from "react-router-dom";
import useHotels from "./useHotels";
import Loader from "../../ui/Loader";

function Hotels() {
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("searchvalue");
  const room = searchparams.get("room");

  const hasParams = searchparams.toString().length > 0;

  const query = hasParams ? `${searchvalue ? `q=${searchvalue}&` : ""}accommodates=${room}` : "";
  const {isLoading, data} = useHotels(query);

  if (isLoading) return <Loader />;
  return (
    <div className="nearbyLocation">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          return <Hotelsitem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;

function Hotelsitem({item}) {
  return (
    <Link to={`Hotel/${item.id}`}>
      <div className="locationItem" key={item.id}>
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
