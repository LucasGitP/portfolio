import "./App.css";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Expirience from "./components/Expirience/Expirience";
import Education from "./components/Education/Education";
import Knowdledge from "./components/Knowdledge/Knowledge";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Info></Info>
      <About></About>
      <Education></Education>
      <Knowdledge></Knowdledge>
      <Expirience></Expirience>
      <Projects></Projects>
      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default App;
