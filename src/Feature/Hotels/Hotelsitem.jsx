import { Link } from "react-router-dom";

function Hotelsitem({item, viewedId}) {
  return (
    <div className={`locationItem ${item.id === viewedId ? "locationItem--view" : ""}`}>
      <img src={item.thumbnail_url} alt={item.name} />
      <div className="locationItemDesc">
        <Link to={`Hotel/${item.id}`}>
          <p className="locaiton">{item.smart_location}</p>
        </Link>
        <p className="name">{item.name}</p>
        <p className="price">
          €&nbsp;{item.price}&nbsp;<span>night</span>
        </p>
      </div>
    </div>
  );
}

export default Hotelsitem;
