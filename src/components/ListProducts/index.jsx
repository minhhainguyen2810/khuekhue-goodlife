import Pagination from "../Pagination";

const ListProducts = () => {
  const products = [
    {
      imgSrc: "images/kitchen/image 1.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-1.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-2.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-3.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-4.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-5.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-6.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-7.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
    {
      imgSrc: "images/kitchen/image 1-8.png",
      title: "images/kitchen/image 1.png",
      category: "Kitchen | Reduce",
      price: "$20",
    },
  ];
  return (
    <div className="list-products row gy-5">
      {products.map((item, index) => (
        <div className="item col-xxl-4 col-xs-12 col-lg-6" key={index}>
          <img className="text-center" src={item.imgSrc} alt={item.title} />
          <p className="mt-2 fs-14 text-light">{item.category}</p>
          <h6 className="mt-3 text-dark fs-18 ">{item.title}</h6>
          <h6 className="mt-1 text-dark fs-18 ">{item.price}</h6>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default ListProducts;
