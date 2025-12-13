import { ToastContainer, Bounce } from "react-toastify";

// components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// pages
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/productsDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Notification */}
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

        {/* Layout */}
        <Header />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
