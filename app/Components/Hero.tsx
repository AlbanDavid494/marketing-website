import { Link } from "react-router"
import product from '../../public/product.jpg'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
<div className="md-w-1/2 text-center md:text-left mb-8 md:mb-0">
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to our Amazing Product</h1>
<p className="text-xl text-gray-600 mb-8">Introducing <span className="font-mono text-gray-700">iphone 15 Pro Max </span>Experience Innovation like never before.</p>
{/* link */}
<Link to="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">Get Started</Link>
{/* link */}
</div>

<div className="md:w-1/2">
<img src={product} 
alt="product Image" 
width={500}
height={500}
className="rounded-lg shadow-xl"
/>
</div>

</div>
</section>
  )
}

export default Hero
