import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import otherProductsBathroom from "../../list-products/other-products-bathroom.json";
import Counter from "../../components/Counter";
import { useState } from "react";
import CommentBlock from "../../components/CommentBlock";

const ProductReduce = () => {
  const [hovering, setHovering] = useState(false);
  const handleEnter = () => {
    setHovering(true);
  };
  const handleLeave = () => {
    setHovering(false);
  };
  return (
    <>
      <div className="header header__search">
        <Header logoDark />
      </div>
      <div className="container product-detail-container ">
        {/* first section */}
        <p className="fs-14 text-grey-3">HOME / BATHROOM / REFILL PRODUCT</p>
        <div className="section-1 row gx-5">
          <div className="col-5">
            <div className="row mb-4">
              <div className="img-hover img-hover-zoom">
                <img
                  src="images/bathroom-refill/image 2.png"
                  alt="detail"
                  className="w-100"
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
                  </>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <img
                src="images/bathroom-refill/image 1-1.png"
                alt="detail"
                width={100}
              />
            </div>
          </div>
          <div className="col-7">
            <h4 className="text-dark fw-bold mb-3">BODY LOTION - LAVENDER </h4>
            <div className="d-flex justify-content-between stars">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1136 0.695722L7.56316 5.86696L1.85682 6.69889C0.833509 6.84731 0.423403 8.10887 1.1655 8.83144L5.2939 12.8544L4.31746 18.5373C4.1417 19.5645 5.2236 20.3339 6.12974 19.8535L11.2346 17.1702L16.3394 19.8535C17.2456 20.33 18.3275 19.5645 18.1517 18.5373L17.1753 12.8544L21.3037 8.83144C22.0458 8.10887 21.6357 6.84731 20.6123 6.69889L14.906 5.86696L12.3555 0.695722C11.8986 -0.226039 10.5745 -0.237757 10.1136 0.695722Z"
                  fill="#C98860"
                />
              </svg>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1136 0.695722L7.56316 5.86696L1.85682 6.69889C0.833509 6.84731 0.423403 8.10887 1.1655 8.83144L5.2939 12.8544L4.31746 18.5373C4.1417 19.5645 5.2236 20.3339 6.12974 19.8535L11.2346 17.1702L16.3394 19.8535C17.2456 20.33 18.3275 19.5645 18.1517 18.5373L17.1753 12.8544L21.3037 8.83144C22.0458 8.10887 21.6357 6.84731 20.6123 6.69889L14.906 5.86696L12.3555 0.695722C11.8986 -0.226039 10.5745 -0.237757 10.1136 0.695722Z"
                  fill="#C98860"
                />
              </svg>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1136 0.695722L7.56316 5.86696L1.85682 6.69889C0.833509 6.84731 0.423403 8.10887 1.1655 8.83144L5.2939 12.8544L4.31746 18.5373C4.1417 19.5645 5.2236 20.3339 6.12974 19.8535L11.2346 17.1702L16.3394 19.8535C17.2456 20.33 18.3275 19.5645 18.1517 18.5373L17.1753 12.8544L21.3037 8.83144C22.0458 8.10887 21.6357 6.84731 20.6123 6.69889L14.906 5.86696L12.3555 0.695722C11.8986 -0.226039 10.5745 -0.237757 10.1136 0.695722Z"
                  fill="#C98860"
                />
              </svg>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1136 0.695722L7.56316 5.86696L1.85682 6.69889C0.833509 6.84731 0.423403 8.10887 1.1655 8.83144L5.2939 12.8544L4.31746 18.5373C4.1417 19.5645 5.2236 20.3339 6.12974 19.8535L11.2346 17.1702L16.3394 19.8535C17.2456 20.33 18.3275 19.5645 18.1517 18.5373L17.1753 12.8544L21.3037 8.83144C22.0458 8.10887 21.6357 6.84731 20.6123 6.69889L14.906 5.86696L12.3555 0.695722C11.8986 -0.226039 10.5745 -0.237757 10.1136 0.695722Z"
                  fill="#C98860"
                />
              </svg>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1136 0.695722L7.56316 5.86696L1.85682 6.69889C0.833509 6.84731 0.423403 8.10887 1.1655 8.83144L5.2939 12.8544L4.31746 18.5373C4.1417 19.5645 5.2236 20.3339 6.12974 19.8535L11.2346 17.1702L16.3394 19.8535C17.2456 20.33 18.3275 19.5645 18.1517 18.5373L17.1753 12.8544L21.3037 8.83144C22.0458 8.10887 21.6357 6.84731 20.6123 6.69889L14.906 5.86696L12.3555 0.695722C11.8986 -0.226039 10.5745 -0.237757 10.1136 0.695722Z"
                  fill="#C98860"
                />
              </svg>
            </div>
            <p className="fs-4 fw-bold mt-3">$0.8/oz</p>

            <p className="fw-light">
              {" "}
              This moisturizing body lotion with MSM is all natural with no
              artificial ingredients and no parabens. Daily use leaves skin soft
              and youthful. Pure essential oils are used for their therapeutic
              and fragrance benefits, and orange essential oils provide
              anti-oxidant properties.
            </p>
            <p className="fw-bold">Choose container for lotion</p>
            <div className="form-group">
              <select className="form-select border-bot mb-4" aria-label="Size">
                <option value="2oz">4oz with new bottle </option>
                <option value="3oz">8oz with new bottle</option>
                <option value="4oz">16oz with new bottle</option>
                <option value="2oz">4oz refill </option>
                <option value="3oz">8oz refill</option>
                <option value="4oz">16oz refill</option>
              </select>
            </div>
            <Counter className="fs-4 fw-bold mx-3" />
            <div className="buy-group">
              <button className="btn btn-lg btn-outline-primary">
                ADD TO CART
              </button>
              <Link to="/cart">
                <button className="btn btn-lg btn-primary">BUY NOW</button>
              </Link>
            </div>
          </div>
        </div>
        {/* second section */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="section-2">
            <Col sm={5}>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">USES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">INGREDIENTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">ADDITIONAL INFORMATION</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  Purified water, Organic aloe vera juice, Organic MSM
                  (methylsulfonylmethane), blended coconut wax, Organic sweet
                  almond oil, palm oil ester, vitamin C, vegetable glycerin,
                  Organic flaxseed oil, borage oil, Organic arnica extract,
                  Organic chamomile extract, Organic calendula extract, vitamin
                  E, sodium levulinate, rose oil, Bulgarian lavender pure and
                  natural essential oil blend
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Finally a bamboo toothbrush with different levels of
                  bristles!I have been using bamboo toothbrushes for a while
                  now, but they were also too soft. I am so glad that I finally
                  found one with harder bristles!
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Favourite bamboo tooth brush So lovely that you can purchase
                  these in hard. Have tried different bamboo toothbrushes
                  however this one is one of my favourites.
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* section 3 */}
        <div className="section-3">
          <h2 className="text-center">OTHER GREAT PRODUCT</h2>
          <div className="divider divider__dark"></div>
          <div className="other-products">
            <ListProducts
              products={otherProductsBathroom}
              col3
              paging={false}
            />
          </div>
        </div>
        <div className="section-4">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="d-flex justify-content-between reviews-stars">
                  <img src="images/star.svg" alt="" />
                  <img src="images/star.svg" alt="" />
                  <img src="images/star.svg" alt="" />
                  <img src="images/star.svg" alt="" />
                  <img src="images/star.svg" alt="" />
                  <div className="ms-4">4 reviews</div>
                </div>
              </div>
              <CommentBlock
                name="YvanaVerified"
                review="Finally a bamboo toothbrush with different levels of bristles!I have been using bamboo toothbrushes for a while now, but they were also too soft. I am so glad that I finally found one with harder bristles!"
              />
              <CommentBlock
                name="CharlotteVerified"
                review="Favorite bamboo toothbrushSo lovely that you can purchase these in hard. Have tried different bamboo toothbrushes however this one is one of my favorites."
              />
            </div>
            <div className="col-md-6">
              <p className="text-uppercase fw-bold">Write your reviews</p>
              <div
                className="d-flex justify-content-between"
                style={{ width: "170px" }}
              >
                <img src="images/vector.png" alt="star" />
                <img src="images/vector.png" alt="star" />
                <img src="images/vector.png" alt="star" />
                <img src="images/vector.png" alt="star" />
                <img src="images/vector.png" alt="star" />
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <label htmlFor="name">User name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control border-bot"
                    required=""
                    autoFocus=""
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="email">User name</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control border-bot"
                    required=""
                    autoFocus=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Title</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control border-bot"
                    required=""
                    autoFocus=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Review</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control border-bot"
                    required=""
                    autoFocus=""
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-lg btn-primary" type="submit">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductReduce;
