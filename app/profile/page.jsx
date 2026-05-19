"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserProfile, useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Plus, ArrowLeft } from "lucide-react";

export default function ProfileDashboard() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [addresses, setAddresses] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const [mounted, setMounted] = useState(false);

  // 1. Handle mounting state to neutralize browser extension injections
  useEffect(() => {
    setMounted(true);
  }, []);

// 2. Fetch saved addresses securely
  useEffect(() => {
    if (isSignedIn && mounted) {
      fetch("/api/address")
        .then(async (res) => {
          // Read as text first to safeguard against empty bodies or server crashes
          const text = await res.text();
          if (!res.ok) {
            throw new Error(text || "Server returned an error flag");
          }
          return text ? JSON.parse(text) : [];
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setAddresses(data);
          } else {
            setAddresses([]);
          }
        })
        .catch((err) => {
          console.error("Error fetching addresses:", err);
          setAddresses([]); // Gracefully fall back to an empty array instead of crashing
        })
        .finally(() => setLoadingAddresses(false));
    }
  }, [isSignedIn, mounted]);

  // Return a clean loading state until client mounting settles
  if (!isLoaded || !mounted) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center text-sm tracking-widest text-[#2C2A29]/60">
        LOADING...
      </div>
    );
  }

  if (!isSignedIn) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] antialiased p-6 md:p-12">
      {/* HEADER */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-[#2C2A29]/10 pb-6 mb-12">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm tracking-widest text-[#2C2A29]/60 hover:text-[#2C2A29] transition group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> HOME
        </button>
        
        <h1 
          onClick={() => router.push("/")}
          className="text-3xl font-light tracking-[0.2em] text-[#2C2A29] cursor-pointer"
        >
          EVAARA
        </h1>
        
        <div className="text-sm tracking-widest text-[#2C2A29]/40 italic">
          Welcome, {user.firstName || "Guest"}
        </div>
      </header>

      {/* MAIN CONTAINER SPLIT */}
      <main className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: SHIPPING ADDRESSES & HISTORICAL LOGS */}
        <div className="lg:col-span-5 space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-[#2C2A29]/10 rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#2C2A29]/70" />
                <h2 className="text-xl font-light tracking-wide">Shipping Addresses</h2>
              </div>
              
              <button
                onClick={() => router.push("/profile/address")}
                className="flex items-center gap-1 text-xs tracking-widest bg-[#2C2A29] text-[#FDFBF7] px-3 py-2 rounded-xl hover:bg-[#403E3C] transition"
              >
                <Plus size={14} /> ADD
              </button>
            </div>

            {loadingAddresses ? (
              <p className="text-sm text-[#2C2A29]/40 py-4 italic">Checking address log...</p>
            ) : addresses.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-[#2C2A29]/10 rounded-xl bg-[#FDFBF7]/50">
                <p className="text-sm text-[#2C2A29]/50 mb-2">No addresses saved yet.</p>
                <p className="text-xs text-[#2C2A29]/30">Add your credentials for rapid checkouts.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {addresses.map((addr) => (
                  <div 
                    key={addr.id} 
                    className="p-4 bg-[#FDFBF7] border border-[#2C2A29]/5 rounded-xl space-y-1 hover:border-[#2C2A29]/20 transition"
                  >
                    <p className="text-sm font-medium">{addr.fullName}</p>
                    <p className="text-xs text-[#2C2A29]/70">{addr.address}</p>
                    <p className="text-xs text-[#2C2A29]/70">{addr.city}, {addr.state} - {addr.pincode}</p>
                    <p className="text-xs text-[#2C2A29]/40 tracking-wider uppercase mt-1">{addr.country} • {addr.phone}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-[#2C2A29]/10 rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag size={18} className="text-[#2C2A29]/70" />
              <h2 className="text-xl font-light tracking-wide">Order History</h2>
            </div>
            <div className="text-center py-6 bg-[#FDFBF7]/50 border border-dashed border-[#2C2A29]/10 rounded-xl">
              <p className="text-sm text-[#2C2A29]/40 italic">No historical orders logged yet.</p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: OFFICIAL CLERK CREDENTIALS CARD */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[650px] overflow-hidden rounded-2xl border border-[#2C2A29]/10 shadow-sm"
          >
            <UserProfile 
              routing="hash"
              appearance={{
                elements: {
                  cardBox: "w-full shadow-none rounded-none bg-white",
                  navbar: "hidden md:flex bg-white border-r border-[#2C2A29]/5",
                  headerTitle: "font-light tracking-wide text-xl text-[#2C2A29]",
                  profileSectionTitleText: "font-medium tracking-wider text-xs uppercase text-[#2C2A29]/60",
                  scrollBox: "bg-white",
                }
              }}
            />
          </motion.div>
        </div>

      </main>
    </div>
  );
}