import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import CardContainer from './components/CardContainer';

import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <div className='main-container'>
        <Hero />
      </div>

      <CardContainer>
        <Card />
      </CardContainer>

      <Footer />

    </>
  );
}

export default App;
