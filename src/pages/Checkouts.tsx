import Sevices from "../components/Home/Sevices"
import Checkout from "../components/Shop/Checkout"
import Banner from "../components/nav/Banner"
import { Footer } from "../components/nav/Footer"
import Header from "../components/nav/Header"

const Checkouts = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Checkout/>
        <Sevices/>
        <Footer/>
    </div>
  )
}

export default Checkouts