import { useEffect } from "react";

const useScroll = (isActive: boolean) => {

  useEffect(() => {
    document.body.style.overflow = isActive ? 'unset' : 'hidden';
  }, [isActive]);

};

export default useScroll;
