import {useNavigate, useParams} from "react-router-dom";
import Loader from "./Loader";
import {useHotel} from "../context/Hotelprovider";
import { useEffect } from "react";

function Singlehotel() {
  const {id} = useParams();
  const {currenthotel, getHotel, isLoadingcurrenthotel} = useHotel();
  const navigate = useNavigate()
  useEffect(() => {
    
    getHotel(id)

  },[id])

  if (isLoadingcurrenthotel) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
        <img src={currenthotel.xl_picture_url} alt={currenthotel.name} />
        <h2>{currenthotel.name}</h2>
        <div>
          {currenthotel.number_of_reviews} reviews &bull; {currenthotel.smart_location}
        </div>
      </div>
    </div>
  );
}

export default Singlehotel;
