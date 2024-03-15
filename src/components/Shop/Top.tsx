const Top = () => {
  return (
    <div className="shop-top">
      <div className="shop-top-both">
        <div className="shop-top-left">
          <i className="fa-solid fa-sliders"></i> Fillter{" "}
          <i className="fa-solid fa-grip"></i>{" "}
          <i className="fa-solid fa-grip-lines"></i> | Showing 1-16 of 32
          results
        </div>
        <div className="shop-top-right">
          <div className="show-right">
            Show <span>16</span>
            Short-by <span>Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
