import {Link, useNavigate} from "react-router-dom";
import {useBook} from "../context/Bookprovider";

import ReactCountryFlag from "react-country-flag";
import {TrashIcon} from "@heroicons/react/20/solid";
import Loader from "../ui/Loader";

function Bookmark() {

  const navigate = useNavigate();
  const {bookmark, isLoadingcurrentbook, currentbook,deleteBookmark} = useBook();
  if (isLoadingcurrentbook) return <Loader />;
  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };
  return (
    <div>
      <h2>BookmarkList</h2>
      <button onClick={() => navigate("/")} className="btn btn--back">
        &larr; Back
      </button>
      <div className="bookmarkList">
        {bookmark.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
              <div
                className={`bookmarkItem ${item.id === currentbook?.id ? "current-bookmark" : ""}`}
              >
                <div>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  &nbsp; <strong>{item.cityName}</strong> &nbsp;
                  <span>{item.country}</span>
                </div>
                <button onClick={(e) => handleDelete(e, item.id)}>
                  <TrashIcon className="trash" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
