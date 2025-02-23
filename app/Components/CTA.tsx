import { Link } from "react-router"

const CTA = () => {
  return (
    <section className="bg-blue-500 py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">ready to get Started?</h2>
    <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers today.</p>
    <Link to="/signup" className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300">Sign up now</Link>
  </div>
</section>
  )
}

export default CTA
