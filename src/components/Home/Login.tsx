const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form action="" className="form-login">
          <div className="login-top">
            <span className="form-close">x</span>
          </div>
          <div className="form-title">
            <h4 className="form-text">Login</h4>
          </div>

          <div className="login-field">
            <label htmlFor="">Username:</label>
            <br></br>
            <input type="text" />
          </div>
          <div className="login-field">
            <label htmlFor="">Password:</label>
            <br></br>
            <input type="password" />
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
          <div className="login-add-button">
            <button className="button-one">Facebook</button>
            <button className="button-two">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
