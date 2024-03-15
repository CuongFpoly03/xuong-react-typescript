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
              <img src="https://picsum.photos/id/3/76/80" alt="" />
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
