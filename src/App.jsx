import "./App.css";
import About from "./components/About/About";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ProjectSection from "./components/Projects/ProjectsSection";
import Technologies from "./components/Technologies/Technologies";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <About />
        <Technologies />
        <section className="education">
          <h3>Education</h3>
          <h4>University</h4>
          <p className="course">
            Lviv Polytechnic National University{" "}
            <span>Oct 2020 – June 2024</span>{" "}
          </p>
          <hr />
          <p>Bachelor of Computer Science</p>
          <h4>Courses</h4>
          <p className="course">
            React Course <span>2024</span>{" "}
          </p>
          <hr />
        </section>
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
