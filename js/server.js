const express = require("express");
const app = express();
const port = 3001;

const http = require("http");
const fs = require("fs");
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
	const message = "/index.html";
	res.send(200, "/../index.html");
});

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });

	fs.readFile(path.join("../index.html"), (err, data) => {
		if (err) {
			res.writeHead(500);
			res.end("Error loading the HTML file");
		} else {
			res.end(data);
		}
	});
});

// server.listen(3000, () => {
// 	console.log("Server is running on http://localhost:3000");
// });
