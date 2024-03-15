const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">News</h2>
        </div>
        <div className="section-body">
          <div className="products">
            <div className="product-item">
              <div className="product__thumbnail">
                <img src="https://picsum.photos/id/3/285/301" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                    Product A
                  </a>
                </h3>
                <a className="product__cate">Stylish cafe chair</a>
                <div className="product-price">
                  <span className="product-price__new">2.500.000đ</span>
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
            <div className="product-item">
              <div className="product__thumbnail">
                <img src="https://picsum.photos/id/3/285/301" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                    Product A
                  </a>
                </h3>
                <a className="product__cate">Stylish cafe chair</a>
                <div className="product-price">
                  <span className="product-price__new">2.500.000đ</span>
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
            <div className="product-item">
              <div className="product__thumbnail">
                <img src="https://picsum.photos/id/3/285/301" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                    Product A
                  </a>
                </h3>
                <a className="product__cate">Stylish cafe chair</a>
                <div className="product-price">
                  <span className="product-price__old">3.500.000đ</span>
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
            <div className="product-item">
              <div className="product__thumbnail">
                <img src="https://picsum.photos/id/3/285/301" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                    Product A
                  </a>
                </h3>
                <a className="product__cate">Stylish cafe chair</a>
                <div className="product-price">
                  <span className="product-price__old">3.500.000đ</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
