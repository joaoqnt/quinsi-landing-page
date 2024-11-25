import './App.css'
import Navbar from './components/Navbar'
import FirstSection from './components/sections/FirstSection'
import EvolutionSection from './components/sections/EvolutionSection'
import MobileSection from './components/sections/MobileSection'
import DesktopSection from './components/sections/DesktopSection'
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
      <EvolutionSection></EvolutionSection>
      <PrioritySection></PrioritySection>
      <MobileSection></MobileSection>
      <DesktopSection></DesktopSection>
      {/* <PrioritySection></PrioritySection>
      <AboutUsSection></AboutUsSection>
      <CaseSection></CaseSection>
      <Footer></Footer>
      <WhatsAppButton /> */}
      {/* <PrioritySection></PrioritySection>
      <Footer></Footer>
      <WhatsAppButton /> */}
    </>
  )
}

export default App
