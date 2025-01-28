import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import CardContainer from "./components/CardContainer";

import Footer from "./components/Footer.jsx";

import cardPosts from "./components/data/cardPosts.js";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(cardPosts);

  return (
    <>
      <Navbar />

      <div className="main-container">
        <Hero />
      </div>

      <CardContainer posts={posts} />

      <Footer />
    </>
  );
}

export default App;
