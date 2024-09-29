This project is a full-stack application built with Go (backend) and React (frontend). It uses MongoDB as the database and Tailwind CSS for styling.

## Table of Contents

- Prerequisites
- Installation
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Go](https://golang.org/) (v1.23.1 or later)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/rishyym0927/golang-react-1.git
   cd golang-react-1
   ```

2. **Install backend dependencies:**

   ```sh
   go mod tidy
   ```

3. **Install frontend dependencies:**

   ```sh
   cd client
   npm install
   ```

## Running the Project

### Backend

1. **Set up environment variables:**

   Create a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "c:\Users\Lenovo\OneDrive\Desktop\MAIN\coding\GOLANG MAIN\GOLANG PROJECT 1\.env") file in the root directory and add the following:

   ```properties
   PORT=3000
   MONGO_URI=your_mongodb_uri
   ENV=development
   ```

2. **Run the backend server:**

   ```sh
   go run main.go
   ```

### Frontend

1. **Navigate to the client directory:**

   ```sh
   cd client
   ```

2. **Start the frontend development server:**

   ```sh
   npm run dev
   ```

3. **Open your browser and navigate to:**

   ```
   http://localhost:5173
   ```

## Project Structure

```
golang-react-1/
├── .env
├── .gitignore
├── .gitignore-1
├── air.toml
├── go.mod
├── go.sum
├── main.go
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── TodoManager.jsx
│   ├── tailwind.config.js
│   └── .env
```

## Environment Variables

The project uses the following environment variables:

- [`PORT`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fmain.go%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A69%2C%22character%22%3A1%7D%7D%5D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "Go to definition"): The port on which the backend server will run.
- [`MONGO_URI`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fprocess.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fmain.go%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A27%7D%7D%5D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "Go to definition"): The URI for connecting to MongoDB.
- [`ENV`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fprocess.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fmain.go%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A28%2C%22character%22%3A15%7D%7D%5D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "Go to definition"): The environment in which the application is running (e.g., development, production).

## Available Scripts

### Backend

- [`go run main.go`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fmain.go%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A25%2C%22character%22%3A5%7D%7D%5D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "Go to definition"): Runs the backend server.

### Frontend

- `npm run dev`: Starts the frontend development server.
- `npm run build`: Builds the frontend for production.
- `npm run serve`: Serves the built frontend.

## Notes

- Ensure MongoDB is running and accessible via the [`MONGO_URI`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fprocess.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2Fmain.go%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A27%7D%7D%5D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "Go to definition") specified in the [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FLenovo%2FOneDrive%2FDesktop%2FMAIN%2Fcoding%2FGOLANG%20MAIN%2FGOLANG%20PROJECT%201%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22eb0e1576-663b-4132-8bf1-c286bdde277f%22%5D "c:\Users\Lenovo\OneDrive\Desktop\MAIN\coding\GOLANG MAIN\GOLANG PROJECT 1\.env") file.
- The backend server runs on `http://localhost:3000` by default.
- The frontend development server runs on `http://localhost:5173` by default.

Feel free to contribute to this project by submitting issues or pull requests. Enjoy coding!
