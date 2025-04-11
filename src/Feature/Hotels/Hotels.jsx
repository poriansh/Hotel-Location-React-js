import { useLocation, useNavigate, useSearchParams} from "react-router-dom";
import Loader from "../../ui/Loader";
import useHotels from "./useHotels";
import Hotelsitem from "./Hotelsitem";

function Hotels() {
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("searchvalue");
  const room = searchparams.get("room");
  const page = Number(searchparams.get("page")) || 1;
  const pageSize = 5; // تعداد آیتم‌ها در هر صفحه

  const hasParams = searchparams.toString().length > 0;
  const query = hasParams
    ? `${searchvalue ? `q=${searchvalue}&` : ""}${
        room ? `accommodates=${room}&` : ""
      }_page=${page}&_limit=${pageSize}`
    : `_page=${page}&_limit=${pageSize}`;

  const {data: hotels, totalCount, isLoading} = useHotels(query);
  const totalPages = Math.ceil(totalCount / pageSize);

  const navigate = useNavigate();
  const location = useLocation();
  const viewedId = location.state?.viewedId;

  if (isLoading) return <Loader />;

  return (
    <div className="nearbyLocation">
      <div className="navlocation-werraper ">
        <h2>Nearby Locations</h2>
        <button onClick={() => navigate("/Hotel/add")} className="btn btn--back">
          Add Hotel
        </button>
      </div>
      <div className="locationList">
        {hotels.map((item) => (
          <Hotelsitem key={item.id} item={item} viewedId={viewedId} />
        ))}
      </div>
      {/* {pagination} */}
      <div className="pagination">
        <button
          onClick={() => {
            const newParams = new URLSearchParams(searchparams.toString());
            newParams.set("page", page - 1);
            navigate(`?${newParams.toString()}`);
          }}
          disabled={page <= 1}
        >
          Prev
        </button>

        <button
          onClick={() => {
            const newParams = new URLSearchParams(searchparams.toString());
            newParams.set("page", page + 1);
            navigate(`?${newParams.toString()}`);
          }}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Hotels;

