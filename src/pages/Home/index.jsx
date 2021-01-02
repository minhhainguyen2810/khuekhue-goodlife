import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
