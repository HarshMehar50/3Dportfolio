import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/HeroModels/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import TeckStack from "./sections/TeckStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
    return (
        <>
            <NavBar />
           <Hero />
            <ShowcaseSection />
            <TeckStack />
            <Contact />
            <Footer />
        </>
    )
}
export default App
