import {Toaster} from "react-hot-toast";
import "./style/App.css";
import Header from "./ui/Header";
import {Route, Routes} from "react-router-dom";
import Hotel from "./Feature/Hotel/Hotel";
import Singlehotel from "./components/Singlehotel";
import Bookmarkleyout from "./components/Bookmarkleyout";
import Bookprovider from "./context/Bookprovider";
import Bookmark from "./components/Bookmark";
import SingleBookmark from "./components/SingleBookmark";
import Addbookmark from "./components/Addbookmark";
import Home from "./page/Home";
import HotelLeyout from "./page/HotelLeyout";

function App() {
  return (
    <Bookprovider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hotels" element={<HotelLeyout />}>
            <Route index element={<Hotel />} />
            <Route path=":id" element={<Singlehotel />} />
          </Route>
          <Route path="/bookmark" element={<Bookmarkleyout />}>
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookmark />} />
            <Route path="add" element={<Addbookmark />} />
          </Route>
        </Routes>
    </Bookprovider>
  );
}

export default App;
