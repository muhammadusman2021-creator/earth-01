export class EventAgent {
    constructor() {
      this.lastEvent = null;
    }
  
    generateEvent() {
      const events = [
        {
          title: "Global Flood Crisis",
          description: "Extreme weather causes massive flooding worldwide.",
          effects: {
            climate: -5,
            food: -8,
            water: -3,
          },
        },
        {
          title: "AI Technology Boom",
          description: "AI improves industries and healthcare.",
          effects: {
            economy: 8,
            health: 5,
            energy: 3,
          },
        },
        {
          title: "Pandemic Outbreak",
          description: "A new disease spreads across countries.",
          effects: {
            health: -10,
            economy: -5,
          },
        },
        {
          title: "Clean Energy Revolution",
          description: "Renewable energy adoption increases worldwide.",
          effects: {
            climate: 8,
            energy: 10,
          },
        },
      ];
  
      let newEvent;
  
      do {
        newEvent = events[Math.floor(Math.random() * events.length)];
      } while (
        this.lastEvent &&
        newEvent.title === this.lastEvent.title
      );
  
      this.lastEvent = newEvent;
  
      return newEvent;
    }
  }