import { useState } from "react";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const askBot = () => {
    const question = message.toLowerCase();

    if (question.includes("climate")) {
      setReply(
        "Climate is a key Earth indicator. Sustainable choices can improve Earth's future."
      );
    } 
    else if (question.includes("water")) {
      setReply(
        "Water conservation, clean resources, and smart management can help humanity survive."
      );
    } 
    else if (question.includes("energy")) {
      setReply(
        "Renewable energy can reduce climate damage and create a sustainable future."
      );
    } 
    else if (question.includes("food")) {
      setReply(
        "Sustainable farming and food management are important for Earth's survival."
      );
    } 
    else if (question.includes("health")) {
      setReply(
        "Global health systems and prevention strategies protect humanity's future."
      );
    } 
    else if (question.includes("humanity")) {
      setReply(
        "Humanity's future depends on decisions about climate, health, food, energy, and water."
      );
    } 
    else {
      setReply(
        "I am Earth-01 AI. Ask me about climate, water, energy, food, health, or humanity's future."
      );
    }
  };

  return (
    <div>
      <h2>🌍 Earth-01 AI Chatbot</h2>

      <input
        type="text"
        placeholder="Ask about Earth..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askBot}>
        Ask
      </button>

      <p>{reply}</p>
    </div>
  );
}