import { Link } from "react-router"
import { IoCameraOutline } from "react-icons/io5";
import { FaBatteryFull } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";


const features =  [
  { title: "A17 Pro Chip", description: "Groundbreaking performance and capabilities.", icon: "FiCpu" },
  { title: "Pro Camera System", description: "48MP Main | Ultra Wide | Telephoto", icon: "IoCameraOutline" },
  { title: "All-day Battery Life", description: "Up to 29 hours video playback.", icon: "FaBatteryFull" },
]

const Features = () => {
  return (
    <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl fontbold text-center py-2">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {features.map((feature, index) => {
        const IconComponent = feature.icon === "FiCpu" ? FiCpu : feature.icon === "IoCameraOutline" ?IoCameraOutline : FaBatteryFull; return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
          <IconComponent className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>)
})}
      </div>

<div className="flex justify-center">
<Link className="mt-6 w-[300px'] bg-blue-500 p-4 rounded-md text-white font-semibold transition hover:text-blue-600 hover:bg-white" to='/features'>explore features</Link>
</div>

    </div>
  </section>
  )
}

export default Features
