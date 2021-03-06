import classNames from "classnames";
import { useRef, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = ({ logoDark, withDivider }) => {
  const [isSearch, setSearch] = useState(false);
  const inputRef = useRef(null);

  const handleOpenSearch = () => {
    setSearch(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 1000);
  };

  const history = useHistory();

  return (
    <>
      <nav className="site-header">
        <div
          className={classNames("container d-flex justify-content-between", {
            "is-search": isSearch,
          })}
        >
          <div
            className={"d-flex justify-content-between"}
            style={{ width: "427px" }}
          >
            <div
              className={classNames("search-bar", {
                "is-search": isSearch,
              })}
            >
              <div className="search-span">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <path
                    d="M14.6595 15.505L19.9995 21M17.2895 9.05C17.2895 13.4959 13.6429 17.1 9.14452 17.1C4.64616 17.1 0.999512 13.4959 0.999512 9.05C0.999512 4.6041 4.64616 1 9.14452 1C13.6429 1 17.2895 4.6041 17.2895 9.05Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <form onSubmit={() => history.push("/search")}>
                <input
                  type="text"
                  className="border-bot"
                  id="search"
                  placeholder="Search Goodlife"
                  ref={inputRef}
                  autoFocus
                  autoComplete="off"
                />
              </form>
              <span onClick={() => setSearch(false)}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="button"
                >
                  <path
                    d="M6.43407 6.4682C6.79465 6.10558 7.38091 6.10393 7.74353 6.4645L12.5031 11.1972L17.2626 6.4645C17.6252 6.10393 18.2115 6.10558 18.572 6.4682C18.9326 6.83081 18.9309 7.41707 18.5683 7.77765L13.8162 12.503L18.5683 17.2284C18.9309 17.589 18.9326 18.1752 18.572 18.5378C18.2115 18.9005 17.6252 18.9021 17.2626 18.5415L12.5031 13.8088L7.74353 18.5415C7.38091 18.9021 6.79465 18.9005 6.43407 18.5378C6.0735 18.1752 6.07515 17.589 6.43777 17.2284L11.1899 12.503L6.43777 7.77765C6.07515 7.41707 6.0735 6.83081 6.43407 6.4682Z"
                    fill="#999999"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5ZM12.5 1.85185C6.61919 1.85185 1.85185 6.61919 1.85185 12.5C1.85185 18.3808 6.61919 23.1481 12.5 23.1481C18.3808 23.1481 23.1481 18.3808 23.1481 12.5C23.1481 6.61919 18.3808 1.85185 12.5 1.85185Z"
                    fill="#999999"
                  />
                </svg>
              </span>
            </div>
            <NavLink
              activeClassName="active"
              to="/bathroom"
              className="d-md-inline-block fs-14"
            >
              Bathroom
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/kitchen"
              className="d-md-inline-block fs-14"
            >
              Kitchen
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/travel"
              className="d-md-inline-block fs-14"
            >
              For travel
            </NavLink>
          </div>
          <Link to="/home" className="fs-14 d-md-inline-block logo">
            <img
              src={logoDark ? "images/logo-dark.png" : "images/logo.png"}
              alt="good-life"
              width={203}
            />
          </Link>
          <div
            className="d-flex justify-content-between align-items-end"
            style={{ width: "421px" }}
          >
            <NavLink
              activeClassName="active"
              to="/about-us"
              className="d-md-inline-block fs-14"
            >
              About Us
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/blog"
              className="d-md-inline-block fs-14"
            >
              Blog
            </NavLink>
            <div>
              <button className="link" onClick={handleOpenSearch}>
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <path
                    d="M14.6595 15.505L19.9995 21M17.2895 9.05C17.2895 13.4959 13.6429 17.1 9.14452 17.1C4.64616 17.1 0.999512 13.4959 0.999512 9.05C0.999512 4.6041 4.64616 1 9.14452 1C13.6429 1 17.2895 4.6041 17.2895 9.05Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <Link to="/account">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3"
                >
                  <path
                    d="M20.0536 17.1895C20.0536 14.0317 15.7906 11.4739 10.5273 11.4739C5.264 11.4739 1.00098 14.0317 1.00098 17.1895"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.6464 11.4787C13.54 11.4787 15.8858 9.13295 15.8858 6.23934C15.8858 3.34573 13.54 1 10.6464 1C7.75269 1 5.4069 3.34573 5.4069 6.23934C5.4069 9.13295 7.75269 11.4787 10.6464 11.4787Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20.0536 17.1895V20.3189C20.0536 20.5999 19.9583 21 19.6821 21H1.61066C1.33916 21 1.00098 20.5904 1.00098 20.3189V17.1895"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              <Link to="/cart">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-3"
                >
                  <path
                    d="M21.3928 4.0303L20.4383 3.73203L20.4378 3.73375L21.3928 4.0303ZM18.8946 12.0756L19.849 12.3739L19.8496 12.3721L18.8946 12.0756ZM6.88467 12.0016L7.84091 11.7089L7.8381 11.7L6.88467 12.0016ZM4.38646 4.10432L5.33993 3.8027L5.33719 3.7943L4.38646 4.10432ZM3.43892 4.08106C3.64326 4.59415 4.22486 4.84444 4.73795 4.64009C5.25104 4.43575 5.50133 3.85415 5.29699 3.34106L3.43892 4.08106ZM4.44575 1.20367C4.2414 0.690577 3.65981 0.440288 3.14672 0.644632C2.63362 0.848975 2.38334 1.43057 2.58768 1.94366L4.44575 1.20367ZM7.35191 13.4689C7.90419 13.4689 8.35191 13.0212 8.35191 12.4689C8.35191 11.9166 7.90419 11.4689 7.35191 11.4689V13.4689ZM6.94479 12.876L7.88333 13.2212L7.89386 13.1925L7.90262 13.1633L6.94479 12.876ZM4.70627 16.0654C4.51563 16.5837 4.78128 17.1584 5.29961 17.3491C5.81795 17.5397 6.39269 17.2741 6.58334 16.7557L4.70627 16.0654ZM1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V0ZM3.31315 2C3.86544 2 4.31315 1.55228 4.31315 1C4.31315 0.447715 3.86544 0 3.31315 0V2ZM5.62631 15.7297C5.07402 15.7297 4.62631 16.1775 4.62631 16.7297C4.62631 17.282 5.07402 17.7297 5.62631 17.7297V15.7297ZM19.0426 17.7297C19.5949 17.7297 20.0426 17.282 20.0426 16.7297C20.0426 16.1775 19.5949 15.7297 19.0426 15.7297V17.7297ZM9.75688 19.2512C9.75688 19.6902 9.41724 19.9999 9.05439 19.9999V21.9999C10.5721 21.9999 11.7569 20.7438 11.7569 19.2512H9.75688ZM9.05439 19.9999C8.69155 19.9999 8.35191 19.6902 8.35191 19.2512H6.35191C6.35191 20.7438 7.53673 21.9999 9.05439 21.9999V19.9999ZM8.35191 19.2512C8.35191 18.8122 8.69155 18.5024 9.05439 18.5024V16.5024C7.53673 16.5024 6.35191 17.7585 6.35191 19.2512H8.35191ZM9.05439 18.5024C9.41724 18.5024 9.75688 18.8122 9.75688 19.2512H11.7569C11.7569 17.7585 10.5721 16.5024 9.05439 16.5024V18.5024ZM17.0017 19.2512C17.0017 19.6902 16.6621 19.9999 16.2992 19.9999V21.9999C17.8169 21.9999 19.0017 20.7438 19.0017 19.2512H17.0017ZM16.2992 19.9999C15.9364 19.9999 15.5967 19.6902 15.5967 19.2512H13.5967C13.5967 20.7438 14.7815 21.9999 16.2992 21.9999V19.9999ZM15.5967 19.2512C15.5967 18.8122 15.9364 18.5024 16.2992 18.5024V16.5024C14.7815 16.5024 13.5967 17.7585 13.5967 19.2512H15.5967ZM16.2992 18.5024C16.6621 18.5024 17.0017 18.8122 17.0017 19.2512H19.0017C19.0017 17.7585 17.8169 16.5024 16.2992 16.5024V18.5024ZM4.69643 4.77584H21.0828V2.77584H4.69643V4.77584ZM21.0828 4.77584C21.1285 4.77584 21.1265 4.77793 21.1017 4.77442C21.0871 4.77234 20.9619 4.75597 20.8155 4.66238C20.6301 4.54388 20.4783 4.34417 20.4277 4.09733C20.387 3.89814 20.4309 3.75573 20.4383 3.73203L22.3473 4.32857C22.3894 4.19383 22.4419 3.96409 22.3871 3.69637C22.3226 3.381 22.1341 3.13157 21.8926 2.97721C21.6901 2.84776 21.4894 2.80942 21.3833 2.79433C21.267 2.7778 21.1574 2.77584 21.0828 2.77584V4.77584ZM20.4378 3.73375L17.9395 11.779L19.8496 12.3721L22.3478 4.32685L20.4378 3.73375ZM17.9401 11.7773C17.9433 11.767 17.9393 11.7752 17.9435 11.7701C17.9469 11.766 17.9755 11.7304 18.0372 11.6887C18.0929 11.651 18.2452 11.5614 18.4736 11.5614V13.5614C18.7829 13.5614 19.0197 13.4388 19.1586 13.3447C19.3035 13.2466 19.4143 13.1312 19.494 13.0334C19.6509 12.8409 19.7764 12.6063 19.849 12.3739L17.9401 11.7773ZM18.4736 11.5614H7.30566V13.5614H18.4736V11.5614ZM7.30566 11.5614C7.45857 11.5614 7.58037 11.6007 7.66092 11.6377C7.74006 11.674 7.79362 11.7143 7.82231 11.7382C7.87593 11.783 7.89424 11.8142 7.88589 11.802C7.86948 11.778 7.84748 11.7305 7.84087 11.7089L5.92847 12.2943C5.99125 12.4994 6.09879 12.7318 6.23505 12.931C6.30303 13.0304 6.40346 13.159 6.54035 13.2733C6.66225 13.3751 6.9276 13.5614 7.30566 13.5614V11.5614ZM7.8381 11.7L5.33989 3.80271L3.43303 4.40593L5.93124 12.3032L7.8381 11.7ZM5.33719 3.7943C5.35757 3.8568 5.38407 3.97718 5.35732 4.13271C5.32873 4.29891 5.2476 4.4533 5.12865 4.57103C5.01759 4.68095 4.90304 4.73066 4.83253 4.75249C4.76202 4.77433 4.71261 4.77584 4.69643 4.77584V2.77584C4.45619 2.77584 4.04697 2.82767 3.72177 3.14952C3.32595 3.54127 3.31824 4.05403 3.43573 4.41433L5.33719 3.7943ZM5.29699 3.34106L4.44575 1.20367L2.58768 1.94366L3.43892 4.08106L5.29699 3.34106ZM7.35191 11.4689C6.9128 11.4689 6.58976 11.6985 6.41108 11.8758C6.21522 12.0701 6.06796 12.3187 5.98697 12.5886L7.90262 13.1633C7.89102 13.202 7.86867 13.247 7.8197 13.2956C7.79395 13.3211 7.74892 13.3593 7.67956 13.3941C7.61079 13.4285 7.49859 13.4689 7.35191 13.4689V11.4689ZM6.00626 12.5308L4.70627 16.0654L6.58334 16.7557L7.88333 13.2212L6.00626 12.5308ZM1 2H3.31315V0H1V2ZM5.62631 17.7297H19.0426V15.7297H5.62631V17.7297Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {withDivider && (
        <div
          className={classNames("container w-100 divider divider__secondary", {
            "border-top-0": isSearch,
          })}
        ></div>
      )}
    </>
  );
};

export default Header;
