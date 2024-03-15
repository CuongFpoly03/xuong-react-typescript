import Sevices from "../components/Home/Sevices"
import Banner from "../components/nav/Banner"
import { Footer } from "../components/nav/Footer"
import Header from "../components/nav/Header"
import Carts from '../components/Shop/Carts'
const Cart = () => {
  return (
    <div >
        <Header/>
        <Banner/>
        <Carts/>
        <Sevices/>
        <Footer/>

    </div>
  )
}

export default Cart