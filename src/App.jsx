import { Header } from "./components/Header";

import { Category } from "./components/category";
import { useProducts, useProductById } from "./apis/ProductsApi";
import { Home } from "./pages/Home";
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
      <Category />
      <div className="text-center text-3xl ">
        {/* show data */}
        {/* condition wenn data exist  */}

        {/* {data && data.map((item) => <h1 key={item.id}>{item.title}</h1>)} */}
        <div className="mt-10">
          <h2>Product 12:</h2>
          {productById && <p>{productById.title}</p>}
        </div>
        {}
      </div>
    </>
  );
}

export default App;
