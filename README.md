# OnlineMarkt

A modern, responsive, and interactive online shopping platform built with **React**, **Tailwind CSS**, **Framer Motion**, and **React Icons**. This project demonstrates a complete e-commerce experience with beautifully animated components, product filtering, and cart management.

---

## 🗂 Project Structure

### **src/components**

- **Navbar.jsx** – Top navigation bar
- **Footer.jsx** – Footer with links and social media
- **ProductsCard.jsx** – Card for individual products
- **category/** – Category filter components
- **Gallary/** – Image gallery component
- **Hero/** – Landing hero section
- **Newsletter/** – Newsletter subscription component
- **productPopularCard/** – Featured/popular product card

### **src/pages**

- **Home.jsx** – Landing page
- **Products.jsx** – Show all products with category filter, search, add-to-cart, and animations
- **ProductsDetails.jsx** – Product detail page with related products
- **Cart.jsx** – Shopping cart page
- **Login.jsx** – User login (data saved in local storage, future backend with Django)
- **Register.jsx** – Register page (data saved in local storage, future backend with Django)
- **About.jsx** – About section
- **Checkout.jsx** – Checkout page (card, PayPal, Google Pay integration planned)
- **Contact.jsx** – Contact form
- **ReceiveOrder.jsx** – Order details with shipping address and QR code generation
- **ForgetPassword.jsx** – Reset password functionality (currently using local storage, future backend integration)

### **src/Context**

- **ThemeContext.js** – Theme management (future use)
- **CartContext.js** – Cart state management
- **LanguageContext.js** – Language management (future use)
- **AuthContext.js** – Authentication context (future use)

### **src/apis**

- **apiurl.js** – API URLs for development and production
- **ProductsApi.js** – Custom hooks to fetch product data and handle business logic

### **src/hooks**

- **useFetch.js** – Custom hook for fetching data
- **useCart.js** – Custom hook for cart operations (future use)

### **src/utility**

- **LocalStorage.js** – Local storage utilities (future use)
- **validation.js** – Form validation utility (used in login/register)

### **src/assets**

- **images/** – Project images

---

## ⚡ Technology Stack

- **React.js** – UI framework
- **JavaScript** – Programming language
- **Tailwind CSS** – Styling framework
- **Fetch API** – Data fetching ([https://dummyjson.com](https://dummyjson.com))
- **React-Toastify** – Notifications
- **React Icons** – Icons
- **React Router DOM** – Routing
- **React QR Code** – Generate QR codes for orders
- **Framer Motion** – Animations

---

## 🚀 Features

- Modern, responsive design
- Interactive and animated UI
- Product filtering and search functionality
- Cart management and checkout flow
- QR code generation for orders
- Newsletter subscription
- Social media integration

---

## 🔗 Demo

Check out the live demo: [https://onlinemarkt.netlify.app](https://onlinemarkt.netlify.app)

---

## 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/onlinemarkt.git
cd onlinemarkt
```

2. npm install
3. Start the development server: npm start
   Open http://localhost:3000
   to view it.

📝 Notes

Login, Register, and Forget Password functionalities currently use local storage. Backend integration with Django is planned for the future.

Checkout payment options (Card, PayPal, Google Pay) are not live, planned for future implementation.

💡 Contribution

Contributions are welcome! Feel free to fork the repository, submit pull requests, or suggest new features.
