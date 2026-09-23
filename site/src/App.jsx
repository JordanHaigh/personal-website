import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="starfield" aria-hidden="true" />
      <Hero />
      <Navigation />
      <main id="main">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
