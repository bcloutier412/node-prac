const EventEmitter = require("events");
const myEmitter = new EventEmitter();

class Logger extends EventEmitter {
  log(name) {
    console.log(name);
    this.emit("messageLogged", { data: `logging for ${name}` });
  }
}

module.exports = Logger;
