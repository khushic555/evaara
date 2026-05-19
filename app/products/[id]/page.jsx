"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/FooterSection";
import { useCart } from "../../../context/CartContext";

// Master data array matching the IDs used in your Links
// 🟢 Update this master array inside app/products/[id]/page.jsx
const allProducts = [
  /* --- Rings & Pendants --- */
  { 
    id: "rose-quartz-ring", 
    name: "Rose Quartz Ring", 
    price: "₹899", 
    image: "/1.1.jpg", 
    description: "Embrace the soft, soothing energy of love. This beautiful Rose Quartz ring helps clear away emotional blockages while bringing harmony and compassion to your heart chakra." 
  },
  { 
    id: "amethyst-pendant", 
    name: "Amethyst Pendant", 
    price: "₹1299", 
    image: "/1.2.jpg", 
    description: "Calm your thoughts and step into inner clarity. This natural Amethyst crystal deepens intuition and grounds racing mental energies." 
  },
  { 
    id: "clear-quartz-ring", 
    name: "Clear Quartz Ring", 
    price: "₹799", 
    image: "/1.3.JPG", 
    description: "The ultimate orchestrator of energy. This Clear Quartz ring amplifies your intentions, manifests clarity, and purifies your daily aura." 
  },
  { 
    id: "citrine-pendant", 
    name: "Citrine Pendant", 
    price: "₹1499", 
    image: "/1.4.jpg", 
    description: "A pocket full of pure sunshine. Use this vibrant Citrine crystal pendant to welcome wealth, spark creative breakthroughs, and boost personal confidence." 
  },
  { 
    id: "obsidian-ring", 
    name: "Obsidian Ring", 
    price: "₹999", 
    image: "/1.5.jpg", 
    description: "A powerful energetic shield for your hands. Obsidian forms a protective boundary against negativity while keeping your mental focus grounded." 
  },

  /* --- 🟢 ADDED: Keychains & Others --- */
  {
    id: "door-charm",
    name: "Crystal Door Charm",
    price: "₹899",
    image: "/2.1.jpg", // Added a leading slash to ensure standard asset paths work on nested routes
    description: "Hang this sacred crystal charm near your entranceway to filter incoming energies, welcome peace, and establish a grounded environment for anyone who steps inside."
  },
  {
    id: "green-aventurine-keychain",
    name: "Green Aventurine Keychain",
    price: "₹1299",
    image: "/2.2.jpg",
    description: "The stone of opportunity and wealth. Carry this Green Aventurine crystal talisman in your pocket or secure it to your keys to attract good fortune throughout your day."
  },
  {
    id: "hex-keychain",
    name: "Hex Keychain",
    price: "₹799",
    image: "/2.3.JPG",
    description: "Precisely cut into a geometric hex point to channel clear, direct energy. Perfect for bringing focus, alignment, and emotional stability wherever you go."
  },
  {
    id: "tigers-eye-pocket-stone",
    name: "Pocket Stone - Tiger's Eye",
    price: "₹1499",
    image: "/2.4.jpg",
    description: "A solid weight of pure motivation and physical strength. Roll this polished Tiger's Eye stone in your palm to dispel fear and stoke your inner fire when making decisions."
  },
  {
    id: "stone-scent",
    name: "Stone Scent",
    price: "₹999",
    image: "/2.5.jpg",
    description: "Infuse your environment with the combined vibrational power of earth minerals and comforting aromatherapy. Designed to center chaotic mental frequencies."
  },
  /* --- 🟢 ADDED: Geodes & Showpieces --- */
  {
    id: "pyrite-geode-ball",
    name: "Pyrite Geode ball",
    price: "₹8999",
    image: "/3.1.jpg",
    description: "A solid sphere of glistening wealth and determination. Pyrite acts as a protective shield while drawing raw financial abundance, professional success, and creative momentum to your workspace."
  },
  {
    id: "rose-quartz-cluster",
    name: "Rose Quartz Cluster",
    price: "₹10299",
    image: "/3.2.jpg",
    description: "An unadulterated source of absolute comfort and light. Place this natural raw Rose Quartz cluster within your room layout to project a continuous field of emotional restoration and harmony."
  },
  {
    id: "selenite-geode",
    name: "Selenite Geode",
    price: "₹7900",
    image: "/3.3.JPG",
    description: "The ultimate liquid light clearing block. This exquisite Selenite structure continuously washes away stagnant heavy energy from its surroundings and charges neighboring gems nearby."
  },
  {
    id: "7-chakras-tree",
    name: "7 chakras tree",
    price: "₹1499",
    image: "/3.4.jpg",
    description: "An intricate balancing tree wired with seven distinct crystalline elements. Designed to cleanly target and realign all principal body energy nodes uniformly."
  },
  {
    id: "green-aventurine-tree",
    name: "Green Aventurine tree",
    price: "₹999",
    image: "/3.5.jpg",
    description: "Grow your intentions in real-time. This beautiful Green Aventurine showpiece tree serves as a focal emblem for absolute personal luck, fresh occupational chapters, and mental growth."
  }
];

const mockReviews = [
  { id: 1, user: "Aanya R.", rating: 5, text: "Absolutely stunning piece! The stone glows beautifully in daylight." },
  { id: 2, user: "Vikram S.", rating: 4, text: "Very premium feel. The notebook aesthetic of the packaging was a lovely touch." }
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Safely grab the specific crystal details based on the custom URL path parameter
  const product = allProducts.find((item) => item.id === id);

  // Fallback fallback handler in case a user manually enters a broken link path
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#fcfaf7]">
        <Navbar />
        <div className="text-center py-20 font-serif text-2xl">Crystal not found.</div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc") setQuantity(quantity + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#ddbaae] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] flex flex-col justify-between">
      <div>
        <Navbar />

        {/* MAIN PRODUCT ARRANGEMENT */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Product Image Card */}
          <div className="bg-white p-4 shadow-2xl border border-gray-200 transform -rotate-1">
            <div className="h-[450px] overflow-hidden rounded-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="font-serif pt-4">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{product.name}</h1>
            <p className="text-2xl text-gray-600 italic mt-2">{product.price}</p>
            
            <div className="w-20 h-[1px] bg-gray-300 my-6" />
            
            <p className="text-gray-700 leading-relaxed font-sans text-sm md:text-base">
              {product.description}
            </p>

            {/* QUANTITY SELECTOR */}
            <div className="mt-8 font-sans flex items-center gap-4">
              <span className="text-sm uppercase tracking-wider text-gray-500 font-serif italic">Quantity:</span>
              <div className="flex items-center border border-black rounded-full overflow-hidden bg-white">
                <button 
                  onClick={() => handleQuantityChange("dec")}
                  className="px-4 py-2 hover:bg-gray-100 transition font-bold"
                >
                  -
                </button>
                <span className="px-4 py-2 w-12 text-center border-x border-gray-200 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange("inc")}
                  className="px-4 py-2 hover:bg-gray-100 transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button 
              onClick={() => {
                for(let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="mt-8 w-full md:w-64 py-3 bg-black text-white hover:bg-neutral-800 transition uppercase text-sm tracking-widest rounded-full shadow-md"
            >
              Add To Cart
            </button>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24 font-serif">
          <div className="border-t border-gray-300 pt-12">
            <h2 className="text-2xl italic text-gray-800 mb-8">Customer Reflections ({mockReviews.length})</h2>
            
            <div className="space-y-6 max-w-3xl">
              {mockReviews.map((review) => (
                <div key={review.id} className="bg-white/60 p-6 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between font-sans mb-2">
                    <span className="font-semibold text-gray-800">{review.user}</span>
                    <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-600 italic font-serif">“{review.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}