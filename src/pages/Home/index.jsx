import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import kitchenProducts from "../../list-products/kitchen.json";
import { ProductItem } from "../../components/ProductItem";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const sliderInstagramSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="header header__home text-white">
        <Header />
        <img src="images/home.png" alt="home" className="banner" />

        <div className="home-text">
          <div className="">
            <h1
              className="display-5 fw-bold text-primary"
              style={{ width: 466 }}
            >
              FOCUS ON LIVING NOT WASTING
            </h1>
            <div className="divider divider__white"></div>
            <p className="intro fw-bold fs-4 text-secondary">
              Your Plastic-Free, Planet Friendly Grocery Store
            </p>
          </div>
        </div>
      </div>

      <div className="text-center home-container">
        <h2 className="our-story-title text-dark fw-bold">
          WELCOME TO THE GOODLIFE STORE!
        </h2>
        <div className="divider divider__dark"></div>
        <p className="text-secondary our-story-p">
          Conscious, sustainable, naturally beautiful.
        </p>
        <div className="text-left d-flex align-items-center">
          <img className="home-img" src="images/home1.png" alt="" />
          <div className="help-container d-flex justify-content-between">
            <div className="help-box">
              <img src="images/Layer 1.png" alt="help box" />
              <p className="fw-bold mt-3">HELP YOURSELF</p>
              <p>
                Our tips, advice and product range can help you drastically
                reduce your plastic usage in weeks.
              </p>
            </div>
            <div className="help-box">
              <img src="images/Layer 2.png" alt="help box" />
              <p className="fw-bold mt-3">HELP THE PLANET</p>
              <p>
                Reducing our plastic use can help stem the tide of harmful waste
                ending up in the oceans.
              </p>
            </div>
            <div className="help-box">
              <img src="images/Layer 3.png" alt="help box" />
              <p className="fw-bold mt-3">HELP OTHER</p>
              <p>
                Use what you learn to help others make the switch. One at a
                time, we can make a huge difference.
              </p>
            </div>
          </div>
        </div>
        <h2 className="our-story-title text-dark fw-bold">NEW PRODUCTS</h2>
        <div className="divider divider__dark"></div>

        {/* Sliders */}
        <Slider {...sliderSettings} className="slider-1">
          {kitchenProducts.map((item, index) => (
            <div key={index} className="img-wrapper">
              <ProductItem item={item} key={index} />
            </div>
          ))}
        </Slider>
        {/* End of sliders */}

        <h2 className="our-blogs-title text-dark fw-bold">OUR BLOGS</h2>
        <div className="divider divider__dark"></div>

        <div className="container blog-container">
          <div className="row gx-5">
            <div className="col-xl-4 col-xs-12">
              <Link to="/blog1">
                <img
                  className="w-100"
                  src="images/blog/Mask Group.jpg"
                  alt=""
                />
                <h4 className="fs-18 mb-2 fw-bold mt-4 text-dark">
                  10 WAYS TO BE MORE ECO-FRIENDLY
                </h4>
                <p className="h6 text-dark">
                  Sustainability is on everyone’s lips these days. Lots and lots
                  of people are striving to make more eco-conscious [...]
                </p>
              </Link>
            </div>
            <div className="col-xl-4 col-xs-12">
              <Link to="/blog1">
                <img
                  className="w-100"
                  src="images/blog/Mask Group-2.jpg"
                  alt=""
                />
                <h4 className="fs-18 mb-2 fw-bold mt-4 text-dark">
                  BENEFITS OF USING A WOODEN HAIR BRUSH
                </h4>
                <p className="h6 text-dark">
                  Your hair is the crown you never take off so why not take good
                  care of it and make it look as beautiful as possible? [...]
                </p>
              </Link>
            </div>
            <div className="col-xl-4 col-xs-12">
              <Link to="/blog1">
                <img
                  className="w-100"
                  src="images/blog/Mask Group-3.jpg"
                  alt=""
                />
                <h4 className="fs-18 mb-2 fw-bold mt-4 text-dark">
                  WAY TO REDUCE FOOD WASTE
                </h4>
                <p className="h6 text-dark">
                  Every year, one third of all food produced for human
                  consumption is wasted or lost - either before or during
                  harvest [...]
                </p>
              </Link>
            </div>
          </div>
        </div>

        <h2 className="our-blogs-title text-dark fw-bold">
          FOLLOW US ON INSTAGRAM
        </h2>
        <div className="divider divider__dark"></div>

        {/* Sliders */}
        <div className="slider-home">
          <Slider {...sliderInstagramSettings}>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-1.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-2.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-3.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-4.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-5.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-6.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-7.png" alt="" />
              </Link>
            </div>
            <div>
              <Link to="/product-reduce">
                <img src="images/kitchen/image 1-8.png" alt="" />
              </Link>
            </div>
          </Slider>
          {/* End of sliders */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
