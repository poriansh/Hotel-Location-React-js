import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useReducer, useRef, useState} from "react";
import {MdLocationOn} from "react-icons/md";
import {createSearchParams, NavLink, useNavigate} from "react-router-dom";
import useClickside from "../hooks/useClickside";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import English from "react-date-object/locales/persian_en";
import "react-multi-date-picker/styles/colors/teal.css";

function optionReducer(option, {type, payload}) {
  switch (type) {
    case "inc":
      return {...option, [payload]: option[payload] + 1};
    case "dec":
      return {...option, [payload]: option[payload] - 1};
    default:
      return option;
  }
}

function Header() {
  const [openOption, setopenoption] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const [option, dispatch] = useReducer(optionReducer, {room: 1});

const handelsearch = () => {
  const formatDateOnly = (dateObj) => dateObj.toISOString().split("T")[0];

  const enCodedParams = createSearchParams({
    searchvalue: searchvalue,
    room: JSON.stringify(option.room),
    date: date ? formatDateOnly(date.toDate()) : "",
  });

  navigate(`/?${enCodedParams}`);
};



  return (
    <div className="bg-white border border-gray-300 rounded-3xl py-4 px-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <NavLink to="/" className="text-sm font-medium  hover:underline transition">
            Home
          </NavLink>
          <span className="h-5 w-px bg-gray-300 mx-2"></span>
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
            <MdLocationOn className="text-xl" />
            <input
              value={searchvalue}
              onChange={(e) => setsearchvalue(e.target.value)}
              type="text"
              placeholder="Where to go?"
              className="bg-transparent outline-none text-sm"
            />
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-700 bg-gray-100  rounded-md hover:bg-gray-200 transition relative">
            <span
              id="optionDropdown"
              className="px-3 py-2 block"
              onClick={() => setopenoption(!openOption)}
            >
              room
            </span>
            {openOption && (
              <SearchOption
                option={option}
                type="room"
                dispatch={dispatch}
                setopenoption={setopenoption}
              />
            )}
          </div>
          <div>
            <DatePicker
              calendar={persian}
              inputClass="w-[170px] text-sm py-2 px-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              containerClass="z-[100]"
              className="teal"
              placeholder="Travel date"
              hideWeekDays
              locale={English}
              value={date}
              onChange={setDate}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handelsearch}
            className="bg-[var(--primary-600)] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function SearchOption({option, dispatch, setopenoption, type}) {
  const ref = useRef();
  useClickside(ref, () => setopenoption(false), "optionDropdown");

  return (
    <div ref={ref} className="absolute -left-0 top-10 bg-white shadow-lg rounded-lg p-2 z-10">
      <div className="flex items-center justify-between gap-4 py-2">
        <span className="text-sm font-semibold">{type}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({type: "dec", payload: type})}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={option[type] <= 1}
          >
            -
          </button>
          <span className="min-w-[20px] text-center">{option[type]}</span>
          <button
            onClick={() => dispatch({type: "inc", payload: type})}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={option[type] >= 5}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
