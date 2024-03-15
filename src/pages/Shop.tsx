import Sevices from "../components/Home/Sevices"
import Banner from "../components/nav/Banner"
import { Footer } from "../components/nav/Footer"
import Header from "../components/nav/Header"
import Product from "../components/Shop/Product"
import Top from  "../components/Shop/Top"
const Shop = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Top/>
      <Product/>
      <Sevices/>
      <Footer/>
    </div>
  )
}

export default Shop
