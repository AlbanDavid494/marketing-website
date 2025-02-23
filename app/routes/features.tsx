import Footer from "~/Components/Footer"
import Header from "~/Components/Header"
import cpu from '../../public/cpu.jpg'
import battery from '../../public/battery.jpg'
import camera from '../../public/camera.jpg'

const features = () => {
const featureDetails = [
  {
    title: "A17 Pro Chip",
    description:
      "The A17 Pro chip brings a new level of performance and capability to iPhone. It's the fastest chip ever in a smartphone, delivering incredible speed and efficiency for demanding workflows and the most ambitious mobile experiences.",
    image: cpu,
  },
  {
    title: "Pro Camera System",
    description:
      "The pro-level camera system on iPhone 15 Pro Max is our most advanced yet. With a 48MP Main camera, you can capture stunning detail in your photos. The advanced telephoto lens offers 5x optical zoom, bringing you closer to your subject than ever before.",
    image: camera,
  },
  {
    title: "All-day Battery Life",
    description:
      "iPhone 15 Pro Max offers all-day battery life, so you can keep going without worrying about running out of power. With up to 29 hours of video playback, it's designed to keep up with your busy lifestyle.",
    image: battery,
  },
]

  return (
    <div>
        <Header />
      <section className="flex flex-col min-h-screen">
<div className="flex-grow bg-gray-100">
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-gray-800 mb-12">iphone 15 Pro Max Features</h1>
    {featureDetails?.map((feature,index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={feature.image}
            className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
          <p className="text-gray-600">{feature.description}</p>
          </div>
          
          
        </div>
      </div>
    ))}
  </div>
</div>
      </section>
      <Footer />
    </div>
  )
}

export default features
