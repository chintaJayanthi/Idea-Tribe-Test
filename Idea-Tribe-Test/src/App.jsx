import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Cards from './components/Cards'
import CTS from './components/CTS'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <Navbar />
      <Hero/>
      <Steps/>
      <Cards/>
      <CTS/>
      <Footer/>
      
    </div>
  )
}

export default App
