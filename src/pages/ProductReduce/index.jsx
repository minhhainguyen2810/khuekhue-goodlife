import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import otherProductsBathroom from "../../list-products/other-products-bathroom.json";
import Counter from "../../components/Counter";
import { useState } from "react";

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
        <p className="fs-14 text-grey-3">HOME / BATHROOM / REDUCE PRODUCT</p>
        <div className="section-1 row gx-5">
          <div className="col-5">
            <div className="row mb-4">
              <div className="img-hover">
                <img
                  src="images/kitchen/image 1-1.png"
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
            </div>
            <div className="d-flex justify-content-between">
              <img
                src="images/kitchen/image 1-1.png"
                alt="detail"
                width={100}
              />
              <img
                src="images/kitchen/image 1-2.png"
                alt="detail"
                width={100}
              />
              <img
                src="images/kitchen/image 1-3.png"
                alt="detail"
                width={100}
              />
              <img
                src="images/kitchen/image 1-4.png"
                alt="detail"
                width={100}
              />
            </div>
          </div>
          <div className="col-7">
            <h4 className="text-dark fw-bold mb-3">BAMBOO TOOTHBRUSH</h4>
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
            <p className="fs-4 fw-bold mt-3">$4.99</p>
            <div className="row fw-light">
              <div className="col-6">Material:</div>
              <div className="col-6">Size: 19 cm (7.5 in)</div>
            </div>
            <p className="fw-light"> Handle: 100% natural bamboo</p>
            <p className="fw-light"> Bristles: 100% BPA-free nylon</p>
            <p className="fw-bold">Quantity</p>
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
      </div>
      <Footer />
    </>
  );
};

export default ProductReduce;
