import {Link} from "react-router-dom";
import {faToEn} from "./../../utils/toLocalDate";
import {toLocalDate} from "./../../utils/toLocalDate";
import {TrashIcon} from "@heroicons/react/20/solid";
import useDeleteHotel from "./useDeleteHotel";

function Hotelsitem({item, viewedId}) {
  const {DeleteHotelApi} = useDeleteHotel();
  const handelDelete = (id) => {
    DeleteHotelApi(id);
  };
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md bg-white transition border-2 ${
        item.id === viewedId ? "border-[var(--primary-600)] p-2" : "border-transparent"
      }`}
    >
      <img src={item.thumbnail_url} alt={item.name} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-1">
        <Link to={`Hotel/${item.id}`}>
          <p className="text-[var(--text-500)] hover:text-[var(--primary-600)] transition text-sm">
            {item.smart_location}
          </p>
        </Link>
        <p className="text-[var(--text-700)] font-semibold">{item.name}</p>
        <p className="text-[var(--text-400)]">
          € {item.price} <span className="text-xs">night</span>
        </p>
        <div className="flex items-center justify-between">
          <p className=" text-[var(--text-400)]">
            {item.date ? (
              <span className=" text-[var(--text-700)] font-semibold">Travel Date : </span>
            ) : null}
            {faToEn(toLocalDate(item.date))}
          </p>
          <button onClick={() => handelDelete(item.id)}>
            <TrashIcon className="w-5 h- 5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotelsitem;
