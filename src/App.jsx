import './App.css'
import Navbar from './components/Navbar'
import FirstSection from './components/sections/FirstSection'
import PrioritySection from './components/sections/PrioritySection'
import AboutUsSection from './components/sections/AboutUsSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/buttons/WhatsAppButton'
import CaseSection from './components/sections/CaseSection'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <PrioritySection></PrioritySection>
      <AboutUsSection></AboutUsSection>
      <CaseSection></CaseSection>
      <Footer></Footer>
      <WhatsAppButton />
      {/* <PrioritySection></PrioritySection>
      <Footer></Footer>
      <WhatsAppButton /> */}
    </>
  )
}

export default App
