import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="Tensai Logo"
        className="w-auto h-32 md:h-48 lg:h-64 mb-6 max-w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Subtitle Animation */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-3xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        The right move isn’t rushed—it emerges through vision, patience, and
        seeing <span className="font-bold underline">the full board</span>.
      </motion.p>

      {/* Footer Text Animation */}
      <motion.p
        className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span className="font-bold">tensai</span> is coming soon.
      </motion.p>
    </div>
  );
}

export default App;
