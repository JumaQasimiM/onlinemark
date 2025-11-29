import { motion } from "framer-motion";
function App() {
  return (
    <div className="text-center text-3xl ">
      <motion.h2
        drag
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-40"
      >
        Online Mark Project
      </motion.h2>
    </div>
  );
}

export default App;
