import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FooterItems({ data }) {

  const [toggleImg, setToggleImg] = useState(window.innerWidth <= 1024 ? 0 : 1);

  const handleResize = () => {
    const screenSize = window.innerWidth;
    setToggleImg(screenSize <= 1024 ? 0 : 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="flex lg:flex-col gap-y-8 gap-x-8">
      {data.map((item, index) => (
        <Link key={index} className="flex items-center z-20 w-8 lg:w-10" to={item.link}>
          <img className="w-full" src={item.img[toggleImg]} alt="" />
        </Link>
      ))}
    </div>
  );
}
