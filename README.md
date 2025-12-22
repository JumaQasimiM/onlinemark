# 🛒 OnlineMarkt

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://onlinemarkt.netlify.app)
[![Website](https://img.shields.io/badge/Personal%20Website-MH--Jumaqasimi-blue)](https://mh-jumaqasimi.netlify.app)

**OnlineMarkt** is a **frontend online shop application** built with **React**, showcasing state management, API integration, component-based architecture, and user experience design.  
Users can **browse products**, **search and filter items**, view **product details**, manage a **shopping cart**, and proceed through a **checkout flow**.

---

## ✨ Features

### Product Management

- Fetch and display products from an external API
- Home page sections:
  - New Products
  - Popular Products

### Shop Page

- Search by product title
- Filter by category
- Add to cart
- Smooth animations for interactions

### Product Detail Page

- Full product information
- Related products based on category

### Shopping Cart

- Add and remove products
- Cart state management with **React Context API**

### Authentication

- Login / Register forms
- Forget & Reset Password
- Form validation
- User data stored in **LocalStorage**

### Checkout Page

- Multi-step form with client-side validation
- Checkout with card, PayPal, Google Pay (**planned for future**)

### ReciveOrder Page

- Display order details
- QR Code generation for products
- Redirect users to product details via QR scan

### Responsive UI

- Built with **Tailwind CSS**
- Smooth animations via **Framer Motion**
- Notifications with **React Toastify**
- Iconography using **React Icons**

---

## ⚠️ Challenges & Solutions

- **Synchronizing cart state with LocalStorage** → Solved using a dedicated **Cart Context**
- **Displaying related products** → Implemented filtering based on category
- **Checkout form management** → Controlled components with client-side validation

---

## 🧠 Technical Decisions

- Custom Hooks for reusable data-fetching logic
- React Context API for global state management (auth, cart)
- LocalStorage to persist user and cart data
- React Router for client-side navigation
- Controlled forms with validation for better UX
- Tailwind CSS for fast development and consistent UI

---

## ⚙️ Technologies

- **React** (Hooks, Context API, Router)
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Fetch API** ([https://dummyjson.com](https://dummyjson.com))
- **React Icons**
- **Framer Motion** (Animations)
- **React Router DOM**
- **React QR Code**
- **React Toastify** (Notifications)

---

## 🚀 Future Improvements

- Connect to a **real backend** using **Django REST Framework**
- Implement **real payment processing**
- Add **user roles** (Admin / User)
- Improve state management with **Redux** or **Zustand**

---

## 📂 Project Structure

### src/components

- `Navbar.jsx` – Navigation bar
- `Footer.jsx` – Footer with links & socials
- `ProductsCard.jsx` – Product card
- `Category` – Category filter
- `Gallery` – Product gallery section
- `Hero` – Landing page hero
- `Newsletter` – Subscription section
- `ProductPopularCard` – Highlight popular products

### src/pages

- `Home.jsx` – Landing page
- `Products.jsx` – Product listing, filter, search, add to cart, animations
- `ProductDetails.jsx` – Product details & related products
- `Cart.jsx` – Shopping cart page
- `Login.jsx` – User login (LocalStorage, future backend)
- `Register.jsx` – User registration (LocalStorage, future backend)
- `About.jsx` – About page
- `Checkout.jsx` – Checkout page (payments planned)
- `Contact.jsx` – Contact form
- `ReciveOrder.jsx` – Order details & QR code
- `ForgetPassword.jsx` – Password reset

### src/Context

- `ThemeContext.js` – Theme management (future)
- `CartContext.js` – Cart state management
- `LanguageContext.js` – Multilingual support (future)
- `AuthContext.js` – Authentication state (future)

### src/apis

- `apiurl.js` – API URLs (dev & prod)
- `ProductsApi.js` – Custom hooks for fetching product data

### src/hooks

- `useFetch.js` – Custom fetch hook
- `useCart.js` – Custom cart hook (future)

### src/utility

- `LocalStorage.js` – LocalStorage utilities (future)
- `validation.js` – Login/Register form validation

### src/assets

import read1 from "../assets/images/read1.png";
import read12 from "../assets/images/read2.png";
import read3 from "../assets/images/read3.png";
import read4 from "../assets/images/read4.png";
import read5 from "../assets/images/read5.png";

### Product Gallery

<table>
  <tr>
    <td><img src="src/assets/images/read1.png" alt="Product 1" width="200" /></td>
    <td><img src="src/assets/images/read2.png" alt="Product 2" width="200" /></td>
    <td><img src="src/assets/images/read3.png" alt="Product 3" width="200" /></td>
  </tr>
  <tr>
    <td><img src="src/assets/images/read4.png" alt="Product 4" width="200" /></td>
    <td><img src="src/assets/images/read5.png" alt="Product 5" width="200" /></td>
  </tr>
</table>

## 🔗 Links

- **Live Demo:** [https://onlinemarkt.netlify.app](https://onlinemarkt.netlify.app)- **Personal Website:** [https://mh-jumaqasimi.netlify.app](https://mh-jumaqasimi.netlify.app)
