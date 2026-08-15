import logo from "../assets/MedGridLogo.png";
import people from "../assets/users.png";
import pharmacy from "../assets/pharamacy.png";
import eye from "../assets/eye.png";
import hospital from "../assets/hospital.png";
import chart from "../assets/chart.png";

function About() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex items-center justify-center pt-4 md:pt-8">
          <img src={logo} alt="MedGrid" className="h-20 w-auto sm:h-24 md:h-32 lg:h-36" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold text-black-700 sm:text-3xl md:text-4xl">
          About Med<span className="text-[rgb(80,170,141)]">Grid</span>
          </h1>

          <h1 className="mt-2 text-2xl font-bold text-black-700 sm:text-3xl md:text-4xl">
          Building a Smarter, Healthier Nigeria
          </h1>

          <div className="mt-4 px-2 text-sm leading-6 text-gray-800 sm:px-6 sm:text-base md:px-10 md:text-lg lg:px-16 lg:text-xl">
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

        <div className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pt-12">
          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-5 lg:min-h-[360px]">
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <img src={people} alt="MedGrid" className="h-16 w-auto sm:h-18 md:h-24 lg:h-28" />
            </div>

            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold text-green-600 md:text-4xl">218+</h1>
              <p className="mt-1 text-base font-normal text-gray-800 md:text-2xl">Nigerians impacted</p>
              <p className="mt-1 text-sm font-light text-gray-700 md:text-lg">(National Goal)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-5 lg:min-h-[360px]">
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <img src={pharmacy} alt="Pharmacy" className="h-16 w-auto sm:h-18 md:h-24 lg:h-28" />
            </div>

            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold text-green-600 md:text-4xl">25,000+</h1>
              <p className="mt-1 text-base font-normal text-gray-800 md:text-2xl">pharmacies Targeted</p>
              <p className="mt-1 text-sm font-light text-gray-700 md:text-lg">(National Goal)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-5 lg:min-h-[360px]">
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <img src={hospital} alt="Hospital" className="h-16 w-auto sm:h-18 md:h-24 lg:h-28" />
            </div>

            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold text-green-600 md:text-4xl">40,000+</h1>
              <p className="mt-1 text-base font-normal text-gray-800 md:text-2xl">Healthcare Facilities</p>
              <p className="mt-1 text-sm font-light text-gray-700 md:text-lg">(Planned Long-term Intergration)</p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-5 lg:min-h-[360px]">
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <img src={chart} alt="chart" className="h-16 w-auto sm:h-18 md:h-24 lg:h-28" />
            </div>

            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold text-green-600 md:text-4xl">Real-Time</h1>
              <p className="mt-1 text-base font-normal text-gray-800 md:text-2xl">Supply Chain Insights</p>
              <p className="mt-1 text-sm font-light text-gray-700 md:text-lg">&amp; Data</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-8 md:grid-cols-2 lg:gap-5 lg:pt-12">
          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={eye} alt="Mission" className="h-14 w-auto sm:h-16 md:h-20 lg:h-24" />
              <h1 className="text-2xl font-bold text-green-600 sm:text-3xl md:text-4xl lg:text-5xl">Our Mission</h1>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-6 text-gray-800 sm:text-base md:text-lg lg:text-xl">
                To bridge the access gap and fix the broken drug supply chain,
                ensuring essential medicines and healthcare are consistently
                available in all licensed pharmacies and healthcare facilities.
                And also provide Insights to agencies to spot quacks, track
                expired drug and predict outbreaks.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-100 p-4 shadow-sm md:p-6 lg:min-h-[300px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={eye} alt="Vision" className="h-14 w-auto sm:h-16 md:h-20 lg:h-24" />
              <h1 className="text-2xl font-bold text-green-600 sm:text-3xl md:text-4xl lg:text-5xl">Our Vision</h1>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-6 text-gray-800 sm:text-base md:text-lg lg:text-xl">
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