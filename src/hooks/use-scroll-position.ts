import { useState, useEffect } from "react";

const useScrollPosition = (scrollRef: React.RefObject<HTMLElement>) => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const isNearTop = element.scrollTop < 40;
      setIsOnTop(isNearTop);
    };

    element.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return { isOnTop };
};

export default useScrollPosition;
