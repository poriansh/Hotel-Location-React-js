import {Suspense, lazy} from "react";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import "./style/App.css";
import Header from "./ui/Header";
import Bookprovider from "./context/Bookprovider";
import LoaderPage from "./ui/LoaderPage";
import {delayImport} from "./utils/delayLoading";

const Hotels = lazy(() => delayImport(() => import("./Feature/Hotels/Hotels"), 1000));

const Singlehotel = lazy(() => delayImport(() => import("./Feature/Hotel/Singlehotel"), 1000));
const Bookmarkleyout = lazy(() => delayImport(() => import("./components/Bookmarkleyout"), 1000));
const Bookmark = lazy(() => delayImport(() => import("./components/Bookmark"), 1000));
const SingleBookmark = lazy(() => delayImport(() => import("./components/SingleBookmark"), 1000));
const Addbookmark = lazy(() => delayImport(() => import("./components/Addbookmark"), 1000));

// Simple fallback UI

function App() {
  return (
    <Bookprovider>
      <Toaster />
      <Suspense fallback={<LoaderPage />}>
        <Header />
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/Hotel/:id" element={<Singlehotel />} />
          <Route path="/bookmark" element={<Bookmarkleyout />}>
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookmark />} />
            <Route path="add" element={<Addbookmark />} />
          </Route>
        </Routes>
      </Suspense>
    </Bookprovider>
  );
}

export default App;
