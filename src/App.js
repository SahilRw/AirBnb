import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
console.log(data)

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id} 
        item={item}    
      />
    )
  })
  return (
    <div className='bg-black text-white border-2 border-white'>
      <Navbar />
      <Hero />
      <section className='flex gap-5 overflow-x-auto flex-nowrap justify-center'>
        {cards}
      </section>
    </div>
  );
}

export default App;
