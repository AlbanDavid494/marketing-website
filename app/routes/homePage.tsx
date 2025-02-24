import { Link } from "react-router"
import Footer from "~/Components/Footer"
import Header from "~/Components/Header"
import product from '../../public/iphone.jpg'
import { motion } from "framer-motion"

const homePage = () => {
  return (
    <div className=''>
      <Header />
    <section className="flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
            initial={{opacity:0,
              y:-50 }}
              animate={{opacity:1, y:0}}
            className="text-4xl md:text-6xl font-bold mb-4">iphone 15 Pro Max</motion.h1>
            <p className="text-xl mb-8">Titanium. So strong. So light. so Pro</p>
            <Link to="/features" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:text-white hover:bg-black transition duration-300 inline-flex items-center">Explore Features  </Link>
            </div>
            <div className="md:w-1/2">
              <img src={product} alt="iPhone 15 Pro Max"  className="w-[500px] h-124 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-blue-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl text-blue-100 mb-8">Get your iPhone 15 Pro Max today.</p>
            <Link
              to=""
              className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Buy Now
            </Link>
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default homePage
