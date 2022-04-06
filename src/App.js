import { useState } from "react";
import Mainbio from "./components/Mainbio";
import Navbar from "./components/Navbar";
import PortfolioGrid from "./components/PortfolioGrid";
import Resume from "./components/Resume";
import Contact from "./components/Contact"

function App() {
  const [view, setView] = useState("bio");

  return (
    <>
      <Navbar view={view} setView={setView} />
      {view === "bio" && <Mainbio />}
      {view === "portfolio" && <PortfolioGrid />}
      {view === "contact" && <Contact />}
      {view === "resume" && <Resume />}
    </>
  );
}

export default App;
