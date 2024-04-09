import { useParams } from "react-router-dom";
import {UserOneProductQuery} from "../../common/hooks/product/UseProductQuery";

const Detail = () => {
  const {id} = useParams();
  // console.log(id)
  const {data} = UserOneProductQuery(id);
  // console.log(data)
  if(!data) {
    return <p>loading ....</p>
  }
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
            {data.imgPro?.map((img: string, index: number) => (

              <img key={index}  src={img} alt="" />
            ) )}
            </div>
            <div className="img-parser">
              <img src={data.thumbnail} alt="" />
            </div>
          </div>
          <div className="detail-right">
            <div className="info-detail">
              <h3>{data.namePro}</h3>
              <span>{data.pricePro}đ</span>
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
                <button className="" style={{backgroundColor: data.color}}></button>
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
            <img src="https://s3-alpha-sig.figma.com/img/b739/5be5/3f5927c3cf50e945c3e0f03b3206e810?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A45QA5yyNnbUX7xQS4-FTyHiZCV870xiYfAF-uEbA-itQlQuVOoERSQfJSzh74so8UhgKWuy3l8QXc2gh-7VzmiePNR8V2DOkpLv3GueiuAGlerHDjd9fUPSAM8VDjiJOEj5WhU0s6eBg81GTe6EWmWz3ZEEzG5RvnEoNc332rkYkQmIzSO07YEQ43cSSDc6AiuPbGpvLQ86eSxMUIPG5-h2rhWPvGiJ4WEao6SLAH6MtvfDE-8mKaVvo6EmPjYz5KsioRhtCC6Og82DyW~3qiR~lWhrvKSovvbbw-YdcX1OoJXZcNdeCafyF4GnRrE94hYoh3KrfrObVnwNsh~StA__" alt="" />
            <img src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1QQEGFC8EwxM4i1HcOMmHP36gB1JOoDtBIJrGuUu64t7BavECYf4~Pc0--4VKzCcGLD1kSNV6-Z9xl7PflKU0fMdoFnNnw3lNh4QCTWhrJIIRq3YYhKA9IhPpeWveuVw2FAC3SxtDGs483WExD68g7TtttSgc~XSZTjvIRmIYK8izMVRz2VZyVXSzBJQzKm9uS4w-G-lVSYN-5sC4pdwOCQ1893cfHkyiJ3KyM3KsLrdkGxRyCuOR5PfnpKu2jhaY5cMFcCaHwVycX1RB7O46vNy0rtz0SkmZ~CSjX3BnSSrqqSvvfv64HCV13KXFiPwaGdkuLisW6KZFzFBp82ag__" alt="" />
          </div>
        </div>
        <div className="related-detail">
          <p className="h4">Related Products</p>
          <div className="products-related">
            <div className="product-item">
              <div className="product__thumbnail">
                <img src="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YE6Eb6AmAcG~nBbOG50XLA92IyW1HBVCKLhrJFBWoUdpVPePgm1YHgYJNqjKqOazSzW9XDt7mgo2spBJ-MgBEPOm6ubsK~BfzSKhy7zlksVa-9aysAJ6~VZs-rejxINtZND9sOGziolqjftdlD1y1yagGHBfKWgZiZ-F1otv2-oAmfnZPJWSqSAN2hZ2jtMoM6Y25YxRwnGZZCxMGh~4nx39weBQLov~g6q4P6TmcSoqsj9V0ouc4EoSWd7R5LyPVLwkzZyD6UmGtyiRf6ukwIgpTFTSK18acq~c8NSY~iaK1CIeIgLbGfNzfjYydZzLENshP-GTVdNCtoJcr6a0pw__" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                  Respira
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
                <img src="https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T4CVAnqLxavptqOVNfQFjCZq3ZPlZI7JaMWdv1pIs6m8gLoNQeTftvsBva6EhK9AoRhIYT4Ryv32W1t5krPmKp72yIrjrRyAiEkFWF7Vq8IBgZF0~0EtH-Z9Ky9f7rFPXL0bkfQBJdbnEWeMT7hFKU7MUz54BHUL3AJn8lgKATnWGvJSlvvsMjVw7xmSSeNtkOCOITROyljy~XWpnxwa13lsT5mpFgIWZODmPYvgOPaI6dr~3BcVSps10oGiFFeWITkobFV85fwXcfxhiTCw1HC87oxJ5mwABKZOF0JamBEyQsqyJROesWvuU3gfMki-5sz~27VVeIVLW7kBhoboQg__" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                  Syltherine
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
                <img src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nN-eGYSoo2N~5E9TMitsyPnOJ09WG-R3ajjROCcAh2PyqWlNRkRjNC-T7-cqH8H5L8xTCfKdU1z00KJE7bFK00XZeoWadMyZVwTuSPi3BypBNuNRO8fBgNfhIMjBwUHs-UeNxT0cm4UrACNahKEi-jXzUdjMPlFKoFSJUzefmKW1JdCG8E9ar9hEwhYm2I~ygRh9p282GyWrOiqTiNX2mkHOrSvPxRTWR161Egl7LjbieNkzlr8yLiO3yPVxbw6pSaHpNg~8Epn85ike-ULfZ5nLgyH4ljv5mqJPf6Le~AgcpX~Z9Vty15CKq3osuADlwmJO-x25s0hC0IbVvVJZeQ__" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                  Leviosa
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
                <img src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hwh2DIqwbbpUU-jsLEO0Awkd5w6WhRQw48g4hbFs4eXsaybwEOrTx6IHyClnV1DQjw-rx8xXIwNcMxb4HGYyOgrfVw0yYv8pI5Mga9xpFsVsiAptioRwzmawld50dQLEhMgd8brxokUYw~Q0Xc1p5nqMtAC074Sf0NHZ6goEjCv8KYlm3OGofGowRq8T1hW7MiW~1igEA3frClSNKqC3cEgSX5nyOGjqnvQ4GJYuDpqIyci2Mb8PkLMgUMiOWN-1V3H8HK2KyzLoI0Ea1bwHuaZsmufMM-TOjg3lkbqmercIuK6R0qJdc-~i4KHMoM-I1-VwO0LcA76p36sfqmMpNw__" alt="" />
                <span className="product__sale">50%</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  <a href="" className="product__link">
                  Lolito
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
