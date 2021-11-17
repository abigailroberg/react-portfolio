import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const pages = ['about', 'portfolio', 'contact', 'resume']

  const [currentPage, setCurrentPage] = useState(pages[0])

  const render = () => {
    switch(currentPage) {
        case "about": return <About />
        case "portfolio": return <Portfolio />
        case "contact": return <Contact />
        case "resume": return <div>resume</div>
        default: return <About />
    }
}


  return (
    
    <main>
      <div className="App">
        <Header 
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <div>
          {render()}
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
