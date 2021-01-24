import { Link } from "react-router-dom";

export const ProductItem = ({ item }) => (
  <Link to={item.type === "refill" ? "/product-refill" : "/product-reduce"}>
    <img className="text-center" src={item.imgSrc} alt={item.title} />
    <p className="mt-2 fs-14 text-light">{item.category}</p>
    <h6 className="mt-3 text-dark fs-18 ">{item.title}</h6>
    <h6 className="mt-1 text-dark fs-18 ">{item.price}</h6>
  </Link>
);
