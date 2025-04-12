import {LoaderIcon} from "react-hot-toast";

function Loader() {
  return (
    <div className="flex justify-center items-center gap-4 my-12">
      <p className="text-black">Loading Data...</p>
      <LoaderIcon className="w-20 h-20" />
    </div>
  );
}

export default Loader;
