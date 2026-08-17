import { Search } from "lucide-react";
import { Cross } from "lucide-react";
import { MapPin } from "lucide-react";
import { Activity } from "lucide-react";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <div className="flex items-center justify-center pt-4 md:pt-8">
          <div className="flex h-24 w-24 items-center justify-center  p-3 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
            <img
              src={logo2}
              alt="MedGrid"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          The Real-Time Map for<br></br>
          Nigeria's Health Supply Chain
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
          MedGrid connects patients,healthcare providers,pharmacies,government,
          and drug producers on one intelligent platform to improve access,
          reduce stockouts,and save lives
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4">
        <div className="rounded-xl bg-green-100 p-6 shadow-sm">
          <Search className="mx-auto mb-4 h-8 w-8" color="rgb(43, 143, 180)" />
          <h1 className="font-bold">Find Medicine</h1>
          <p>
            Search and locate<br></br>
            medicine near you
          </p>
        </div>

        <div className="rounded-xl bg-green-100 p-6 shadow-sm">
          <Cross className="mx-auto mb-4 h-8 w-8" color="rgb(43, 143, 180)" />
          <h1 className="font-bold">Find Care</h1>
          <p>
            Connect with trusted<br></br>
            health care providers
          </p>
        </div>

        <div className="rounded-xl bg-green-100 p-6 shadow-sm">
          <MapPin className="mx-auto mb-4 h-8 w-8" color="rgb(43, 143, 180)" />
          <h1 className="font-bold">Near You</h1>
          <p>
            Real time availability<br></br>
            in your area
          </p>
        </div>

        <div className="rounded-xl bg-green-100 p-6 shadow-sm">
          <Activity className="mx-auto mb-4 h-8 w-8" color="rgb(43, 143, 180)" />
          <h1 className="font-bold">Real-Time Data</h1>
          <p>
            Accurate insights for<br></br>
            better decisions
          </p>
        </div>
      </section>

      <section>
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/waitlist" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Join Waitlist
          </Link>

          <Link to="/benefits" className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold">
            Learn More
          </Link>
        </div>
      </section>

      
      
    </>
  );
}

export default Home;