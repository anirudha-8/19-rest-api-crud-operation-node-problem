# Create a simple REST API with Express that supports CRUD operations (Create, Read, Update, Delete) for a list items

# 📚 Problem 19: Simple CRUD API with Express.js

Welcome to the **19th Node.js problem**! In this challenge, you'll create a simple **CRUD API** for managing a list of books using **Express.js**. This problem will help you understand and implement the essential HTTP methods: `GET`, `POST`, `PUT`, and `DELETE`.

---

## 📝 Problem Description

Build a RESTful API that performs **CRUD operations** on a collection of books. Each book will have the following attributes:

- `id`: A unique identifier (integer).
- `title`: The title of the book (string).
- `author`: The author of the book (string).

The API should expose the following endpoints:

1. **GET /books**: Retrieve a list of all books.
2. **POST /books**: Add a new book to the list.
3. **PUT /books/:id**: Update the details of an existing book by its `id`.
4. **DELETE /books/:id**: Remove a book from the list by its `id`.

---

## 🎯 Learning Objectives

- Understand and implement **CRUD operations** using Express.js.
- Learn how to work with **route parameters** and **request body**.
- Implement basic error handling for invalid or non-existent resources.

---

## 📂 Project Structure

The project folder should have the following structure:

```bash
19-rest-api-crud-operation-node-problem/
├── server.js         # Main server file
├── README.md         # Documentation for this problem
└── package.json      # Project configuration file
```

---

## 🚀 Getting Started

1. **Clone the Repository**

    ```bash
        git clone <https://github.com/your-username/problem-19-crud-api.git>
        cd problem-19-crud-api
    ```

2. **Install Dependencies**

    ```bash
        npm install
    ```

3. **Start the Server**

    ```bash
        node server.js
    ```

    The server will start at <http://localhost:8080>.

---

🌟 API Endpoints

1. **GET `/books`**

    - Description: Retrieve the list of all books.

    - Response Example:

    ```json
        [
        { "id": 1, "title": "Book 1", "author": "Author 1" },
        { "id": 2, "title": "Book 2", "author": "Author 2" },
        { "id": 3, "title": "Book 3", "author": "Author 3" }
        ]
    ```

2. **POST `/books`**

    - Description: Add a new book to the list.

    - Request Body:

    ```json
        {
            "title": "Book 4",
            "author": "Author 4"
        }
    ```

    - Response Example:

    ```json
        { "id": 4, "title": "Book 4", "author": "Author 4" }
    ```

3. **PUT `/books/:id`**

    - Description: Update the details of an existing book by its id.

    - Request Body:

    ```json
        {
            "title": "Updated Book Title"
        }
    ```

   - Response Example:

    ```json
        { "id": 2, "title": "Updated Book Title", "author": "Author 2" }
    ```

4. **DELETE `/books/:id`**

    - Description: Remove a book from the list by its id.

    - Response Example:

    ```json
        { "id": 3, "title": "Book 3", "author": "Author 3" }
    ```

---

## 🧠 What You’ll Learn

- Implementing RESTful API endpoints with Express.js.

- Using route parameters and JSON payloads.

- Basic error handling for invalid or non-existent resources.

---

## 🛠️ Possible Enhancements

- Add validation to ensure that book titles and authors are not empty.

- Use a database like MongoDB or SQLite instead of an in-memory array.

- Implement pagination for the list of books.

---

## 🤝 Contribution Guidelines

Have suggestions to improve this problem or want to contribute? Feel free to:

- Fork the repository.

- Create a new branch for your feature or fix.

- Submit a pull request for review.

---

## 💡 Next Steps

Once you've mastered this problem, move on to the next one in the Node.js series to learn more exciting concepts! 🎉

---

***Happy Coding! 💻***
