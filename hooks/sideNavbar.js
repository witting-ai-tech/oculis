import { useEffect } from "react";

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref?.current || ref?.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("pointerdown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}


