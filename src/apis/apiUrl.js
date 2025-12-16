let Api_Url = "";

if (import.meta.env.MODE === "development") {
  // json-server in Entwicklung
  Api_Url = "https://dummyjson.com";
} else {
  // Produktiv-Backend
  Api_Url = "https://dummyjson.com";
  // Api_Url = "https://onlinemarkt.com/api/";
}

export { Api_Url };
