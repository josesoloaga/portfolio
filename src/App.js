import "./App.css";
import { Main } from "./components/main/Main";
import { NavMenu } from "./components/nav/NavMenu";
import { skills } from "./components/skills/InitData";
import { useState } from "react";
import { Footer } from "./components/Footer";


function App() {

  const [stateMain, setStateMain] = useState("entry");

  return (
    <div className="App">
      <NavMenu stateMain={stateMain} setStateMain={setStateMain} />
      <Main skills={skills} stateMain={stateMain} setStateMain={setStateMain} />
    <Footer/>

    </div>
  );
}

export default App;
