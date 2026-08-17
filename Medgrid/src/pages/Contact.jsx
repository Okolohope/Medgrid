import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import InstagramSvg from "../assets/Instagram.svg";
import TikTokSvg from "../assets/TikTok.svg";
import FacebookSvg from "../assets/facebook.svg";
import WhatsAppSvg from "../assets/whatsApp.svg";


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function sendFormData(data) {
    // Post to Google Apps Script Web App as form-urlencoded to avoid preflight CORS
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzBYB6HBcO5jZ8v0pwqlAvg0Ew2zoxjNBRuuqVblWH6AvNUscsTwE3d2b4CiF8e-GgV/exec";
    try {
      const body = new URLSearchParams({
        name: data.name || "",
        email: data.email || "",
        organization: data.org || data.organization || "",
        message: data.message || "",
        createdAt: data.createdAt || "",
      }).toString();

      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const text = await res.text().catch(() => "");
      let json = {};
      try {
        json = text ? JSON.parse(text) : {};
      } catch (e) {
        // non-JSON response
      }

      if (!res.ok) {
        return { ok: false, message: json.message || res.statusText || text };
      }
      return { ok: true, message: json.result || "" };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    if (!isValidEmail(form.email)) {
      setStatus({ loading: false, error: "Please enter a valid email.", success: "" });
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    const result = await sendFormData(payload);
    if (!result.ok) {
      setStatus({ loading: false, error: result.message || "Submission failed.", success: "" });
      return;
    }

    setStatus({ loading: false, error: "", success: "Thanks — your message was sent." });
    setForm({ name: "", email: "", organization: "", message: "" });
  }

  return (
    <div className="w-full px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Get in Touch with Med<span className="text-[rgb(80,170,141)]">Grid</span>
        </h1>
        <p className="mt-3 text-center text-gray-700">Our team is ready to assist you. Connect with the right department for your needs.</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side: contact items + social icons */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-green-100 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/60">
                  <Mail className="h-6 w-6 text-[rgb(43,143,180)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GENERAL INQUIRIES</h3>
                  <p className="text-sm text-gray-700 mt-2">For feedback, general info, and media.</p>
                  <p className="mt-3 text-sm text-black"><span className="font-semibold">Email:</span> info@medgridng.app</p>
                  <p className="mt-1 text-sm text-black"><span className="font-semibold">Phone:</span> +234-913-774-8607</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-green-100 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/60">
                  <Phone className="h-6 w-6 text-[rgb(43,143,180)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PROVIDER SUPPORT</h3>
                  <p className="text-sm text-gray-700 mt-2">Help with MedGrid OS account, features, and technical issues.</p>
                  <p className="mt-3 text-sm text-black"><span className="font-semibold">Email:</span> support@medgridng.app</p>
                  <p className="mt-1 text-sm text-black"><span className="font-semibold">Phone:</span> +234-708-724-0931</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-green-100 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/60">
                  <Mail className="h-6 w-6 text-[rgb(43,143,180)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PARTNERSHIP & NGO</h3>
                  <p className="text-sm text-gray-700 mt-2">Discuss collaborations, data access, and public health projects.</p>
                  <p className="mt-3 text-sm text-black"><span className="font-semibold">Email:</span> partnerships@medgridng.app</p>
                  <p className="mt-1 text-sm text-black"><span className="font-semibold">Phone:</span> +234-813-863-0077</p>
                </div>
              </div>

              {/* Social icons row - clickable links */}
              <div className="mt-4 border-t pt-4">
                <p className="text-sm font-semibold">Give us a follow</p>
                <div className="flex items-center gap-4 mt-3">
                  <a href="https://instagram.com/medgrid" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-md hover:opacity-90 ">
                    <img src={InstagramSvg} alt="Instagram" className="h-15 w-15 " />
                  </a>
                  <a href="https://linkedin.com/company/medgrid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:opacity-90 ">
                    <img src={FacebookSvg} alt="LinkedIn" className="h-15 w-15 " />
                  </a>
                  <a href="https://tiktok.com/@medgrid" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 rounded-md hover:opacity-90 ">
                    <img src={TikTokSvg} alt="TikTok" className="h-15 w-15 " />
                  </a>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold">Message us on WhatsApp</p>
                  <a href="https://wa.me/234813863007" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
                    <img src={WhatsAppSvg} alt="WhatsApp" className="h-10 w-10 " />
                    <span>Message us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right side: contact form */}
          <main>
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 border bg-white">
              <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>

              <label className="block text-sm font-medium">Name (Full Name)</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="e.g., John Doe" />

              <label className="block text-sm font-medium">Email Address</label>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="e.g., john.doe@example.com" required />

              <label className="block text-sm font-medium">Organization (Optional)</label>
              <input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="mt-1 mb-3 w-full border rounded px-3 py-2" placeholder="e.g., City Hospital" />

              <label className="block text-sm font-medium">Message</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 mb-3 w-full border rounded px-3 py-2 h-32" placeholder="Your message here..." />

              {status.error && <p className="text-red-600 mb-2">{status.error}</p>}
              {status.success && <p className="text-green-600 mb-2">{status.success}</p>}

              <div className="flex justify-end">
                <button type="submit" disabled={status.loading} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">{status.loading ? "Sending…" : "Send Message"}</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Contact;