import { useState } from "react";

export default function Home({ startSimulation }) {

  return (

    <div
      style={{
        minHeight:"100vh",
        background:
        "radial-gradient(circle at top, #123, #020617)",
        color:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        padding:"30px"
      }}
    >

      <h1
      style={{
        fontSize:"55px",
        marginBottom:"10px",
        textShadow:"0 0 20px cyan"
      }}
      >
        🌍 Earth-01
      </h1>


      <h2>
        Humanity Simulator
      </h2>


      <p
      style={{
        maxWidth:"600px",
        fontSize:"20px",
        opacity:"0.8"
      }}
      >
        Lead humanity from 2026 to 2100.
        Make decisions, face global crises,
        and discover if Earth survives.
      </p>



      <div
      style={{
        margin:"30px",
        fontSize:"45px"
      }}
      >
        🌎
      </div>



      <button

      onClick={startSimulation}

      style={{
        padding:"18px 40px",
        fontSize:"20px",
        borderRadius:"30px",
        border:"none",
        background:"#00ff99",
        cursor:"pointer",
        boxShadow:"0 0 25px #00ff99"
      }}

      >

      🚀 Start Simulation

      </button>



      <p
      style={{
        marginTop:"40px",
        opacity:"0.6"
      }}
      >
      "Can humanity survive until 2100?"
      </p>



    </div>

  );
}