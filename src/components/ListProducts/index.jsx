import Pagination from "../Pagination";
import classNames from "classnames";
import { ProductItem } from "../ProductItem";

const ListProducts = ({ products, col4, col3, col5, paging = true }) => {
  return (
    <div className="list-products row gy-5 row-cols-lg-5">
      {products.map((item, index) => (
        <div
          className={classNames("item col-xs-12", {
            "col-xl-4": col4,
            "col-xl-3": col3,
            "row-cols-5": col5,
          })}
          key={index}
        >
          <ProductItem item={item} />
        </div>
      ))}
      {paging && <Pagination />}
    </div>
  );
};

export default ListProducts;
