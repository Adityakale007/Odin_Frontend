import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home/Home";
import Radar from "./components/Radar/Radar";

const pageTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
};

function App() {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
}

// AnimatePresence wrapper to enable exit animations
function RoutesWrapper() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              key="home"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/radar"
          element={
            <motion.div
              key="radar"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Radar />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
