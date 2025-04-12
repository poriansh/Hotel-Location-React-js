import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../ui/Loader";
import useHotel from "./useHotel";

function Singlehotel() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: Hotel, isLoading} = useHotel();

  if (isLoading) return <Loader />;

  return (
    <div className="py-6 px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        <button
          onClick={() => navigate("/", {state: {viewedId: id}})}
          className="bg-[var(--primary-600)] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          &larr; Back
        </button>

        <div className="rounded-xl overflow-hidden shadow-md bg-white border border-[var(--primary-100)]">
          <img src={Hotel.xl_picture_url} alt={Hotel.name} className="w-full h-72 object-cover" />
          <div className="p-4 space-y-1">
            <p className="text-[var(--text-500)] text-sm">{Hotel.smart_location}</p>
            <p className="text-[var(--text-700)] font-semibold">{Hotel.name}</p>
            <p className="text-[var(--text-400)]">
              € {Hotel.price} <span className="text-xs">night</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlehotel;
