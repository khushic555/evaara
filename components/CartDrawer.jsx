"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Background Blur Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* 1/3rd Screen Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-2xl z-[101] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-tighter">Your Bag ({cartItems.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-2xl">&times;</button>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 italic">Your bag is empty.</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className="flex gap-4 border-b pb-4">
                    <img src={item.image || item.img} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-500">{item.price}</p>
                      <button 
                        onClick={() => removeFromCart(i)}
                        className="text-xs text-red-500 underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Total */}
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="w-full py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">
                Proceed to Pay
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}