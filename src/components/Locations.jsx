import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

function Locations() {
    const { data, isLoading } = useFetch("http://localhost:5000/hotels","");
    if(isLoading) return <Loader/>
  return (
    <div className="nearbyLocation">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          return <Locationsitem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Locations;

function Locationsitem({item}) {
    

    return (
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
    );
}