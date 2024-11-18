const express = require("express");

const app = express();

app.use(express.json());

const books = [
	{ id: 1, title: "Book 1", author: "Author 1" },
	{ id: 2, title: "Book 2", author: "Author 2" },
	{ id: 3, title: "Book 3", author: "Author 3" },
];

app.get("/", (req, res) => res.send("Hello World!"));

const port = 8080;

app.listen(port, () =>
	console.log(`Server is running at: http://localhost:${port}`)
);
