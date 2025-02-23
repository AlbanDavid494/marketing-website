import { Form, Link } from "react-router"
import Footer from "~/Components/Footer"
import Header from "~/Components/Header"

const signup = () => {
  
  return (
    <section>
        <Header />
      <div className="py-20">
      
<div className="container mx-auto px4 max-w-md">
<h1 className="text-4xl font-bold text-center text-gay-800 mb-8">Sign Up</h1>
<Form className="space-y-4">
<div>
  <label className='block text-sm font-medium text-gray-700' htmlFor="email">Email</label>
  <input type="text" required className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-300 focus:ring p-3 
  focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none" placeholder="@gmail.com"/>
</div>

<div className="pt-2">
  <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">Password</label>
  <input type="password" required className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-300 focus:ring p-3 
  focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none" placeholder="*********" />
</div>
<Link to='/home'>
<button className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition" type="submit">Sign up</button>
</Link>

</Form>
</div>

      </div>
      <Footer />
    </section>
  )
}

export default signup
