import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useReducer, useRef, useState} from "react";
import {MdLocationOn} from "react-icons/md";
import {createSearchParams, NavLink, useNavigate} from "react-router-dom";
import useClickside from "../hooks/useClickside";

function optionReducer(option, {type, payload}) {
  switch (type) {
    case "inc":
      return {
        ...option,
        [payload]: option[payload] + 1, // کاهش  مقدار
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

function Header() {
  const [openOption, setopenoption] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  const navigate = useNavigate();
  const [option, dispatch] = useReducer(optionReducer, {
    room: 1,
  });

  const handelsearch = () => {
    const enCodedParams = createSearchParams({
      // date: JSON.stringify(date),
      searchvalue: searchvalue,
      room: JSON.stringify(option.room),
    });
    navigate(`/?${enCodedParams}`);
  };

  return (
    <div className="header">
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
          <div id="optionDropdown" onClick={() => setopenoption(!openOption)}>
            room
          </div>
          {openOption && (
            <SearchOption option={option} dispatch={dispatch} setopenoption={setopenoption} />
          )}
          <span className="seperator"></span>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Login</NavLink>
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

function SearchOption({option, dispatch, setopenoption}) {
  const ref = useRef();
  useClickside(ref, () => setopenoption(false), "optionDropdown");
  return (
    <div className="guestOptions" ref={ref}>
      <Optionitem option={option} dispatch={dispatch} type="room" minLimit={1} />
    </div>
  );
}

function Optionitem({type, minLimit, option, dispatch}) {
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
