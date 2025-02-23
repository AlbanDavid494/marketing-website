import { Link } from "react-router"


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold bg-gradient-to-tr to-orange-500 from-blue-500 via-gray-600 bg-clip-text text-transparent">Dave Store</Link>
        <ul className="flex space-x-4">
            <li><Link className="font-semibold hover:text-blue-500 visited:text-blue-400" to='/home'>Home</Link></li>

            <li><Link className="font-semibold hover:text-blue-500 visited:text-blue-400"  to='/features'>Features</Link></li>

            <li><Link to='/contact' className="font-semibold hover:text-blue-500 visited:text-blue-400">Contact us</Link></li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header
