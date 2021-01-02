const ListProducts = () => {
  const products = [
    {
      imgSrc: "images/kitchen/image 1.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-1.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-2.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-3.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-4.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-5.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-6.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-7.png",
      description: "images/kitchen/image 1.png",
    },
    {
      imgSrc: "images/kitchen/image 1-8.png",
      description: "images/kitchen/image 1.png",
    },
  ];
  return (
    <div className="list-products row">
      {products.map((item, index) => (
        <div className="item col-4" key={index}>
          <img src={item.imgSrc} alt={item.description} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
