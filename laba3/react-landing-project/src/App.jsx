import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import HolidaySection from './components/HolidaySection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <HolidaySection />
      </main>
      <Footer />
    </>
  )
}

export default App
