export class DecisionAgent {
    applyDecision(current, decision) {
      return {
        climate: current.climate + (decision.effects.climate ?? 0),
        economy: current.economy + (decision.effects.economy ?? 0),
        health: current.health + (decision.effects.health ?? 0),
        food: current.food + (decision.effects.food ?? 0),
        energy: current.energy + (decision.effects.energy ?? 0),
        water: current.water + (decision.effects.water ?? 0),
      };
    }
  }