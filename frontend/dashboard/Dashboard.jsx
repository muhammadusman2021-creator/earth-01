export default function Dashboard({ indicators }) {
    return (
      <div>
        <h2>Earth Indicators</h2>
  
        <p>🌍 Climate: {indicators?.climate ?? 0}</p>
        <p>💰 Economy: {indicators?.economy ?? 0}</p>
        <p>🏥 Health: {indicators?.health ?? 0}</p>
        <p>🌾 Food: {indicators?.food ?? 0}</p>
        <p>⚡ Energy: {indicators?.energy ?? 0}</p>
        <p>💧 Water: {indicators?.water ?? 0}</p>
      </div>
    );
  }