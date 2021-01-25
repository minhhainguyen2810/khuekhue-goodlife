import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import classNames from "classnames";

const Pagination = () => {
  //   let { url } = useRouteMatch();
  let query = useQuery();

  return (
    <nav className="pagination w-100">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <Link to={`?page=1`} className={classNames("page-link border-0 q")}>
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`?page=1`}
            className={classNames("page-link border-0", {
              active: query.get("page") === "1",
            })}
          >
            1
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`?page=2`}
            className={classNames("page-link border-0", {
              active: query.get("page") === "2",
            })}
          >
            2
          </Link>
        </li>
        <li className="page-item">
          <Link
            to={`?page=3`}
            className={classNames("page-link border-0", {
              active: query.get("page") === "3",
            })}
          >
            3
          </Link>
        </li>
        <li className="page-item">
          <Link to={`?page=3`} className="page-link border-0">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
