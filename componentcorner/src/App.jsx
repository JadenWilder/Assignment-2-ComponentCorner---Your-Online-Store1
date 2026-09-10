import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

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
            <ProductCard
              name="Wireless Headphones"
              price="79.99"
              image="https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones"
              description="Enjoy clear sound and comfortable listening with these wireless headphones."
            />

            <ProductCard
              name="Mechanical Keyboard"
              price="89.99"
              image="https://placehold.co/600x400/4f46e5/ffffff?text=Mechanical+Keyboard"
              description="A responsive mechanical keyboard built for work, gaming, and everyday use."
            />

            <ProductCard
              name="Gaming Mouse"
              price="49.99"
              image="https://placehold.co/600x400/667eea/ffffff?text=Gaming+Mouse"
              description="Get precise control and smooth performance with this ergonomic gaming mouse."
            />
          </div>
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