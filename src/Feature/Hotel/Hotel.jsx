import {Link, useNavigate, useSearchParams} from "react-router-dom";

import Loader from "../../ui/Loader";
import useHotels from "./useHotels";

function Hotel() {
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("searchvalue");
  const room = searchparams.get("room");
  const navigate = useNavigate();

  const {isLoading, data} = useHotels(`q=${searchvalue || ""}&accommodates=${room || 1}`);

  if (isLoading) return <Loader />;
  return (
    <div className="searchList">
      <h2>Search Results ({data.length})</h2>
      {data.map((item) => {
        return (
          <Link key={item.id} to={`/Hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
            <div className={`searchItem `}>
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
