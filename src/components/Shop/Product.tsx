import { Link } from "react-router-dom";
import UseProductQuery from "../../hooks/product/UseProductQuery";
import { IProduct } from "../../interface/product";
const Product = () => {
 const {data} = UseProductQuery();
  return (
    <div className="page-product">
      <div className="container">
        <div className="page-products">
        {data.map((pro:IProduct, index:number) => (
          <div className="product-item" key={index}>
            <div className="product__thumbnail">
              <img
                src={pro.imgPro}
                alt=""
              />
              <span className="product__sale">New</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="" className="product__link">
                  {pro.namePro}
                </a>
              </h3>
              <a className="product__cate">Stylish cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">{pro.pricePro}đ</span>
              </div>
            </div>
            <div className="product-content-extra">
              <Link to={`/detail/${pro._id}`} className="btn__viewproduct">
                View product
              </Link>
              <button className="btn__addtocart">Add to cart</button>
              <div className="new-icon">
                <span>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </span>
                <span>
                  <i className="fa-solid fa-right-left"></i>
                </span>
                <span>
                  <i className="fa-regular fa-heart"></i>Like
                </span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="next-page">
          <button className="next-page-shop add">1</button>
          <button className="next-page-shop">2</button>
          <button className="next-page-shop">3</button>
          <button className="next-page-shop">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
