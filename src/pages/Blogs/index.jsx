import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Blogs = () => {
  return (
    <>
      <div className="header header__about-us text-white">
        <Header />
      </div>
      <div className="container blog-container">
        <div className="row gx-5">
          <div className="col-xl-4 col-xs-12">
            <img className="w-100" src="images/blog/Mask Group.jpg" alt="" />
            <h4 className="fs-18 mb-2 fw-bold mt-4">
              10 WAYS TO BE MORE ECO-FRIENDLY
            </h4>
            <p className="h6">
              Sustainability is on everyone’s lips these days. Lots and lots of
              people are striving to make more eco-conscious [...]
            </p>
          </div>
          <div className="col-xl-4 col-xs-12">
            <img className="w-100" src="images/blog/Mask Group-2.jpg" alt="" />
            <h4 className="fs-18 mb-2 fw-bold mt-4">
              BENEFITS OF USING A WOODEN HAIR BRUSH
            </h4>
            <p className="h6">
              Your hair is the crown you never take off so why not take good
              care of it and make it look as beautiful as possible? [...]
            </p>
          </div>
          <div className="col-xl-4 col-xs-12">
            <img className="w-100" src="images/blog/Mask Group-3.jpg" alt="" />
            <h4 className="fs-18 mb-2 fw-bold mt-4">
              WAY TO REDUCE FOOD WASTE
            </h4>
            <p className="h6">
              Every year, one third of all food produced for human consumption
              is wasted or lost - either before or during harvest [...]
            </p>
          </div>
          <div className="col-xl-4 col-xs-12">
            <img className="w-100" src="images/blog/Mask Group-1.jpg" alt="" />
            <h4 className="fs-18 mb-2 fw-bold mt-4">HOMEMADE TEA BLENDS </h4>
            <p className="h6">
              Fall is here and it got us feeling all the cozy vibes! Therefore,
              we want to share a few of our homemade tea blend recipes as making
              your [...]
            </p>
          </div>
          <div className="col-xl-4 col-xs-12">
            <img className="w-100" src="images/blog/Mask Group-4.jpg" alt="" />
            <h4 className="fs-18 mb-2 fw-bold mt-4">
              10 WAYS TO MAKE HOME SUSTAINABLE
            </h4>
            <p className="h6">
              Making your home more energy and water efficient is one of the
              best ways you can have a positive impact on the environment so I
              [...]
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
