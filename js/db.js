const { MongoClient } = require("mongodb");
const http = require("http");

const uri = "mongodb://localhost:27017/";

http.createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("Hello World!");
}).listen(8080);

async function connectToDatabase() {
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();

		console.log("Connected to MongoDB!");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	} finally {
		await client.close();
	}
}

connectToDatabase();
