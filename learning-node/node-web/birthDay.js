const http = require('http');
const moment = require('moment');
const server = http.createServer();

server.on("request", (req, res) => {
	if (req.method === "POST" && req.url == "/date") {
		let body = [];

		req
			.on("data", (chunk) => {
				body.push(chunk);
			})
			.on("end", () => {
				res.writeHead(200, {"Content-Type": "text/plain"});
				body = Buffer.concat(body).toString();
				let date = moment(body, "YYYY-MM-DD");
				let day = moment(body).format("dddd");

                !date.isValid() ? res.end("invalid format") : res.end(`your birthday day is: ${day}`);
			});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(6000);
console.log('now listen on http://localhost:6000');