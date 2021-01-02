import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AboutUs = () => {
  return (
    <>
      <div className="header header__about-us text-white">
        <Header />

        <div className="position-relative overflow-hidden p-3 p-md-5 text-center">
          <div className="p-lg-5 mx-auto my-5">
            <h1 className="display-5 fw-bold">ABOUT GOOD LIFE STORE</h1>
            <div className="divider divider__white"></div>
            <p className="intro fw-bold">REDUCE - REFILL - REUSE</p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>

      <div className="container text-center about-us-container">
        <h2 className="our-story-title text-dark fw-bold">OUR STORY</h2>
        <div className="divider divider__dark"></div>
        <p className="text-secondary our-story-p">
          We started GOOD LIFE because we are really concerned about our
          beautiful planet and we want to try (in our own small way) to help.
        </p>
        <img
          className="our-story-img"
          src="images/about-us/Group110.jpg"
          alt=""
        />
        <h2 className="we-like-title text-dark fw-bold">
          YOUR BEST LIFE WITH LESS PLASTIC
        </h2>
        <div className="divider divider__dark"></div>
        <p className="text-secondary our-story-p">
          A lot of us become overwhelmed with how to be plastic free. What if
          reducing plastic can be as easy as choosing a better product? Every
          little bit counts.
        </p>
        <h2 className="we-like-title text-dark fw-bold">
          WE LIKE MAKING YOU SMILE
        </h2>
        <div className="divider divider__dark"></div>
        <p className="text-secondary our-story-p">
          A lot of us become overwhelmed with how to be plastic free. What if
          reducing plastic can be as easy as choosing a better product? Every
          little bit counts.
        </p>
        <img
          className="bottom-img"
          src="images/about-us/image12.jpg"
          alt="Our Story"
        />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
