import { useState } from "react";
import { DecisionAgent } from "../../ai_agents/DecisionAgent.js";
import { MemoryAgent } from "../../ai_agents/MemoryAgent.js";
import { EventAgent } from "../../ai_agents/EventAgent.js";
import { PredictionAgent } from "../../ai_agents/PredictionAgent.js";

export default function Simulation() {

  const [year, setYear] = useState(2026);

  const [indicators, setIndicators] = useState({
    climate: 70,
    economy: 60,
    health: 80,
    food: 75,
    energy: 65,
    water: 70,
  });

  const [history, setHistory] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [availableDecisions, setAvailableDecisions] = useState([]);


  const decisions = [
    {
      title:"⚡ Invest in Renewable Energy",
      effects:{climate:5, energy:10, economy:-3}
    },
    {
      title:"🌳 Protect Global Forests",
      effects:{climate:8, food:3, economy:-2}
    },
    {
      title:"🏭 Increase Industrial Production",
      effects:{economy:8, climate:-5, energy:-2}
    },
    {
      title:"💧 Build Water Management Systems",
      effects:{water:10, health:3, economy:-2}
    }
  ];



  const Indicator = ({icon,name,value}) => (
    <div style={{margin:"15px 0"}}>

      <p>{icon} {name}: {value}/100</p>

      <div style={{
        width:"320px",
        height:"18px",
        background:"#333",
        borderRadius:"20px"
      }}>

        <div style={{
          width:`${value}%`,
          height:"100%",
          background:"#00ff99",
          borderRadius:"20px"
        }}></div>

      </div>

    </div>
  );




  const startDecision = () => {

    const eventAgent = new EventAgent();

    const event = eventAgent.generateEvent();

    setCurrentEvent(event);

    setAvailableDecisions(decisions);

  };





  const chooseDecision = (decision)=>{


    const decisionAgent = new DecisionAgent();
    const memoryAgent = new MemoryAgent();


    let updated={...indicators};


    Object.keys(currentEvent.effects || {}).forEach(key=>{

      updated[key]=(updated[key]||0)+currentEvent.effects[key];

    });



    const newIndicators =
    decisionAgent.applyDecision(
      updated,
      decision
    );



    const record={
      year,
      event:currentEvent,
      decision,
      indicators:newIndicators
    };


    memoryAgent.save(record);


    setIndicators(newIndicators);

    setHistory([
      ...history,
      record
    ]);


    setYear(year+1);

    setAvailableDecisions([]);



    const predictionAgent =
    new PredictionAgent();


    setPrediction(
      predictionAgent.predict(newIndicators)
    );

  };





return (

<div style={{
background:"#050816",
color:"white",
minHeight:"100vh",
padding:"30px",
fontFamily:"Arial"
}}>


<h1>
🌍 Earth-01 Humanity Simulator
</h1>


<h2>
Year: {year}
</h2>



<h2>🌎 Earth Indicators</h2>


<Indicator icon="🌍" name="Climate" value={indicators.climate}/>
<Indicator icon="💰" name="Economy" value={indicators.economy}/>
<Indicator icon="🏥" name="Health" value={indicators.health}/>
<Indicator icon="🌾" name="Food" value={indicators.food}/>
<Indicator icon="⚡" name="Energy" value={indicators.energy}/>
<Indicator icon="💧" name="Water" value={indicators.water}/>




{currentEvent && (

<div style={{
background:"#111827",
padding:"20px",
borderRadius:"15px"
}}>

<h2>⚠️ World Event</h2>

<h3>{currentEvent.title}</h3>

<p>{currentEvent.description}</p>

</div>

)}





{!currentEvent && (

<button onClick={startDecision}>
🌎 Start World Event
</button>

)}





{availableDecisions.length>0 && (

<div>

<h2>
Make Humanity Decision
</h2>


{
availableDecisions.map((decision,index)=>(

<button

key={index}

onClick={()=>chooseDecision(decision)}

style={{
display:"block",
margin:"10px",
padding:"15px",
borderRadius:"12px",
cursor:"pointer"
}}

>

{decision.title}

</button>


))
}


</div>

)}






{prediction && (

<div style={{
background:"#102a43",
padding:"20px",
borderRadius:"15px",
marginTop:"20px"
}}>


<h2>
🤖 AI Prediction
</h2>


<p>{prediction.verdict}</p>

<h3>
Humanity Score: {prediction.score}/100
</h3>


</div>

)}







<button
onClick={()=>setYear(2100)}
style={{marginTop:"20px"}}
>
⏩ Skip To 2100
</button>







{year>=2100 && prediction && (

<div>

<h1>
🏁 Final Result
</h1>


{
prediction.score>=70 ?

<h2>🌍 Humanity Survived</h2>

:

prediction.score>=40 ?

<h2>⚠️ Humanity Struggled</h2>

:

<h2>💀 Humanity Collapsed</h2>

}


</div>

)}







<h2>
📜 Journey History
</h2>


{
history.map((item,index)=>(

<div key={index}>

<p>
Year {item.year}
</p>

<p>
Event: {item.event.title}
</p>

<p>
Decision: {item.decision.title}
</p>


</div>

))
}



</div>

);


}