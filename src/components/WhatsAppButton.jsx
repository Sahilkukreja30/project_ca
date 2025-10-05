"use client";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // Replace with your business number in international format (no + or spaces)
  const phoneNumber = "919876543210"; // Example: +91 98765 43210
  const message = "Hello! I’d like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <path d="M20.52 3.48A11.76 11.76 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.118.552 4.105 1.604 5.9L.05 24l6.282-1.628A11.94 11.94 0 0 0 12 23.999h.002c6.627 0 12-5.373 12-11.999a11.94 11.94 0 0 0-3.48-8.52ZM12.001 21.6a9.6 9.6 0 0 1-4.906-1.336l-.351-.208-3.728.967.996-3.633-.229-.373A9.56 9.56 0 0 1 2.4 12C2.4 6.705 6.706 2.4 12.001 2.4a9.58 9.58 0 0 1 6.778 2.813 9.56 9.56 0 0 1 2.823 6.777c0 5.295-4.306 9.61-9.601 9.61Zm5.35-7.26c-.294-.147-1.742-.858-2.012-.954-.27-.1-.467-.148-.662.146-.195.294-.758.953-.929 1.148-.17.195-.341.22-.635.073-.293-.147-1.236-.456-2.356-1.45-.871-.777-1.46-1.732-1.633-2.026-.171-.294-.018-.453.13-.6.134-.133.293-.347.439-.52.147-.171.195-.293.293-.489.098-.195.049-.366-.024-.513-.073-.146-.662-1.597-.908-2.186-.24-.579-.485-.5-.662-.51h-.567c-.195 0-.514.073-.782.366-.269.294-1.027 1.003-1.027 2.445s1.052 2.838 1.195 3.033c.147.195 2.07 3.164 5.018 4.438.702.303 1.249.484 1.674.619.703.224 1.343.192 1.849.117.564-.085 1.742-.71 1.989-1.396.243-.683.243-1.267.171-1.396-.071-.122-.267-.195-.56-.342Z" />
      </svg>
    </motion.a>
  );
}
