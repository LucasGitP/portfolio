import "./App.css";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Expirience from "./components/Expirience/Expirience";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Info></Info>
      <About></About>
      <Education></Education>
      <Expirience></Expirience>
      <Projects></Projects>
    </>
  );
}

export default App;
