
import { Toaster } from "react-hot-toast";
import "./style/App.css";
import Header from "./ui/Header";
import { Route, Routes } from "react-router-dom";
import Appleyout from "./components/Appleyout";
import Hotel from "./components/Hotel";
import Hotelprovider from "./context/Hotelprovider";
import Singlehotel from "./components/Singlehotel";
import Bookmarkleyout from "./components/Bookmarkleyout";
import Bookprovider from "./context/Bookprovider";
import Bookmark from "./components/Bookmark";
import SingleBookmark from "./components/SingleBookmark";
import Addbookmark from "./components/Addbookmark";
import Home from "./page/Home";

function App() {
  return (
    <Bookprovider>
      <Hotelprovider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hotels" element={<Appleyout />}>
            <Route index element={<Hotel />} />
            <Route path=":id" element={<Singlehotel />} />
          </Route>
          <Route path="/bookmark" element={<Bookmarkleyout />}>
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookmark />} />
            <Route path="add" element={<Addbookmark />} />
          </Route>
        </Routes>
      </Hotelprovider>
    </Bookprovider>
  );
}

export default App;

