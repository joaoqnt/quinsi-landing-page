import './App.css'
import FeatureSection from './components/FeatureSection'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import WhatsAppButton from './components/WhatsappButton'
import TechSection from './components/TechSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <FeatureSection></FeatureSection>
      <SecondSection></SecondSection>
      <Footer></Footer>
      <WhatsAppButton />
    </>
  )
}

export default App
