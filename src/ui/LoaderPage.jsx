import {LoaderIcon} from "react-hot-toast";

export default function LoaderPage() {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        maxHeight: "90vh",
        height: "100vh",
      }}
    >
      <LoaderIcon style={{width: "1.3rem", height: "1.3rem"}} />
    </div>
  );
}
