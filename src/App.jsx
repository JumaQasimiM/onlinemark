import { motion } from "framer-motion";
import { useFetch } from "./hook/useFetch";
function App() {
  const { data, error } = useFetch("https://fakestoreapi.com/products");

  if (error) {
    return <div>{error}</div>;
  }
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

      {/* show data */}
      {/* condition wenn data exist  */}

      {data && data.map((item) => <h1 key={item.id}>{item.title}</h1>)}
    </div>
  );
}

export default App;
