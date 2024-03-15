import Banner from "../components/nav/Banner"
import Blog from "../components/Home/Blog"
import { Footer } from "../components/nav/Footer"
import Header from "../components/nav/Header"
import News from "../components/Home/News"
import Sevices from "../components/Home/Sevices"
import Shop from "../components/Home/Shop"

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <News />
        <Shop />
        <Blog />
        <Sevices />
        <Footer />
    </div>
  )
}

export default Home
