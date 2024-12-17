import "./App.css";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Info></Info>
      <About></About>
      <Projects></Projects>
    </>
  );
}

export default App;
