import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    
    <main>
      <div className="App">
        <Header />
        {/* <About /> */}
        <Portfolio />
        {/* <Contact />
        <Footer /> */}
      </div>
    </main>
  );
}

export default App;
