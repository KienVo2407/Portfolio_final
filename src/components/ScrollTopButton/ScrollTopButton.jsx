// import { useState, useEffect } from "react";
// import { useLenis } from "@studio-freight/react-lenis"; // adjust import if needed

const ScrollTopButton = () => {
  const lenis = useLenis(); // get the instance
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      setIsVisible(lenis.scroll > 300); // or whatever threshold you want
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5, easing: "easeInOutQuad" });
    }
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-top-btn">
        ↑
      </button>
    )
  );
};

export default ScrollTopButton;
