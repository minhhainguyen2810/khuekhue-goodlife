import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import otherProductsBathroom from "../../list-products/other-products-bathroom.json";
import Counter from "../../components/Counter";

const ProductDetail = () => {
  return (
    <>
      <div className="header header__search">
        <Header logoDark />
      </div>
      <div className="container product-detail-container ">
        {/* first section */}
        <p className="fs-14 text-grey-3">HOME / BATHROOM / REDUCE PRODUCT</p>
        <div className="row gx-5">
          <div className="col-5">
            <div className="row mb-4">
              <img src="images/kitchen/image 1-1.png" alt="detail" />
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
              <Link to="/home">
                <button className="btn btn-lg btn-primary">BUY NOW</button>
              </Link>
            </div>
            <div className="social-btn">
              <button
                type="button"
                className="google btn w-100 text-start text-white"
              >
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.351798 6.06008C0.307456 8.21078 1.78879 10.2632 3.82652 10.9326C5.74593 11.5774 8.10586 11.095 9.38309 9.45124C10.3156 8.29946 10.5275 6.76398 10.4266 5.32944C8.7828 5.31473 7.13903 5.31963 5.4977 5.32208C5.49503 5.90767 5.4977 6.49102 5.50016 7.0766C6.48437 7.10379 7.46881 7.09131 8.45302 7.11114C8.20457 7.96255 7.6386 8.75491 6.77961 9.06241C5.12113 9.79328 3.00497 8.83847 2.48311 7.09866C1.85319 5.4326 2.88442 3.42206 4.58702 2.93742C5.64276 2.56597 6.73037 2.98421 7.6337 3.53303C8.09138 3.10476 8.51965 2.64708 8.94034 2.18449C7.91401 1.32573 6.59511 0.799194 5.23923 0.91484C2.57893 0.946481 0.250858 3.40245 0.351798 6.06008Z"
                    fill="#DC4E41"
                  />
                  <path
                    d="M13.6256 3.84442C13.6207 4.33419 13.6156 4.82641 13.6131 5.31595C13.1209 5.32086 12.6314 5.32331 12.1416 5.32576C12.1416 5.81553 12.1416 6.30262 12.1416 6.79239C12.6314 6.79484 13.1236 6.79729 13.6131 6.80242C13.618 7.29218 13.618 7.78173 13.6229 8.27395C14.1103 8.27395 14.6 8.2715 15.0896 8.27395C15.0922 7.78173 15.0945 7.29218 15.0996 6.79996C15.5891 6.79751 16.0814 6.79506 16.5711 6.79261C16.5711 6.30284 16.5711 5.81575 16.5711 5.32598C16.0816 5.32353 15.5894 5.32108 15.0996 5.31618C15.0969 4.82641 15.0922 4.33419 15.0896 3.84464C14.6 3.84442 14.1127 3.84442 13.6256 3.84442Z"
                    fill="#DC4E41"
                  />
                  <path
                    d="M0.351798 6.05931C0.250859 3.40168 2.5787 0.945712 5.239 0.913848C6.59489 0.798203 7.91401 1.32474 8.94011 2.1835C8.5192 2.64631 8.09093 3.10377 7.63347 3.53203C6.73014 2.98322 5.64254 2.56498 4.5868 2.93642C2.88397 3.42129 1.85274 5.43183 2.48289 7.09767C3.00474 8.83748 5.12091 9.79228 6.77939 9.06142C7.63815 8.75392 8.20435 7.96156 8.4528 7.11015C7.46858 7.09054 6.48415 7.10279 5.49993 7.07561C5.49748 6.49003 5.49503 5.90667 5.49748 5.32109C7.1388 5.31864 8.78258 5.31374 10.4264 5.32844C10.5273 6.76321 10.3156 8.29869 9.38287 9.45025C8.10564 11.094 5.74593 11.5764 3.8263 10.9316C1.78902 10.2624 0.307456 8.21001 0.351798 6.05931Z"
                    fill="white"
                  />
                  <path
                    d="M13.6256 3.84442C14.1129 3.84442 14.6 3.84442 15.0896 3.84442C15.0922 4.33419 15.0969 4.82641 15.0996 5.31595C15.5891 5.32085 16.0814 5.32331 16.5711 5.32576C16.5711 5.81553 16.5711 6.30262 16.5711 6.79239C16.0816 6.79484 15.5894 6.79729 15.0996 6.79974C15.0947 7.29196 15.0922 7.7815 15.0896 8.27372C14.6 8.27127 14.11 8.27372 13.6229 8.27372C13.6183 7.7815 13.6183 7.29196 13.6131 6.80219C13.1236 6.79707 12.6314 6.79484 12.1416 6.79216C12.1416 6.3024 12.1416 5.8153 12.1416 5.32553C12.6314 5.32308 13.1211 5.32063 13.6131 5.31573C13.6156 4.82641 13.6205 4.33419 13.6256 3.84442Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-1">Google</span>
              </button>
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

export default ProductDetail;
