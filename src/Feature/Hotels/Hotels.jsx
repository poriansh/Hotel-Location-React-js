import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import Loader from "../../ui/Loader";
import useHotels from "./useHotels";
import Hotelsitem from "./Hotelsitem";

function Hotels() {
  const [searchparams] = useSearchParams();
  const searchvalue = searchparams.get("searchvalue");
  const room = searchparams.get("room");
  const page = Number(searchparams.get("page")) || 1;
  const pageSize = 5;

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
    <div className="space-y-6 px-4 py-6 rounded-xl ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[var(--text-700)]">Nearby Locations</h2>
        <button
          onClick={() => navigate("/Hotel/add")}
          className="bg-[var(--primary-600)] w-full sm:w-auto  text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Hotel
        </button>
      </div>

      {/* Hotels List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((item) => (
          <Hotelsitem key={item.id} item={item} viewedId={viewedId} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            const newParams = new URLSearchParams(searchparams.toString());
            newParams.set("page", page - 1);
            navigate(`?${newParams.toString()}`);
          }}
          disabled={page <= 1}
          className="px-4 py-2 rounded bg-[var(--primary-100)] text-[var(--primary-600)] disabled:opacity-50 hover:bg-white border border-[var(--primary-100)] hover:border-[var(--primary-600)] transition disabled:hover:bg-[var(--primary-100)] disabled:hover:text-[var(--primary-600)] "
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
          className="px-4 py-2 rounded bg-[var(--primary-100)] text-[var(--primary-600)] disabled:opacity-50 hover:bg-white border border-[var(--primary-100)] hover:border-[var(--primary-600)] transition disabled:hover:bg-[var(--primary-100)] disabled:hover:text-[var(--primary-600)] "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Hotels;
