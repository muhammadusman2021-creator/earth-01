export class PredictionAgent {
    predict(indicators) {
  
      const values = [
        indicators.climate,
        indicators.economy,
        indicators.health,
        indicators.food,
        indicators.energy,
        indicators.water,
      ];
  
      const total = values.reduce(
        (sum, value) => sum + value,
        0
      );
  
      const score = Math.round(total / values.length);
  
      let verdict;
  
      if (score >= 70) {
        verdict = "Humanity Survives 🌍✅";
      } else if (score >= 40) {
        verdict = "Humanity Struggles ⚠️";
      } else {
        verdict = "Humanity Collapses ❌";
      }
  
      return {
        score,
        verdict,
      };
    }
  }