import { Form } from "react-router"
import Footer from "~/Components/Footer"
import Header from "~/Components/Header"

const contact = () => {
  return (
    <section>
    <Header />
    <div className="py-20">

      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact us</h1>

        <Form className="space-y-4">
<div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-700 pl-1">Name</label>
  <input type="text" placeholder="David "
  className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-300 focus:ring p-3 
  focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none" />
</div>

<div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
  <input type="email" required className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-300 focus:ring p-3 
  focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none" placeholder="gmail.com" />
</div>

<div>
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesage</label>
  <textarea name="" id="" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring outline-none focus:ring-blue-200 focus:ring-opacity-50 p-3 font-mono" placeholder="write your message here..."></textarea>
</div>

<button className="w-full bg-blue-500 text-wite px-4 py-2 rounded-md hover-bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus';ring-opacity-50 text-white font-semibold cursor-pointer hover:text-gray-200">Send Message</button>
        </Form>
      </div>

    </div>
    <Footer />
    </section>
  )
}

export default contact
