import { useState } from "react";
import { UserRound, Hospital } from "lucide-react";

function Waitlist() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

      {/* ================= PAGE HEADING ================= */}
      <section className="text-center max-w-5xl mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Join the <span className="text-green-600">Med<span className="text-[rgb(80,170,141)]">Grid</span></span> Waitlist
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
          Be the first to experience the future of healthcare supply chain
          optimization.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Select your profile below to join our exclusive waitlist today.
        </p>

      </section>


      {/* ================= PROFILE SELECTION ================= */}
      <section className="max-w-5xl mx-auto mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* INDIVIDUAL / PATIENT */}
          <button
            type="button"
            onClick={() => setSelectedType("patient")}
            className={`text-left rounded-2xl border-2 p-6 sm:p-8 transition-all duration-200 ${
              selectedType === "patient"
                ? "border-green-600 bg-green-100 shadow-lg scale-[1.01]"
                : "border-green-300 bg-green-50/80 hover:border-green-500 hover:shadow-md"
            }`}
          >

            <div className="flex justify-center mb-4">
              <UserRound
                className="w-14 h-14 text-green-700"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              For Individuals & Patients
            </h2>

            <p className="text-center mt-3 text-gray-700">
              Join the MedGrid patient waitlist and get early access to
              medicine and healthcare services.
            </p>

            <div className="flex justify-center mt-5">
              <span className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
                {selectedType === "patient"
                  ? "Selected ✓"
                  : "Select Patient"}
              </span>
            </div>

          </button>


          {/* HEALTHCARE FACILITY */}
          <button
            type="button"
            onClick={() => setSelectedType("facility")}
            className={`text-left rounded-2xl border-2 p-6 sm:p-8 transition-all duration-200 ${
              selectedType === "facility"
                ? "border-green-600 bg-green-100 shadow-lg scale-[1.01]"
                : "border-green-300 bg-green-50/80 hover:border-green-500 hover:shadow-md"
            }`}
          >

            <div className="flex justify-center mb-4">
              <Hospital
                className="w-14 h-14 text-green-700"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              For Healthcare Facilities & Professionals
            </h2>

            <p className="text-center mt-3 text-gray-700">
              Register your healthcare facility or professional profile and
              get early access to MedGrid OS.
            </p>

            <div className="flex justify-center mt-5">
              <span className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
                {selectedType === "facility"
                  ? "Selected ✓"
                  : "Select Facility"}
              </span>
            </div>

          </button>

        </div>

      </section>


      {/* ================= PATIENT FORM ================= */}
      {selectedType === "patient" && (

        <section className="max-w-2xl mx-auto mt-10">

          <div className="bg-green-100/90 border-2 border-green-600 rounded-2xl p-6 sm:p-8 shadow-sm">

            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Individual & Patient Registration
            </h2>

            <p className="text-center text-gray-700 mt-2 mb-6">
              Enter your details to join the patient waitlist.
            </p>


            <form>

              {/* FULL NAME */}
              <div className="mb-5">

                <label
                  htmlFor="fullName"
                  className="block text-lg font-medium mb-2"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g., John Doe"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* EMAIL */}
              <div className="mb-5">

                <label
                  htmlFor="patientEmail"
                  className="block text-lg font-medium mb-2"
                >
                  Email Address
                </label>

                <input
                  id="patientEmail"
                  type="email"
                  placeholder="e.g., john.doe@example.com"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* LOCATION */}
              <div className="mb-6">

                <label
                  htmlFor="location"
                  className="block text-lg font-medium mb-2"
                >
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g., Lagos, Nigeria"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Join Patient Waitlist →
              </button>

            </form>

          </div>

        </section>

      )}


      {/* ================= FACILITY FORM ================= */}
      {selectedType === "facility" && (

        <section className="max-w-2xl mx-auto mt-10">

          <div className="bg-green-100/90 border-2 border-green-600 rounded-2xl p-6 sm:p-8 shadow-sm">

            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Healthcare Facility & Professional Registration
            </h2>

            <p className="text-center text-gray-700 mt-2 mb-6">
              Enter your facility details to request onboarding.
            </p>


            <form>

              {/* FACILITY NAME */}
              <div className="mb-5">

                <label
                  htmlFor="facilityName"
                  className="block text-lg font-medium mb-2"
                >
                  Facility Name
                </label>

                <input
                  id="facilityName"
                  type="text"
                  placeholder="e.g., City General Hospital"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* CONTACT ROLE */}
              <div className="mb-5">

                <label
                  htmlFor="contactRole"
                  className="block text-lg font-medium mb-2"
                >
                  Contact Person Role
                </label>

                <input
                  id="contactRole"
                  type="text"
                  placeholder="e.g., Administrator"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              {/* EMAIL */}
              <div className="mb-6">

                <label
                  htmlFor="facilityEmail"
                  className="block text-lg font-medium mb-2"
                >
                  Email Address
                </label>

                <input
                  id="facilityEmail"
                  type="email"
                  placeholder="e.g., contact@cityhospital.org"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>


              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Request Facility Onboarding →
              </button>

            </form>

          </div>

        </section>

      )}

    </main>
  );
}

export default Waitlist;