import {Link, useNavigate} from "react-router-dom";

import { useHotel } from "../context/Hotelprovider";
import Loader from "../ui/Loader";

function Hotel() {
  const navigate = useNavigate()
    const {isLoading, hotels, currenthotel} = useHotel();
  if(isLoading) return <Loader/>
  return (
    <div className="searchList">
      <h2>Search Results ({hotels.length})</h2>
      {hotels.map((item) => {
        return (
          <Link key={item.id} to={`/Hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
            <div className={`searchItem ${item.id === currenthotel?.id ? "current-hotel" : ""}`}>
              <img src={item.thumbnail_url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                €&nbsp;{item.price}&nbsp;
                <span>night</span>
              </div>
            </div>
          </Link>
        );
      })}
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
    </div>
  );
}

export default Hotel;
