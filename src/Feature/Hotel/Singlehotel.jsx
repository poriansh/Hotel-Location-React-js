import { useNavigate, useParams } from "react-router-dom";
import useHotelId from "./useHotel";
import Loader from "../../ui/Loader";

function Singlehotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: Hotel, isLoading } = useHotelId(id);
  if (isLoading) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <button onClick={() => navigate(-1)} className="btn btn--back">
          &larr; Back
        </button>
        <div className="locationItem singlehotel">
        <img src={Hotel.xl_picture_url} alt={Hotel.name} />
        <div className="locationItemDesc">
          <p className="locaiton">{Hotel.smart_location}</p>
          <p className="name">{Hotel.name}</p>
          <p className="price">
            €&nbsp;{Hotel.price}&nbsp;
            <span>night</span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Singlehotel;
