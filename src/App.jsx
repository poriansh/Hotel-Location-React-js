import {Suspense, lazy} from "react";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import "./style/App.css";
import Header from "./ui/Header";
import LoaderPage from "./ui/LoaderPage";
import {delayImport} from "./utils/delayLoading";
import AddHotel from "./Feature/addHotel/addHotel";

const Hotels = lazy(() => delayImport(() => import("./Feature/Hotels/Hotels"), 1000));

const Singlehotel = lazy(() => delayImport(() => import("./Feature/Hotel/Singlehotel"), 1000));

// Simple fallback UI

function App() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/Hotel/:id" element={<Singlehotel />} />
        <Route path="/Hotel/add" element={<AddHotel />} />
      </Routes>
    </Suspense>
  );
}

export default App;
