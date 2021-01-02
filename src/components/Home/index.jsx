import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
  return (
    <>
      <div className="header header__about-us">
        <Header className="text-white" />

        <div className="position-relative overflow-hidden p-3 p-md-5 text-center text-white">
          <div className="p-lg-5 mx-auto my-5">
            <h1 className="display-5 fw-bold">ABOUT GOOD LIFE STORE</h1>
            <div className="divider divider__white"></div>
            <p className="intro fw-bold">REDUCE - REFILL - REUSE</p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
