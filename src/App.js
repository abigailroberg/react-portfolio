import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const pages = ['about', 'portfolio', 'contact']

  const [currentPage, setCurrentPage] = useState(pages[0])

  const render = () => {
    switch(currentPage) {
        case "about": return <About />
        case "portfolio": return <Portfolio />
        case "contact": return <Contact />
        default: return <About />
    }
}


  return (
    
    <main>
      <div className='wrapper'>
      <div className="App">
        <Header 
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <div>
          {render()}
        </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
