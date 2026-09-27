import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image:
        "https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones",
      description:
        "Enjoy clear sound and comfortable listening with these wireless headphones.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      image:
        "https://placehold.co/600x400/4f46e5/ffffff?text=Mechanical+Keyboard",
      description:
        "A responsive mechanical keyboard built for work, gaming, and everyday use.",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 49.99,
      image:
        "https://placehold.co/600x400/667eea/ffffff?text=Gaming+Mouse",
      description:
        "Get precise control and smooth performance with this ergonomic gaming mouse.",
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <main>
        <section id="home">
          <Hero
            title="Upgrade Your Setup"
            subtitle="Discover quality tech products designed to make your everyday life better."
            buttonText="Shop Products"
          />
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <h2>Featured Products</h2>
            <p>Check out some of our favorite tech essentials.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section" id="cart">
          <div className="section-heading">
            <h2>Shopping Cart</h2>
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="cart-total">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
              </div>
            </>
          )}
        </section>

        <section className="about-section" id="about">
          <h2>Why ComponentCorner?</h2>
          <p>
            We make it easy to find useful technology without making the
            shopping experience complicated. Our goal is to offer quality
            products at prices that make sense.
          </p>
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        description="Your online store for quality tech products and everyday essentials."
        email="support@componentcorner.com"
        phone="(803) 555-0123"
      />
    </div>
  );
}

export default App;