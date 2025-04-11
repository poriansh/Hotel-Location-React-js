import {useState} from "react";
import useAddHotel from "./useAddHotel";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function AddHotel() {
  const [Name, setName] = useState("");
  const [Loacation, setLoacation] = useState("");
  const [Price, setPrice] = useState(0);
  const [room, setroom] = useState(1);
  const {AddNewHotel} = useAddHotel();
  const navigate = useNavigate();

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 8) + 1; // بین 1 تا 8
    return `/public/img/${randomIndex}.jpg`;
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
    <div className="Addhotel">
      <h2> New Hotel</h2>
      <div className="Addhotel-werraper">
        <form className="form" onSubmit={handelsubmit}>
          <div className="formControl">
            <label htmlFor="name">name</label>
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="formControl">
            <label htmlFor="Loacation">Loacation</label>
            <input
              value={Loacation}
              onChange={(e) => setLoacation(e.target.value)}
              type="text"
              name="Loacation"
              id="Loacation"
            />
          </div>
          <div className="formControl">
            <label htmlFor="price">price</label>
            <input
              value={Price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
              name="price"
              id="price"
            />
          </div>
          <div className="formControl">
            <label htmlFor="room">room</label>
            <input
              value={room}
              onChange={(e) => setroom(Number(e.target.value))}
              type="number"
              name="room"
              id="room"
            />
          </div>
          <div className="buttons">
            <button className="btn btn--back">&larr; Back</button>
            <button className="btn btn--primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddHotel;
