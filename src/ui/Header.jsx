import {CalendarDaysIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useReducer, useRef, useState} from "react";
import {MdLocationOn} from "react-icons/md";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {NavLink} from "react-router-dom";
import useClickside from "../hooks/useClickside";

function Header() {
  const [openOption, setopenoption] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  // const navigate = useNavigate();

  // const [date, setdate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  // const [openDate, setOpendate] = useState(false);
  // const handelsearch = () => {
  //   const enCodedParams = createSearchParams({
  //     date: JSON.stringify(date),
  //     destination: destination,
  //     options: JSON.stringify(options),
  //   });
  //   navigate({
  //     pathname: "/Hotels",
  //     search: enCodedParams.toString(),
  //   });
  // };

  // const dateref = useRef()
  // useClickside(dateref, () => setOpendate(false), "dateDropdown1");
  return (
    <div className="header">
      <NavLink to={"/"}>Home</NavLink>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn />
          <input
            value={searchvalue}
            onChange={(e) => setsearchvalue(e.target.value)}
            type="text"
            placeholder="where to go ?"
            className="headerSearchInput"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <CalendarDaysIcon className="icon-calender" />
          {/* <div className="dateDropDown" id="dateDropdown1" onClick={() => setOpendate(!openDate)}>
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
          )} */}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropdown" onClick={() => setopenoption(!openOption)}>
            1.children 2.room
          </div>
          {openOption && <SearchOption setopenoption={setopenoption} />}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function SearchOption({ setopenoption}) {
  const ref = useRef();
  useClickside(ref, () => setopenoption(false), "optionDropdown");
  return (
    <div className="guestOptions" ref={ref}>
      <Optionitem  type="children"  minLimit={0} />
      <Optionitem  type="room"  minLimit={1} />
    </div>
  );
}

function optionReducer(option, {type, payload}) {
  switch (type) {
    case "inc":
      return {
        ...option,
        [payload]: option[payload] + 1, // افزایش مقدار
      };
    case "dec":
      return {
        ...option,
        [payload]: option[payload] - 1, // افزایش مقدار
      };
    default:
      return option;
  }
}

function Optionitem({ type, minLimit}) {
  const [option, dispatch] = useReducer(optionReducer, {
    children: 0,
    room: 1,
  });
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          onClick={() => dispatch({type: "dec", payload: type})}
          className="optionCounterBtn"
          disabled={option[type] <= minLimit}
        >
          -
        </button>
        <span className="">{option[type]}</span>
        <button onClick={() => dispatch({type: "inc", payload: type})} className="optionCounterBtn">
          +
        </button>
      </div>
    </div>
  );
}
