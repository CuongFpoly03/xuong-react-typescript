import { Link } from "react-router-dom";

const Carts = () => {
  return (
    <div className="container-cart">
      <div className="container">
        <div className="cart-both">
          <div className="list-cart">
            <div className="title-thead">
              <span className="product">Product</span>
              <span className="price">Price</span>
              <span className="quantity">Quantity</span>
              <span className="subtotal">Subtotal</span>
            </div>
            <div className="title-tbody">
              <img src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGXqfJhdHGKlr9GT-BbRl6NbRc9ItAIE~~IgzV8~xzu7xmsKI0PhYvgaxzRlc-YDr6I0XutICx7KYw-F2Yf0MuI5DmybaAGs~Pouiann6d0hSUSPEZn2zR4gNcQ-8qWdii66n0vDRw~Aewi0GtMVs7zxIjK7XHy4XxwcgbdVLQRAjy20ZDQwl3gWdhu5KKbPezpp3v1o1B2Y4lSb3O9~q4l67ArRpyXJfT1IiPNzfia~jjJ8PilOZRKT38FlBaB-APhDJ5UqAw6wjdXm2uP4PxisbcXXQ85UlPQI4Y6rFfAdxN7r3koLTvZIV4t6rt2WBKhd7l7Y2N22L3y1urfEDQ__" alt="" />
              <span>Asgaard sofa</span>
              <span>25.000.000đ</span>
              <span>
                <button>1</button>
              </span>
              <span>25.000.000đ</span>
              <span>
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          </div>
          <div className="checkout-cart">
            <h3 className="title">Cart Totals</h3>
            <div className="subtotal">
              <span>Subtotal:</span>
              <span className="span">25.000.000đ</span>
            </div>
            <div className="total">
              <span>Total:</span>
              <span  className="span">25.000.000đ</span>
            </div>
            <button><Link className="link" to='/checkout'>Check Out</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
