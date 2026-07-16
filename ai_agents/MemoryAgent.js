export class MemoryAgent {
    constructor() {
      this.history = [];
    }
  
    save(record) {
      this.history.push(record);
    }
  
    getHistory() {
      return this.history;
    }
  
    getLastRecord() {
      if (this.history.length === 0) return null;
      return this.history[this.history.length - 1];
    }
  
    clear() {
      this.history = [];
    }
  }