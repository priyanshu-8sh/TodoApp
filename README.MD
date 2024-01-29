# Todo App

This is a simple Todo App that allows you to manage your tasks. It consists of a frontend and a backend.

## Backend

The backend of the Todo App is built using Node.js and Express.js. It provides the API endpoints for creating, updating, and retrieving todo items. The backend uses MongoDB as the database to store the todo items.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshu-8sh/TodoApp.git

2. Navigate to the backend directory:
    ```bash
   cd todo-app/Backend

3. Install the dependencies:
   ```bash
   npm install

4. Add your own databaseURL inside the db.js

5. Start the server:
   ```bash
   node index.js

The backend server will start running on http://localhost:3001.
  

## Frontend

The frontend of the Todo App is built using React.js. It provides a user interface for managing and displaying the todo items.

### Installation

2. Navigate to the backend directory:
    ```bash
   cd todo-app/Frontend

3. Install the dependencies:
   ```bash
   npm install

4. Start the server:
   ```bash
   npm run dev

http://localhost:5173 (by default what vite does , make sure you have vite installed!)

### Usage
Once both the backend and frontend servers are running, you can access the Todo App by opening your web browser and navigating to http://localhost:5173. You can create new todo items, mark them as completed, and update their details
