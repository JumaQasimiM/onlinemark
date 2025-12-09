import { Header } from "./components/Header";

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
      <Header />
      <Home />

      <Footer />
    </>
  );
}

export default App;
