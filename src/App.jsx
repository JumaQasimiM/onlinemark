import { Header } from "./components/Header";
import { ToastContainer, Bounce } from "react-toastify";

import { useProducts, useProductById } from "./apis/ProductsApi";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
function App() {
  // const { data, error } = useFetch("https://fakestoreapi.com/products");

  const { error } = useProducts();
  const { data: productById } = useProductById(12);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      {/* Notifcation using react tostify  */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Header />
      <Home />

      <Footer />
    </>
  );
}

export default App;
