"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function AddAddressPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // State mapping exactly to your Prisma Schema database fields
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India", // Default country setup
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // 🟢 Dispatches a POST transaction directly to app/api/address/route.js
      const response = await fetch("/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // 1. Read response as raw text first to prevent crashing on HTML errors
      const rawText = await response.text();
      let data = {};

      try {
        if (rawText) {
          data = JSON.parse(rawText);
        }
      } catch (parseError) {
        // If it's not JSON, the backend threw a raw database exception page
        throw new Error(`Server Error (${response.status}): The database rejected the connection.`);
      }

      if (!response.ok) {
        // If our backend custom code caught the database error, display its specific details
        throw new Error(data.details || data.error || "Failed to save address details.");
      }

      setMessage({ type: "success", text: "Address securely logged to your profile!" });
      
      // Delay redirection slightly so the premium confirmation alert plays out
      setTimeout(() => {
        router.push("/profile");
      }, 1400);

    } catch (error) {
      console.error("Submission Error:", error);
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] antialiased flex flex-col justify-between p-6 md:p-12">
      
      {/* NAVIGATION BAR */}
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between border-b border-[#2C2A29]/10 pb-6 mb-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm tracking-widest text-[#2C2A29]/60 hover:text-[#2C2A29] transition group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> BACK
        </button>
        
        <h1 
          onClick={() => router.push("/")}
          className="text-2xl font-light tracking-[0.2em] text-[#2C2A29] cursor-pointer hover:opacity-80 transition"
        >
          EVAARA
        </h1>
        
        <button
          onClick={() => router.push("/")}
          className="text-sm tracking-widest text-[#2C2A29]/60 hover:text-[#2C2A29] transition"
        >
          HOME
        </button>
      </header>

      {/* FORM INTERFACE WRAPPER */}
      <main className="flex-grow max-w-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extralight tracking-wide mb-2 text-center md:text-left">
            Add Shipping Address
          </h2>
          <p className="text-sm text-[#2C2A29]/50 mb-8 text-center md:text-left">
            Please register your preferred regional distribution details below.
          </p>

          {/* Feedback Status Banners */}
          {message.text && (
            <div className={`p-4 rounded-xl text-sm mb-6 ${
              message.type === "success" 
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">Full Name</label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
              />
            </div>

            {/* Street Location String */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">Street Address</label>
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Apartment, suite, unit, building, street locality info"
                className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
              />
            </div>

            {/* Double Column: City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">City</label>
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">State / Region</label>
                <input
                  required
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
                />
              </div>
            </div>

            {/* Double Column: PIN & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">PIN / Postal Code</label>
                <input
                  required
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-[#2C2A29]/60 font-medium">Country</label>
                <input
                  required
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#2C2A29]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#2C2A29] shadow-sm transition"
                />
              </div>
            </div>

            {/* Luxury Primary CTA Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[#2C2A29] text-[#FDFBF7] py-4 rounded-xl text-sm font-medium tracking-widest hover:bg-[#403E3C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {loading ? "SAVING ADDRESS..." : "SAVE ADDRESS"}
            </button>

          </form>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl w-full mx-auto text-center border-t border-[#2C2A29]/5 pt-8 mt-12 text-xs tracking-wider text-[#2C2A29]/40">
        © {new Date().getFullYear()} EVAARA LUXURY CRYSTALS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}