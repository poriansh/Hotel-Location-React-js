import {useEffect} from "react";

function useClickside(ref, cb, exeption, listenCapturing = true) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target) && e.target.id !== exeption) {
        cb();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [cb, listenCapturing]);
  return;
}

export default useClickside;
