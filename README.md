# 🛒 OnlineMarkt

**OnlineMarkt** is a modern, responsive online shopping platform built with **React** and **Tailwind CSS**. It features product listings, filtering, cart management, and smooth animations powered by **Framer Motion**.

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://onlinemarkt.netlify.app/)

---

## 📂 Project Structure

### **src/components**

- `Navbar.jsx` – Navigation bar component
- `Footer.jsx` – Footer with links and socials
- `ProductsCard.jsx` – Individual product card
- `Category` – Category list/filter component
- `Gallery` – Product gallery section
- `Hero` – Landing page hero section
- `Newsletter` – Subscribe section
- `ProductPopularCard` – Highlight popular products

### **src/pages**

- `Home.jsx` – Landing page
- `Products.jsx` – Product listing with category filter, search, add to cart, animations
- `ProductDetails.jsx` – Show product details and related products
- `Cart.jsx` – Shopping cart page
- `Login.jsx` – User login (localStorage, future backend integration with Django)
- `Register.jsx` – User registration (localStorage, future backend integration with Django)
- `About.jsx` – About page
- `Checkout.jsx` – Checkout with card, PayPal, Google Pay (planned for future)
- `Contact.jsx` – Contact form page
- `ReciveOrder.jsx` – Order details, shipping address, QR code generation
- `ForgetPassword.jsx` – Password reset (localStorage, future backend integration with Django)

### **src/Context**

- `ThemeContext.js` – Theme management (future)
- `CartContext.js` – Cart state management
- `LanguageContext.js` – Multilingual support (future)
- `AuthContext.js` – Authentication state (future)

### **src/apis**

- `apiurl.js` – API URLs for development & production
- `ProductsApi.js` – Custom hooks for fetching product data & business logic

### **src/hooks**

- `useFetch.js` – Custom fetch hook
- `useCart.js` – Custom hook for cart (future)

### **src/utility**

- `LocalStorage.js` – Local storage utilities (future)
- `validation.js` – Form validation (login/register)

### **src/assets**

- Images and media

---

## ⚙️ Technologies

- **React**
- **JavaScript**
- **Tailwind CSS**
- **Fetch API** – [https://dummyjson.com](https://dummyjson.com)
- **React Icons**
- **Framer Motion** – Animations
- **React Router DOM** – Routing
- **React QR Code** – QR code generation
- **React Toastify** – Notifications

---

📝 Notes

Login, Register, and Forget Password functionalities currently use local storage. Backend integration with Django is planned for the future.

Checkout payment options (Card, PayPal, Google Pay) are not live, planned for future implementation.

💡 Contribution

Contributions are welcome! Feel free to fork the repository, submit pull requests, or suggest new features.
