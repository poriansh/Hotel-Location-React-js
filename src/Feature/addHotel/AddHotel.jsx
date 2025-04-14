import {useState} from "react";
import useAddHotel from "./useAddHotel";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import TextFielde from "../../ui/TextFielde";

function AddHotel() {
  const [Name, setName] = useState("");
  const [Loacation, setLoacation] = useState("");
  const [Price, setPrice] = useState(0);
  const [room, setroom] = useState(1);
  const {AddNewHotel} = useAddHotel();
  const navigate = useNavigate();

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 8) + 1;
    return `/img/${randomIndex}.jpg`;
  };

  const imagePath = getRandomImage();

  const handelsubmit = async (e) => {
    e.preventDefault();
    if (!Name || !Loacation || Price <= 0 || room <= 0) {
      toast.error("Please fill all fields");
      return;
    }

    const newHotel = {
      id: Date.now(),
      name: Name,
      smart_location: Loacation,
      price: Price,
      accommodates: room,
      thumbnail_url: imagePath,
      xl_picture_url: imagePath,
    };
    await AddNewHotel(newHotel);
    navigate("/");
  };

  return (
    <div className="py-6 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[var(--text-700)]">New Hotel</h2>
      <div className="bg-white p-6 rounded-xl shadow-md border border-[var(--primary-100)]">
        <form className="space-y-4" onSubmit={handelsubmit}>
          <TextFielde
            lable="name"
            value={Name}  
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
          <TextFielde
            lable="Location"
            value={Loacation}
            onChange={(e) => setLoacation(e.target.value)}
            type="text"
            id="location"
          />
          <TextFielde
            lable="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
          />
          <TextFielde
            lable="Room"
            value={room}
            onChange={(e) => setroom(e.target.value)}
            type="number"
            id="room"
          />
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-[var(--text-300)] text-[var(--text-700)] px-4 py-2 rounded-md hover:bg-[var(--text-100)] transition"
            >
              &larr; Back
            </button>
            <button
              type="submit"
              className="bg-[var(--primary-600)] text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddHotel;
