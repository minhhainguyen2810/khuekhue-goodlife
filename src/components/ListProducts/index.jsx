import Pagination from "../Pagination";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ListProducts = ({ products, col4, col3, paging = true }) => {
  return (
    <div className="list-products row gy-5">
      {products.map((item, index) => (
        <div
          className={classNames("item col-xs-12 col-lg-6", {
            "col-xl-4": col4,
            "col-xl-3": col3,
          })}
          key={index}
        >
          <Link to="/product-detail" key={index}>
            <img className="text-center" src={item.imgSrc} alt={item.title} />
            <p className="mt-2 fs-14 text-light">{item.category}</p>
            <h6 className="mt-3 text-dark fs-18 ">{item.title}</h6>
            <h6 className="mt-1 text-dark fs-18 ">{item.price}</h6>
          </Link>
        </div>
      ))}
      {paging && <Pagination />}
    </div>
  );
};

export default ListProducts;
