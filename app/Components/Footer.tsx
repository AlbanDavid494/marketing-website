import { Link } from "react-router"

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-1/2  mb-6 md:mb-0">
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="text-gray-400">We're dedicated to providing the best service to our customer.</p>
        </div>
  
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
        <ul className="text-gray-400">
          <li>
            <Link to="/home" className="hover:text-white">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-white">Features</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-white">Sign up</Link>
          </li>
        </ul>
        </div>
  
  
        <div className="w-full md-w-1/3">
  <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
  <ul className="text-gray-400">
    <li>
      <Link to="">Twitter</Link>
    </li>
    <li>
      <Link to="">Facebook</Link>
    </li>
    <li>
      <Link to="">Intagram</Link>
    </li>
    <li>
      <Link to="">LinkedIn</Link>
    </li>
  </ul>
  </div>
  </div>
  
  <div className="mt-6">&copy; {year} Dave Store. All rights reserved.</div>
  
    </div>
  
  </footer>
  )
}

export default Footer
