import {useEffect} from "react";

function useClickside(ref,cb,exptionid) {
  useEffect(() => {
      document.body.addEventListener("click", (e) => {

        if (ref.current && !ref.current.contains(e.target) && e.target.id !== exptionid) {
            cb()
        }
    });
  }, [ref,cb,exptionid]);
  return ;
}

export default useClickside;
