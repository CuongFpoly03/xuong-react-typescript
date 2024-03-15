const Detail = () => {
  return (
    <div className="product-detail">
      <div className="detail-top">
        <span>
          Home<i className="fa-solid fa-angle-right"></i> shop{" "}
          <i className="fa-solid fa-angle-right"></i>
          <span>|</span>{" "}
        </span>
        <span className="text-detail">Name products</span>
      </div>

      <div className="container">
        <div className="detail-both">
          <div className="detail-left">
            <div className="img-children">
              <img src="https://picsum.photos/id/3/76/80" alt="" />
              <img src="https://picsum.photos/id/3/76/80" alt="" />
              <img src="https://picsum.photos/id/3/76/80" alt="" />
              <img src="https://picsum.photos/id/3/76/80" alt="" />
            </div>
            <div className="img-parser">
              <img src="https://picsum.photos/id/3/423/500" alt="" />
            </div>
          </div>
          <div className="detail-right">
            <div className="info-detail">
              <h3>NAME PRODUCT</h3>
              <span>25.000.000đ</span>
              <div className="start">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> |{" "}
                <span> 5 Customer Review</span>
              </div>
              <p>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="size-detail">
                <label className="label" htmlFor="">
                  Size
                </label>
                <br></br>
                <button className="box-bg">L</button>
                <button>XL</button>
                <button>XS</button>
              </div>
              <div className="color-detail">
                <label className="label" htmlFor="">
                  Color
                </label>{" "}
                <br></br>
                <button className="box-one"></button>
                <button className="box-two"></button>
                <button className="box-three"></button>
              </div>
              <div className="quantity-detail">
                <div className="div-button">
                  <button>-</button>
                  <button>1</button>
                  <button>+</button>
                </div>
                <div className="button-detail">
                  <button>Add To Cart</button>
                </div>
                <div className="button-details">
                  <button>Compare</button>
                </div>
              </div>
              <div className="icon-detail">
                <div className="icon-one">
                  SKU <span className="dot">:</span>
                  <span>SS001</span>
                </div>
                <div className="icon-two">
                  Category<span>:</span>
                  <span>Sofas</span>
                </div>
                <div className="icon-three">
                  Tags<span className="dot">:</span>
                  <span>Sofa, Chair, Home, Shop</span>
                </div>
                <div className="icon-four">
                  Share<span className="dot">:</span>{" "}
                  <span>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="des-detail">
          <div className="nav-des-detail">
            <a className="text-nav">Description</a>
            <a>Additional Information</a>
            <a>Reviews[5]</a>
          </div>
          <div className="text-des-detail">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="img-detail">
            <img src="https://picsum.photos/id/3/605/384" alt="" />
            <img src="https://picsum.photos/id/3/605/384" alt="" />
          </div>
        </div>
        <div className="related-detail">
          <p className="h4">Related Products</p>
          <div className="products-related">
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
                  <span>Share</span>
                  <span>Compare</span>
                  <span>Like</span>
                </div>
              </div>
            </div>
          </div>
          <button className="show-more-detail">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
