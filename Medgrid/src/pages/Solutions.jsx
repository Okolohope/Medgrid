import { MapPin, Server, BarChart2, Plug } from "lucide-react";
import { Link } from "react-router-dom";

function Solutions(){
  return(
    <div className="w-full">
      <div className="mx-auto max-w-4xl text-center py-12 px-4" >
        <h1 className="text-2xl font-bold text-black-700 sm:text-3xl md:text-4xl">Our Core Med<span className="text-[rgb(80,170,141)]">Grid</span> Soloution</h1>
        <p className="mt-4 px-2 text-sm leading-6 text-gray-800 sm:px-6 sm:text-base md:px-10 md:text-lg lg:px-16 lg:text-xl">Leveraging data and technology to optimize the healthcare ecosystem</p>
        <p className="mt-4 px-2 text-sm leading-6 text-gray-800 sm:px-6 sm:text-base md:px-10 md:text-lg lg:px-16 lg:text-xl">across Nigeria.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-2 lg:gap-5 lg:pt-12 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-14 w-auto" color="rgb(43, 143, 180)" />
            <h2 className="text-2xl font-bold text-black-600">MedGrid Medicine Locator (Patient)</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-800 break-words whitespace-normal">Find exactly what you need when you need it. Our platform allows patients to search for specific medications, like
             "Amoxicillin near me" instantly displaying price, distance, and real-time stock availability. This reduces a stressful four-pharmacy search into a simple two-minute process.
          </p>

          <p className="mt-3 text-xs text-gray-600 text-center">Join the waitlist to be the first to experience seamless access to essential medicines.</p>

          <div className="flex justify-center mt-4">
            <Link to="/waitlist" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">Join Waitlist</Link>
          </div>

        </div>

        <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <Server className="h-14 w-auto" color="rgb(43, 143, 180)" />
            <h2 className="text-2xl font-bold text-black-600">MedGrid OS for Providers</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-800 break-words whitespace-normal">We empower healthcare providers with a free "Pharmacy OS" that handles inventory, expiry tracking, and PCN compliance
             reporting at zero cost. Instead of charging fees, we provide a 20% yearly revenue share back to pharmacies based on their accurate data contribution.
          </p>

          <p className="mt-3 text-xs text-gray-600 text-center">Join the waitlist to be the first to transform your pharmacy operations.</p>

          <div className="flex justify-center mt-4">
            <Link to="/waitlist" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">Join Waitlist</Link>
          </div>


        </div>

        <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <BarChart2 className="h-14 w-auto" color="rgb(43, 143, 180)" />
            <h2 className="text-2xl font-bold text-black-600">MedGrid National Health Dashboard (MGIN)</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-800 break-words whitespace-normal">Designed for regulators and government bodies, this NDPA-compliant dashboard provides real-time, anonymized data on drug 
            availability, quantities, and pricing across LGAs. It enables agencies like NAFDAC and the PCN to spot quacks and track expired drugs, while helping the NCDC predict public health outbreaks by monitoring spikes in medication demand.
          </p>

          <p className="mt-3 text-xs text-gray-600 text-center">Contact us for information on licensing and access to the MGIN dashboard for agencies and NGOs.</p>

          <div className="flex justify-center mt-4">
            <Link to="/about" className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition">Learn More (Dashboard)</Link>
          </div>
        </div>

        <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <Plug className="h-14 w-auto" color="rgb(43, 143, 180)" />
            <h2 className="text-2xl font-bold text-black-600">Health Tech Integration Services</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-800 break-words whitespace-normal">We offer targeted geo-demand data for drug producers to identify high-demand regions, optimize supply chains, and prevent waste.
             Additionally, we provide targeted intervention tools for NGOs (like WHO and USAID) to see exactly where essential or expensive drugs are unavailable, ensuring donations reach the precise locations they are needed most.
          </p>

          <p className="mt-3 text-xs text-gray-600 text-center">Request a consultation to learn how our integrations can connect with your systems.</p>

          <div className="flex justify-center mt-4">
            <Link to="/contact" className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition">Request Consultation →</Link>
          </div>
        </div>

      </div>

    </div>
    
  )
}
export default Solutions;