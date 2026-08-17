import {
  Search,
  HandHeart,
  ClipboardList,
  Bell,
  Package,
  Truck,
  ChartNoAxesCombined,
  Network,
  Map,
  ChartLine,
  Building2,
  BarChart3,
} from "lucide-react";

function Benefits() {
  return (
    <div className="min-h-screen">

      {/* PAGE TITLE */}
      <section className="text-center max-w-6xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Benefits of Med<span className="text-[rgb(80,170,141)]">Grid</span>: A Connected Health Ecosystem.
        </h1>

        <p className="text-lg md:text-2xl text-gray-800 mt-3">
          A Unified Solution Delivering Tangible Benefits for Every
          Stakeholder in Nigeria.
        </p>
      </section>


      {/* PATIENTS */}
      <section className="max-w-6xl mx-auto px-4 mt-6">

        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Benefits for Patients (MedGrid App)
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mt-1">
            Faster Access to Medicine, Care, and Personal Information.
          </p>
        </div>

        {/* MOBILE: 2 COLUMNS | DESKTOP: 4 COLUMNS */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Search className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              FASTER MEDICINE FINDER
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Locate essential medicines at nearby verified pharmacies in
              seconds.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <HandHeart className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              ACCESSIBLE CARE
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Connect with accredited healthcare facilities and specialists.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <ClipboardList className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              UNIFIED HEALTH RECORD
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Access personal health and medical history with secure,
              one-click visibility.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Bell className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              MEDICATION ALERTS
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Receive timely reminders for doses and medication refills.
            </p>
          </div>

        </div>
      </section>


      {/* HEALTHCARE PROVIDERS */}
      <section className="max-w-6xl mx-auto px-4 mt-12">

        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Benefits for Healthcare Providers (MedGrid OS)
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mt-1">
            Optimize Operations, Inventory, and Patient Fulfillment.
          </p>
        </div>

        {/* MOBILE: 2 COLUMNS | DESKTOP: 4 COLUMNS */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Package className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              STREAMLINED INVENTORY
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Predict demand, track usage, and eliminate stockouts with smart
              management.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Truck className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              OPTIMIZED FULFILLMENT
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Process prescriptions and care orders quickly and accurately.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <ChartNoAxesCombined className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4" color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              OPERATIONAL INSIGHTS
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              View real-time reports on facility performance and resource
              allocation.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Network className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4" color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              CONNECTED SUPPLY CHAIN
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Communicate directly with distributors and government agencies.
            </p>
          </div>

        </div>
      </section>


      {/* AGENCIES & NGOs */}
      <section className="max-w-6xl mx-auto px-4 mt-12 pb-12">

        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            Benefits for Agencies & NGOs (MGIN)
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mt-1">
            Data-Driven Public Health Strategy, Monitoring, and M&E.
          </p>
        </div>

        {/* MOBILE: 2 COLUMNS | DESKTOP: 4 COLUMNS */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Map className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              NATIONAL HEALTH DATA DASHBOARD
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Visualize medicine availability and supply patterns across
              Nigeria.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <ChartLine className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              EFFECTIVE PROGRAM MONITORING
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Track disease outbreaks and monitor health program performance.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <Building2 className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 " color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              RESOURCE PLANNING
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Optimize resource allocation and support facility network
              management.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-green-100 rounded-xl p-4 md:p-6 text-center border border-green-100">
            <BarChart3 className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4" color="rgb(43, 143, 180)" />

            <h3 className="font-bold text-sm md:text-lg leading-tight">
              M&E AND REPORTING
            </h3>

            <p className="mt-2 text-xs md:text-base text-gray-700 leading-relaxed">
              Conduct program evaluation and reporting with accurate,
              real-time data.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Benefits;