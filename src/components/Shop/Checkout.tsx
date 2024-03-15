const Checkout = () => {
  return (
    <div className="container-checkout">
      <div className="container">
        <div className="all-checkout">
          <div className="checkout-left">
            <h3>Bingling details</h3>
            <form action="" className="form">
              <div className="both-input">
                <div className="inputfname">
                  <label htmlFor="">First Name</label>
                  <br></br>
                  <input type="text" />
                </div>
                <div className="inputlname">
                  <label htmlFor="">Last Name</label>
                  <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="inputlname">
                <label htmlFor="">Company Name (Optional)</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <label htmlFor="">Country / Region</label>
                <br></br>
                <select>
                  <option value=""></option>
                  <option value="">VN</option>
                  <option value="">LAO</option>
                </select>
              </div>
              <div className="inputlname">
                <label htmlFor="">Company Name (Optional)</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <label htmlFor="">Company Name (Optional)</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <label htmlFor="">Town / City</label>
                <br></br>
                <select>
                  <option value=""></option>
                  <option value="">HA NOI</option>
                  <option value="">TPHCM</option>
                </select>
              </div>
              <div className="inputlname">
                <label htmlFor="">Province</label>
                <br></br>
                <select>
                  <option value=""></option>
                  <option value="">Thanh Hoa</option>
                  <option value="">Ha Noi</option>
                </select>
              </div>
              <div className="inputlname">
                <label htmlFor="">ZIP code</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <label htmlFor="">Phone</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <label htmlFor="">Email address</label>
                <br></br>
                <input type="text" />
              </div>
              <div className="inputlname">
                <input type="text" placeholder="Additional information" />
              </div>
            </form>
          </div>
          <div className="checkout-right">
            <div className="checkout-new">
              <div className="all-right-checkout">
                <div className="product-checkout-one">
                  <h3>Product</h3>
                  <p>Asgaard sofa x 1</p>
                  <p>Subtotal</p>
                  <p>Total</p>
                </div>
                <div className="product-checkout-two">
                  <h3>Subtotal</h3>
                  <p>25.000.000đ</p>
                  <p>25.000.000đ</p>
                  <p>250.00.000đ</p>
                </div>
              </div>
              <div className="direc-bank">
                    <li>Direct Bank Transfer</li>
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div className="radio-new">
                        <input type="radio" />
                        <label htmlFor="">Direct Bank Transfer</label><br></br>
                        <input type="radio" />
                        <label htmlFor="">Cash On Delivery</label>
                    </div>
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className="button">Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
