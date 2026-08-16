import { useState } from "react";
import { UserRound, Hospital } from "lucide-react";

const PATIENT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzQbs8AcZtc8BAP-MvGa7MofI90HVtfh4oPbqoaj0QiyH648PqDE8QjGFsB42ohlWKR/exec";
const FACILITY_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx5jbRHSVViabXnVqxo09mF1sKFq7giPsjYKo4EJNdKQbU26yEGLJXz-0hAvz0s_WBJ/exec";

const initialPatientForm = {
  fullName: "",
  email: "",
  location: "",
};

const initialFacilityForm = {
  facilityName: "",
  contactRole: "",
  email: "",
};

function Waitlist() {
  const [selectedType, setSelectedType] = useState(null);
  const [patientForm, setPatientForm] = useState(initialPatientForm);
  const [facilityForm, setFacilityForm] = useState(initialFacilityForm);
  const [patientErrors, setPatientErrors] = useState({});
  const [facilityErrors, setFacilityErrors] = useState({});
  const [patientStatus, setPatientStatus] = useState({ loading: false, error: "", success: "" });
  const [facilityStatus, setFacilityStatus] = useState({ loading: false, error: "", success: "" });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePatientForm(data) {
    const errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!data.location.trim()) {
      errors.location = "Location is required.";
    }

    return errors;
  }

  function validateFacilityForm(data) {
    const errors = {};

    if (!data.facilityName.trim()) {
      errors.facilityName = "Facility name is required.";
    }

    if (!data.contactRole.trim()) {
      errors.contactRole = "Contact person role is required.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }

    return errors;
  }

  async function submitToGoogleSheet(url, payload) {
    try {
      const body = new URLSearchParams({
        ...payload,
        createdAt: new Date().toISOString(),
      }).toString();

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });

      const text = await res.text();
      let json = {};

      try {
        json = text ? JSON.parse(text) : {};
      } catch (error) {
        json = {};
      }

      if (!res.ok) {
        const rawMessage = json.message || json.error || text || "Submission failed. Please try again.";

        if (
          rawMessage.includes("Illegal spreadsheet id or key") ||
          rawMessage.includes("Cannot read properties of null") ||
          rawMessage.includes("getSheetByName") ||
          rawMessage.includes("openById")
        ) {
          return {
            ok: false,
            message: "Google Sheets setup error: check your spreadsheet ID and sheet name in Apps Script. The form cannot find the target sheet.",
          };
        }

        return {
          ok: false,
          message: rawMessage,
        };
      }

      return {
        ok: true,
        message: json.message || "Your request was submitted successfully.",
      };
    } catch (error) {
      return {
        ok: false,
        message: "Network error. Please check your connection and try again.",
      };
    }
  }

  async function handlePatientSubmit(e) {
    e.preventDefault();

    const errors = validatePatientForm(patientForm);
    setPatientErrors(errors);

    if (Object.keys(errors).length > 0) {
      setPatientStatus({ loading: false, error: "Please fix the highlighted fields.", success: "" });
      return;
    }

    setPatientStatus({ loading: true, error: "", success: "" });

    const result = await submitToGoogleSheet(PATIENT_WEB_APP_URL, patientForm);

    if (!result.ok) {
      setPatientStatus({ loading: false, error: result.message, success: "" });
      return;
    }

    setPatientStatus({ loading: false, error: "", success: result.message });
    setPatientForm(initialPatientForm);
    setPatientErrors({});
  }

  async function handleFacilitySubmit(e) {
    e.preventDefault();

    const errors = validateFacilityForm(facilityForm);
    setFacilityErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFacilityStatus({ loading: false, error: "Please fix the highlighted fields.", success: "" });
      return;
    }

    setFacilityStatus({ loading: true, error: "", success: "" });

    const result = await submitToGoogleSheet(FACILITY_WEB_APP_URL, facilityForm);

    if (!result.ok) {
      setFacilityStatus({ loading: false, error: result.message, success: "" });
      return;
    }

    setFacilityStatus({ loading: false, error: "", success: result.message });
    setFacilityForm(initialFacilityForm);
    setFacilityErrors({});
  }

  return (
    <main className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Join the Med<span className="text-[rgb(80,170,141)]">Grid</span> Waitlist
        </h1>

        <p className="mt-4 text-base leading-relaxed sm:text-lg md:text-xl">
          Be the first to experience the future of healthcare supply chain
          optimization.
        </p>

        <p className="text-base leading-relaxed sm:text-lg md:text-xl">
          Select your profile below to join our exclusive waitlist today.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex min-h-[420px] flex-col gap-4">
            <button
              type="button"
              onClick={() => setSelectedType("patient")}
              className={`flex w-full flex-col justify-between rounded-2xl border-2 p-6 text-left transition-all duration-200 sm:p-8 ${
                selectedType === "patient"
                  ? "scale-[1.01] border-green-600 bg-green-100 shadow-lg"
                  : "border-green-300 bg-green-50/80 hover:border-green-500 hover:shadow-md"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <UserRound className="h-14 w-14 text-green-700" strokeWidth={1.5} />
              </div>

              <h2 className="text-center text-2xl font-bold sm:text-3xl">
                For Individuals & Patients
              </h2>

              <p className="mt-3 text-center text-gray-700">
                Join the MedGrid patient waitlist and get early access to
                medicine and 
              </p>
              <p className="mt-0 text-center text-gray-700 pt-0">
                healthcare services.
              </p>

              <div className="mt-5 flex justify-center">
                <span className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white">
                  {selectedType === "patient" ? "Selected ✓" : "Select Patient"}
                </span>
              </div>
            </button>

            {selectedType === "patient" && (
              <section className="w-full">
                <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-green-600 bg-green-100/90 p-6 shadow-sm sm:p-8">
                  <h2 className="text-center text-2xl font-bold sm:text-3xl">
                    Individual & Patient Registration
                  </h2>

                  <p className="mt-2 mb-6 text-center text-gray-700">
                    Enter your details to join the patient waitlist.
                  </p>

                  <form onSubmit={handlePatientSubmit}>
                    <div className="mb-5">
                      <label htmlFor="fullName" className="mb-2 block text-lg font-medium">
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        value={patientForm.fullName}
                        onChange={(e) => setPatientForm({ ...patientForm, fullName: e.target.value })}
                        placeholder="e.g., John Doe"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          patientErrors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {patientErrors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{patientErrors.fullName}</p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="patientEmail" className="mb-2 block text-lg font-medium">
                        Email Address
                      </label>

                      <input
                        id="patientEmail"
                        type="email"
                        value={patientForm.email}
                        onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}
                        placeholder="e.g., john.doe@example.com"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          patientErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {patientErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{patientErrors.email}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="location" className="mb-2 block text-lg font-medium">
                        Location
                      </label>

                      <input
                        id="location"
                        type="text"
                        value={patientForm.location}
                        onChange={(e) => setPatientForm({ ...patientForm, location: e.target.value })}
                        placeholder="e.g., Lagos, Nigeria"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          patientErrors.location ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {patientErrors.location && (
                        <p className="mt-1 text-sm text-red-600">{patientErrors.location}</p>
                      )}
                    </div>

                    {patientStatus.error && <p className="mb-4 text-sm text-red-600">{patientStatus.error}</p>}
                    {patientStatus.success && <p className="mb-4 text-sm text-green-600">{patientStatus.success}</p>}

                    <button
                      type="submit"
                      disabled={patientStatus.loading}
                      className="w-full rounded-lg bg-green-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {patientStatus.loading ? "Submitting..." : "Join Patient Waitlist →"}
                    </button>
                  </form>
                </div>
              </section>
            )}
          </div>

          <div className="flex min-h-[420px] flex-col gap-4">
            <button
              type="button"
              onClick={() => setSelectedType("facility")}
              className={`flex w-full flex-col justify-between rounded-2xl border-2 p-6 text-left transition-all duration-200 sm:p-8 ${
                selectedType === "facility"
                  ? "scale-[1.01] border-green-600 bg-green-100 shadow-lg"
                  : "border-green-300 bg-green-50/80 hover:border-green-500 hover:shadow-md"
              }`}
            >
              <div className="mb-4 flex justify-center">
                <Hospital className="h-14 w-14 text-green-700" strokeWidth={1.5} />
              </div>

              <h2 className="text-center text-2xl font-bold sm:text-3xl">
                For Healthcare Facilities & Professionals
              </h2>

              <p className="mt-3 text-center text-gray-700">
                Register your healthcare facility or professional profile and
                get early access to MedGrid OS.
              </p>

              <div className="mt-5 flex justify-center">
                <span className="rounded-lg bg-green-600 px-6 py-2 font-semibold text-white">
                  {selectedType === "facility" ? "Selected ✓" : "Select Facility"}
                </span>
              </div>
            </button>

            {selectedType === "facility" && (
              <section className="w-full">
                <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-green-600 bg-green-100/90 p-6 shadow-sm sm:p-8">
                  <h2 className="text-center text-2xl font-bold sm:text-3xl">
                    Healthcare Facility & Professional Registration
                  </h2>

                  <p className="mt-2 mb-6 text-center text-gray-700">
                    Enter your facility details to request onboarding.
                  </p>

                  <form onSubmit={handleFacilitySubmit}>
                    <div className="mb-5">
                      <label htmlFor="facilityName" className="mb-2 block text-lg font-medium">
                        Facility Name
                      </label>

                      <input
                        id="facilityName"
                        type="text"
                        value={facilityForm.facilityName}
                        onChange={(e) => setFacilityForm({ ...facilityForm, facilityName: e.target.value })}
                        placeholder="e.g., City General Hospital"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          facilityErrors.facilityName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {facilityErrors.facilityName && (
                        <p className="mt-1 text-sm text-red-600">{facilityErrors.facilityName}</p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="contactRole" className="mb-2 block text-lg font-medium">
                        Contact Person Role
                      </label>

                      <input
                        id="contactRole"
                        type="text"
                        value={facilityForm.contactRole}
                        onChange={(e) => setFacilityForm({ ...facilityForm, contactRole: e.target.value })}
                        placeholder="e.g., Administrator"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          facilityErrors.contactRole ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {facilityErrors.contactRole && (
                        <p className="mt-1 text-sm text-red-600">{facilityErrors.contactRole}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="facilityEmail" className="mb-2 block text-lg font-medium">
                        Email Address
                      </label>

                      <input
                        id="facilityEmail"
                        type="email"
                        value={facilityForm.email}
                        onChange={(e) => setFacilityForm({ ...facilityForm, email: e.target.value })}
                        placeholder="e.g., contact@cityhospital.org"
                        className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 ${
                          facilityErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                      />

                      {facilityErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{facilityErrors.email}</p>
                      )}
                    </div>

                    {facilityStatus.error && <p className="mb-4 text-sm text-red-600">{facilityStatus.error}</p>}
                    {facilityStatus.success && <p className="mb-4 text-sm text-green-600">{facilityStatus.success}</p>}

                    <button
                      type="submit"
                      disabled={facilityStatus.loading}
                      className="w-full rounded-lg bg-green-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {facilityStatus.loading ? "Submitting..." : "Request Facility Onboarding →"}
                    </button>
                  </form>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Waitlist;