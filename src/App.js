import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./cardData"


function App() {
  const cardElements = cardData.map(card => {
  return (
  <Card 
    img={card.img}
    rating={card.rating}
    reviews={card.reviews}
    country={card.country}
    tagline={card.tagline}
    price={card.price} 
    />
  )})
  
    return (
    <div>
      
        <Navbar />
        <Hero />
        <section className="cards-list">
        {cardElements}
        </section>
    </div>
  );
}

export default App;
