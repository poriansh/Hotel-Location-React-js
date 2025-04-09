// import {createContext, useContext, useEffect, useState} from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// const bookcontext = createContext();
// const BASE_URL = "http://localhost:5000/bookmarks";

// function Bookprovider({children}) {
//   const [currentbook, setcurrentbook] = useState({});
//   const [isLoadingcurrentbook, setisLoadingcurrentbook] = useState(false);
//   const [bookmark, setbookmark] = useState([]);

//   useEffect(() => {
//     async function fetchBookmarkList() {
//       try {
//         setisLoadingcurrentbook(true);
//         const { data } = await axios.get(`${BASE_URL}`);
//         setcurrentbook(data);
//         setbookmark(data);
//       } catch (error) {
//         toast.error(error.message);
//         setisLoadingcurrentbook(false);
//       } finally {
//         setisLoadingcurrentbook(false);
//       }
//     }
//     fetchBookmarkList();
//   }, []);

//   async function getbookmark(id) {
//     try {
//       setisLoadingcurrentbook(true);
//       const {data} = await axios.get(`${BASE_URL}/${id}`);
//       setcurrentbook(data);
//     } catch (error) {
//       setisLoadingcurrentbook(false);
//       toast.error(error.massage);
//     } finally {
//       setisLoadingcurrentbook(false);
//     }
//   }
//   async function createBookmark(newBookmark) {
//     try {
//       setisLoadingcurrentbook(true);
//       const {data} = await axios.post(`${BASE_URL}/`, newBookmark);
//       console.log(data);
//       setcurrentbook(data);
//       setbookmark((prev) => [...prev, data]);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setisLoadingcurrentbook(false);
//     }
//   }
//   async function deleteBookmark(id) {
//     try {
//       setisLoadingcurrentbook(true);
//        await axios.delete(`${BASE_URL}/${id}`);
      
//       setbookmark((prev) => prev.filter((item)=> item.id !== id) );
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setisLoadingcurrentbook(false);
//     }
//   }
//   return (
//     <bookcontext.Provider
//       value={{
//         bookmark,
//         currentbook,
//         getbookmark,
//         isLoadingcurrentbook,
//         createBookmark,
//         deleteBookmark,
//       }}
//     >
//       {children}
//     </bookcontext.Provider>
//   );
// }

// export default Bookprovider;

// export function useBook() {
//   return useContext(bookcontext);
// }
