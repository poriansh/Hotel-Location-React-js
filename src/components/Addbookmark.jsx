import {useEffect, useState} from "react";
import ReactCountryFlag from "react-country-flag";
import {useNavigate} from "react-router-dom";

import axios from "axios";
import Loader from "./Loader.jsx";
import toast from "react-hot-toast";
import {useBook} from "../context/Bookprovider.jsx";
import useUrlLocation from "../hooks/useUrlLocation.js";

const BASE_GEOCODING_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Addbookmark() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [lat, lng] = useUrlLocation();
  const {createBookmark} = useBook();
  useEffect(() => {
    async function getLocatoinUrl() {
      try {
        setIsLoadingGeoCoding(true);
        const {data} = await axios.get(`${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`);
        if (!data.countryName) throw new Error();
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setIsLoadingGeoCoding(false);
        toast.error("is not Country");
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    getLocatoinUrl();
  }, [lat, lng]);
  const handelsubmit = async (e) => {
    e.preventDefault();
    if (!country || !cityName) return;

    const newBook = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + " " + country,
    };
    await createBookmark(newBook);
    navigate("/bookmark");
  };
  if (isLoadingGeoCoding) return <Loader />;
  return (
    <div>
      <h2>Bookmark New Location</h2>
      <form className="form" onSubmit={handelsubmit}>
        <div className="formControl">
          <label htmlFor="cityName">CityName</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            name="cityName"
            id="cityName"
          />
        </div>
        <div className="formControl">
          <label htmlFor="country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            name="country"
            id="country"
          />
          <ReactCountryFlag className="flag" svg countryCode={countryCode} />
          {/* <span className="flag">{countryCode}</span> */}
        </div>
        <div className="buttons">
          <button
            className="btn btn--back"
            onClick={(e) => {
              e.preventDefault();
              navigate("/bookmark");
            }}
          >
            &larr; Back
          </button>
          <button className="btn btn--primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Addbookmark;
