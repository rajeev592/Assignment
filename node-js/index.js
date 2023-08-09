const fs = require("fs");

// Question2,3.............
fs.writeFileSync("node-js.txt", data);


const readData = fs.readFileSync("node-js.txt");

console.log(readData.toString());

// Question....4


fs.appendFileSync("nodejs_architecture.txt", newData);

const data = fs.readFileSync("nodejs_architecture.txt");

console.log(data.toString());

// Question......5


fs.unlink("./nodejs_architecture.txt", () =>
  console.log("File Deleted SuccessFully")
);


// Question...6

const os = require('os');

console.log(os.type());
console.log(os.release());





// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(JSON.stringify(os.networkInterfaces()) );
// console.log(os.tmpdir());
// console.log(os.endianness());
// console.log(os.hostname());
// console.log(os.platform());

// Question...7

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>Hello! Rajeev</h1>');
    }
    res.end();
});

server.listen(5000)

console.log('The HTTP server is running on port 5000');

// Question....8

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

// Question....9

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");


// Question....10

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);


