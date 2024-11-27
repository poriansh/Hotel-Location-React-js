import {CalendarDaysIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import { useRef, useState} from "react";
import {MdLocationOn} from "react-icons/md";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRange} from "react-date-range";
import {format} from "date-fns";
import {createSearchParams, NavLink, useNavigate, useSearchParams} from "react-router-dom";
import useClickside from "../hooks/useClickside";

function Header() {
  const [searchParams] = useSearchParams();
  const [destination, setdestination] = useState(searchParams.get("destination") || "");
  const [openoption, setopenoption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpendate] = useState(false);
  const handelsearch = () => {
    const enCodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination: destination,
      options: JSON.stringify(options),
    });
    navigate({
      pathname: "/Hotels",
      search: enCodedParams.toString(),
    });
  };
  const handelOptions = (name, oparation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oparation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const dateref = useRef()
  useClickside(dateref, () => setOpendate(false), "dateDropdown1");
  return (
    <div className="header">
      <NavLink to={"/"}>Home</NavLink>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn />
          <input
            value={destination}
            onChange={(e) => setdestination(e.target.value)}
            type="text"
            placeholder="where to go ?"
            className="headerSearchInput"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <CalendarDaysIcon className="icon-calender" />
          <div className="dateDropDown" id="dateDropdown1" onClick={() => setOpendate(!openDate)}>
            {`${format(date[0].startDate, "yyyy/MM/dd")} to ${format(
              date[0].endDate,
              "yyyy/MM/dd"
            )}`}
          </div>
          {openDate && (
            <div ref={dateref}>
              <DateRange
                onChange={(item) => setdate([item.selection])}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            </div>
          )}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropdown" onClick={() => setopenoption(!openoption)}>
            1 &bull; children 2 &bull; room 3 &bull; adult
          </div>
          {openoption && (
            <Gusetoption
              setopenoption={setopenoption}
              handelOptions={handelOptions}
              options={options}
            />
          )}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button onClick={handelsearch} className="headerSearchBtn">
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function Gusetoption({options, handelOptions, setopenoption}) {
  const optionref = useRef();
  useClickside(optionref, () => setopenoption(false), "optionDropdown");
  return (
    <div className="guestOptions" ref={optionref}>
      <Optionitem handelOptions={handelOptions} type={"adult"} options={options} minLimit={1} />
      <Optionitem handelOptions={handelOptions} type={"children"} options={options} minLimit={0} />
      <Optionitem handelOptions={handelOptions} type={"room"} options={options} minLimit={1} />
    </div>
  );
}

function Optionitem({options, type, minLimit, handelOptions}) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          onClick={() => handelOptions(type, "dec")}
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
        >
          -
        </button>
        <span className="">{options[type]}</span>
        <button onClick={() => handelOptions(type, "inc")} className="optionCounterBtn">
          +
        </button>
      </div>
    </div>
  );
}
