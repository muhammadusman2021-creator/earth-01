import { useState } from "react";

import Home from "./home/Home";
import Simulation from "./simulation/Simulation";
import Chatbot from "./components/Chatbot";


export default function App() {

  const [page, setPage] = useState("home");


  return (

    <div>

      {page === "home" && (
        <Home
          startSimulation={() => setPage("simulation")}
        />
      )}


      {page === "simulation" && (
        <Simulation />
      )}


      <Chatbot />

    </div>

  );

}