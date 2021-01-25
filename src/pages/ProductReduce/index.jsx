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
    setHovering(true);
  };

  return (
    <>
      <div className="header header__search">
        <Header logoDark />
      </div>
      <div className="container product-detail-container ">
        {/* first section */}
        <p className="fs-14 text-grey-3">HOME / KITCHEN / REDUCE PRODUCT</p>
        <div className="section-1 row gx-5">
          <div className="col-5">
            <div className="row mb-4">
              <div className="img-hover img-hover-zoom">
                <img
                  src="images/reduce/image 1.png"
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
              <img src="images/reduce/image 1.png" alt="detail" width={100} />
              <img src="images/reduce/image 2.png" alt="detail" width={100} />
              <img src="images/reduce/image 3.png" alt="detail" width={100} />
              <img src="images/reduce/image 4.png" alt="detail" width={100} />
            </div>
          </div>
          <div className="col-7">
            <h4 className="text-dark fw-bold mb-3">
              PETITE BASKET TEA STRAINER
            </h4>
            <div className="d-flex justify-content-between stars">
              <img src="images/star.svg" alt="" />
              <img src="images/star.svg" alt="" />
              <img src="images/star.svg" alt="" />
              <img src="images/star.svg" alt="" />
              <img src="images/star.svg" alt="" />
            </div>
            <p className="fs-4 fw-bold mt-3">$12.00</p>
            <div className="row fw-light">
              <div className="col-6">Basket Size:</div>
              <div className="col-6">3/4″ deep x 2″ diameter</div>
            </div>
            <p className="fw-light"> Length with Handle: 6 1/8″</p>
            <p className="fw-light">
              {" "}
              Designed to perch on the edge of your cup or mug as you pour tea
              from a larger pot, this solid brass strainer will acquire a
              delicate patina over time, an aesthetic documentation of its use
              in your home. To keep the strainer clean, simply rinse and pat dry
              after each use.
            </p>
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
                  Bellocq Tea Atelier, an inconspicuous jewel box tucked away
                  into a quiet corner of Greenpoint, Brooklyn, has turned nearly
                  a decade of sourcing and blending the finest teas and
                  botanicals into a devoted and articulate history of tea
                  connoisseurship.
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
