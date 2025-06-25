import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollFloat() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl hover:scale-110 hover:shadow-cyan-500/50 transition"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
