import { useState } from "react";
import Navbar from "./components/Navbar";
import Mainbio from "./components/Mainbio";
import PortfolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import Footer from "./components/Footer"

function App() {
  const [view, setView] = useState("bio");

  const styles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#00243d",
  }

  return (
    <>
      <div style={styles}>
        <Navbar view={view} setView={setView} />
        {view === "bio" && <Mainbio />}
        {view === "portfolio" && <PortfolioGrid />}
        {view === "contact" && <Contact />}
        {view === "resume" && <Resume />}
        <Footer />
      </div>
    </>
  );
}

export default App;
