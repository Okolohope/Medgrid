import { Search } from "lucide-react";
import { Cross } from "lucide-react";
import { MapPin } from "lucide-react";
import { Activity } from "lucide-react";

import medgridLogo from "../assets/Medgrid1.png";

function Home() {
  return (
    <>
      <section className="text-center max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text5xl font-bold leading-tight max-w-4xl mx-auto">
          The Real-Time Map for<br></br>
          Nigeria's Health Supply Chain
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6 text-gray-700">
          MedGrid connects patients,healthcare providers,pharmacies,government,
          and drug producers on one intelligent platform to improve access,
          reduce stockouts,and save lives
        </p>
      </section>

      <section className="text-center grid grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="bg-green-100 p-6 rounded-xl">
          <Search className="w-8 h-8 mb-4 mx-auto" />
          <h1 className="font-bold">Find Medicine</h1>
          <p>
            Search and locate<br></br>
            medicine near you
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <Cross className="w-8 h-8 mb-4 mx-auto" />
          <h1 className="font-bold">Find Care</h1>
          <p>
            Connect with trusted<br></br>
            health care providers
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <MapPin className="w-8 h-8 mb-4 mx-auto" />
          <h1 className="font-bold">Near You</h1>
          <p>
            Real time availability<br></br>
            in your area
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <Activity className="w-8 h-8 mb-4 mx-auto" />
          <h1 className="font-bold">Real-Time Data</h1>
          <p>
            Accurate insights for<br></br>
            better decisions
          </p>
        </div>
      </section>

      <section>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Join Waitlist
          </button>

          <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </section>

      
      
    </>
  );
}

export default Home;