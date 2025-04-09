// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useBook } from "../context/Bookprovider";
// import ReactCountryFlag from "react-country-flag";
// import Loader from "../ui/Loader";



// function SingleBookmark() {

//   const {id} = useParams()
//  const {currentbook, getbookmark, isLoadingcurrentbook} = useBook();
//   useEffect(() => {
//     getbookmark(id);
//   },[id])
//   const navigate = useNavigate()
//   if(isLoadingcurrentbook || !currentbook) return <Loader/>
//   return (
//     <div className="currentBookmark">
//       <button onClick={() => navigate(-1)} className="btn btn--back">
//         &larr; Back
//       </button>
//       <h2>{currentbook.cityName}</h2>
//       <div className={`bookmarkItem`}>
//         <ReactCountryFlag svg countryCode={currentbook.countryCode} />
//         &nbsp; <strong>{currentbook.cityName}</strong> &nbsp;
//         <span>{currentbook.country}</span>
//       </div>
//     </div>
//   );
// }

// export default SingleBookmark
