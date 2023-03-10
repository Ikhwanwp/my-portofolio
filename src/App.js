import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Certifications from "./pages/Certifications.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <div className="">
      <NavBar />
      <section className="mt-24 ">
        <Home />
      </section>
      <section className="mt-20">
        <About />
      </section>
      <section className="mt-20">
        <Projects />
      </section>
      <section className="my-20">
        <Certifications />
      </section>
      <div className="fixed top-32 -z-10  left-0 right-0  h-screen flex justify-center">
        <div className="w-[436px] h-[104px] blur-[300px] bg-[#37ADB5]"></div>
        <div className="w-[169px] h-[413px] blur-[300px] bg-[#87515B] -rotate-[53deg] "></div>
      </div>
    </div>
  );
}

export default App;
