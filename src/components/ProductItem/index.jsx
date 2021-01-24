/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ item }) => {
  const [hovering, setHovering] = useState(false);
  const handleEnter = () => {
    setHovering(true);
  };
  const handleLeave = () => {
    setHovering(false);
  };
  return (
    <Link to={item.type === "refill" ? "/product-refill" : "/product-reduce"}>
      <div className="img-hover">
        <img
          className="text-center"
          src={item.imgSrc}
          alt={item.title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
        {hovering && (
          <>
            <button
              className="like link"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <img src="images/Group 67.png" alt="" />
            </button>
            <button
              className="cart link"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <img src="images/Group 68.png" alt="" />
            </button>
          </>
        )}
      </div>
      <p className="mt-2 fs-14 text-light">{item.category}</p>
      <h6 className="mt-3 text-dark fs-18 ">{item.title}</h6>
      <h6 className="mt-1 text-dark fs-18 ">{item.price}</h6>
    </Link>
  );
};
