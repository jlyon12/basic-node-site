const http = require("http");

const server = http.createServer((req, res) => {});

server.listen("localhost", 3000, () => {
	console.log("listening on port 3000");
});
