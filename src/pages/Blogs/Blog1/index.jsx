import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const Blog1 = () => {
  return (
    <>
      <div className="header header__about-us text-white">
        <Header />
      </div>

      <div className="container">
        <h1 className="blog1-container">10 WAYS TO BE MORE ECO-FRIENDLY</h1>
        <p>
          Sustainability is on everyone’s lips these days. Lots and lots of
          people are striving to make more eco-conscious decisions and you might
          as well! Even though you really do want to help change the world, it
          can be pretty overwhelming and confusing to figure out where to start
          but don’t worry got your back! Here is a list of small changes you can
          make if you are looking for some inspiration on where to start.
        </p>
        <h5>1. Get yourself a bamboo toothbrush</h5>
        <p>
          A few years ago, the majority of toothbrushes were made from plastic
          but today, the bamboo toothbrush has (thankfully) been introduced!
          Most of us will replace around 300 toothbrushes during our lifetime,
          so imagine how much plastic waste we could avoid if everyone stopped
          using plastic toothbrushes and started using bamboo ones. It may seem
          like a small thing to do but who knows? You might inspire your family
          and friends to do the same! Get your first, second or maybe twentieth
          bamboo toothbrush right here.
        </p>
        <img src="images/blog1/Mask Group.jpg" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Blog1;
