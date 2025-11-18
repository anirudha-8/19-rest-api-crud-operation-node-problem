const express = require("express");
const app = express();

app.use(express.json());

const books = [
	{ id: 1, title: "Book 1", author: "Author 1" },
	{ id: 2, title: "Book 2", author: "Author 2" },
	{ id: 3, title: "Book 3", author: "Author 3" },
];

// using "get" method
app.get("/books", (req, res) => {
	res.json(books);
});

// using "post" method
app.post("/books", (req, res) => {
	console.log(req.body);
	const newBook = req.body;
	newBook.id = books.length + 1;
	books.push(newBook);
	res.status(201).json(newBook);
});

// using "put" method
app.put("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const updatedBook = req.body;
	const index = books.findIndex((book) => book.id === id);
	if (index === -1) {
		res.status(404).json({ error: "book not found" });
	} else {
		books[index] = { ...books[index], ...updatedBook };
		res.json(books[index]);
	}
});

// using "delete" method
app.delete("/books/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const index = books.findIndex((book) => book.id === id);
	if (index === -1) res.status(404).json({ error: "book not found" });
	else {
		const deletedBook = books[index];
		books.splice(index, 1);
		res.json(deletedBook);
	}
});

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}`);
});
