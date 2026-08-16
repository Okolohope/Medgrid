import logo from "../assets/MedGridLogo.png";
import people from "../assets/users.png";
import pharmacy from "../assets/pharamacy.png";
import eye from "../assets/eye.png";
import hospital from "../assets/hospital.png";
import chart from "../assets/chart.png";
import { Eye } from "lucide-react";
import { User } from "lucide-react";
import { Store } from "lucide-react";
import { Hospital } from "lucide-react";
import { TrendingUp } from "lucide-react";

function About() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex items-center justify-center pt-4 md:pt-8">
          <img src={logo} alt="MedGrid" className="h-20 w-auto sm:h-24 md:h-32 lg:h-36" />
        </div>

        <div className="mx-auto max-w-4xl text-center py-10 px-4">
          <h1 className="text-2xl font-bold text-black-700 sm:text-3xl md:text-4xl break-words whitespace-normal">
          About Med<span className="text-[rgb(80,170,141)]">Grid</span>
          </h1>

          <h1 className="mt-2 text-2xl font-bold text-black-700 sm:text-3xl md:text-4xl break-words whitespace-normal">
          Building a Smarter, Healthier Nigeria
          </h1>

          <div className="mt-4 px-2 text-sm leading-6 text-gray-800 sm:px-6 sm:text-base md:px-10 md:text-lg lg:px-16 lg:text-xl break-words whitespace-normal">
            <p>
              MedGrid is a unified digital platform that brings transparency,
              effciency, and accessibility to Nigeria's health care and health
              supply chain. Co-founded by Plangji Dawan and Hope Okolo, our
              organization is built to urgently address the critical failures in
              the nation's drug distribution network. We operate MedGrid a
              platform that seemlessly connect four vital groups: patients,
              healthcare providers, the government and drug manufacturers. By
              bridging these gaps, we are building a sustainable, data-driven
              ecosystem that protects lives and surpports local businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-8 lg:grid-cols-4 lg:gap-4 lg:pt-12 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[180px]">
            <div className="flex items-center justify-center pt-2 md:pt-3">
              <User className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-xl font-bold text-green-600 md:text-2xl break-words">218+</h1>
              <p className="mt-1 text-sm font-normal text-gray-800 md:text-lg break-words">Nigerians impacted</p>
              <p className="mt-1 text-xs font-light text-gray-700 md:text-sm">(National Goal)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[200px]">
            <div className="flex items-center justify-center pt-2 md:pt-3">
              <Store className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-xl font-bold text-green-600 md:text-2xl break-words">25,000+</h1>
              <p className="mt-1 text-sm font-normal text-gray-800 md:text-lg break-words">pharmacies Targeted</p>
              <p className="mt-1 text-xs font-light text-gray-700 md:text-sm">(National Goal)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[200px]">
            <div className="flex items-center justify-center pt-2 md:pt-3">
              <Hospital className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-xl font-bold text-green-600 md:text-2xl break-words">40,000+</h1>
              <p className="mt-1 text-sm font-normal text-gray-800 md:text-lg break-words">Healthcare Facilities</p>
              <p className="mt-1 text-xs font-light text-gray-700 md:text-sm">(Planned Long-term Integration)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[200px]">
            <div className="flex items-center justify-center pt-2 md:pt-3">
              <TrendingUp className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
            </div>

            <div className="mt-3 text-center">
              <h1 className="text-xl font-bold text-green-600 md:text-2xl break-words">Real-Time</h1>
              <p className="mt-1 text-sm font-normal text-gray-800 md:text-lg break-words">Supply Chain Insights</p>
              <p className="mt-1 text-xs font-light text-gray-700 md:text-sm">&amp; Data</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-8 md:grid-cols-2 lg:gap-5 lg:pt-12">
          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[180px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Eye className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
              <h1 className="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl lg:text-3xl break-words whitespace-normal">Our Mission</h1>
            </div>

            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-800 sm:text-sm md:text-base lg:text-lg break-words whitespace-normal">
                To bridge the access gap and fix the broken drug supply chain,
                ensuring essential medicines and healthcare are consistently
                available in all licensed pharmacies and healthcare facilities.
                And also provide Insights to agencies to spot quacks, track
                expired drug and predict outbreaks.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-3 shadow-sm md:p-4 lg:min-h-[180px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Eye className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" color="rgb(43, 143, 180)" />
              <h1 className="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl lg:text-3xl break-words whitespace-normal">Our Vision</h1>
            </div>

            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-800 sm:text-sm md:text-base lg:text-lg break-words whitespace-normal">
                A Nigeria where preventable deaths from lack of access to
                medicines and healthcare are a thing of the past, powered by
                transparency, data-driven supply chain where technology and
                collaboration prevents stock as stock-outs and substandard
                drugs. Giving Nigerians easy access to healthcare, pay Healthcare
                Facilities from success and give the Government the visibility it
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;