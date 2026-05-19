"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I’m Soul Sync ✨\nTell me how you're feeling and I’ll suggest crystals for your energy.",
    },
  ]);

  const generateReply = (msg) => {
    const text = msg.toLowerCase();

    if (
      text.includes("stress") ||
      text.includes("anxious") ||
      text.includes("overwhelmed")
    ) {
      return "Amethyst and Lepidolite may help calm overwhelming emotions and restore balance ✨";
    }

    if (
      text.includes("love") ||
      text.includes("heartbreak") ||
      text.includes("relationship")
    ) {
      return "Rose Quartz is deeply connected to emotional healing, love, and self-worth 💗";
    }

    if (
      text.includes("focus") ||
      text.includes("study") ||
      text.includes("productivity")
    ) {
      return "Fluorite and Clear Quartz may help with clarity, focus, and mental alignment 🌙";
    }

    if (
      text.includes("sleep") ||
      text.includes("insomnia")
    ) {
      return "Moonstone and Amethyst are often associated with calm sleep energy 🌌";
    }

    if (
      text.includes("confidence") ||
      text.includes("fear")
    ) {
      return "Tiger’s Eye may help strengthen confidence and grounding energy ✨";
    }

    return "Tell me a little more about your emotions or energy lately ✨";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    const botMessage = {
      sender: "bot",
      text: generateReply(message),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    setMessage("");
  };

  return (
    <>
      {/* SMALL BAR */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setOpen(true)}
        className="
        fixed
        bottom-6
        right-6
        px-5
        py-3
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        shadow-xl
        cursor-pointer
        z-50
        text-sm
        "
      >
        Ask Soul Sync ✨
      </motion.div>

      {/* CHAT WINDOW */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            className="
            fixed
            bottom-24
            right-6
            w-96
            h-[550px]
            rounded-3xl
            bg-[#f8f4ef]/90
            backdrop-blur-2xl
            border
            border-black/5
            shadow-2xl
            z-50
            flex
            flex-col
            overflow-hidden
            "
          >
            {/* HEADER */}

            <div className="p-5 border-b border-black/5 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">
                  Soul Sync ✨
                </h2>

                <p className="text-xs opacity-60 mt-1">
                  Crystal Energy Guide
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-xl"
              >
                ×
              </button>
            </div>

            {/* MESSAGES */}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                    max-w-[80%]
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    whitespace-pre-line
                    ${
                      msg.sender === "user"
                        ? "bg-black text-white"
                        : "bg-black/5 text-black"
                    }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}

            <div className="p-4 border-t border-black/5 flex gap-2">
              <input
                type="text"
                placeholder="Tell me how you're feeling..."
                className="
                flex-1
                rounded-2xl
                bg-black/5
                px-4
                py-3
                outline-none
                text-sm
                "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
                className="
                px-5
                rounded-2xl
                bg-black
                text-white
                "
              >
                ✨
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}