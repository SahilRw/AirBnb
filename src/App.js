import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    // <h1 className="text-3xl font-bold underline bg-red-400">
    //   Hello world!
    // </h1>
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}

export default App;
