import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import "./style/App.css";
import Header from "./ui/Header";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddHotel from "./Feature/addHotel/AddHotel";
import Hotels from './Feature/Hotels/Hotels';
import Singlehotel from './Feature/Hotel/Singlehotel';


const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/Hotel/:id" element={<Singlehotel />} />
          <Route path="/Hotel/add" element={<AddHotel />} />
        </Routes>
    </QueryClientProvider>
  );
}

export default App;
