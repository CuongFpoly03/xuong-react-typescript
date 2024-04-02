import UseProductQuery from "../../hooks/product/UseProductQuery";
import { IProduct } from "../../interface/product";

const News = () => {
  const {data} = UseProductQuery();
  // console.log(data);
const product = Array.isArray(data) ? data.slice(0, 4) : [];
// console.log(product);
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">News</h2>
        </div>
        <div className="section-body">
          <div className="products">
            {product?.map((pro:IProduct, index:number) => (
              <div className="product-item" key={index}>
                <div className="product__thumbnail">
                  <img
                    src={pro.imgPro}
                    alt=""
                  />
                  <span className="product__sale">50%</span>
                </div>
                <div className="product-content">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      {pro.namePro}
                    </a>
                  </h3>
                  <a className="product__cate">Luxury big sofa</a>
                  <div className="product-price">
                    <span className="product-price__new">{pro.pricePro}đ</span>
                  </div>
                </div>
                <div className="product-content-extra">
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
        </div>
      </div>
    </section>
  );
};

export default News;
