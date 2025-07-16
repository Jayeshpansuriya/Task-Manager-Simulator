# Task Manager Project

This is a simple task manager application built with JavaScript and Express. It allows users to create, read, update, and delete tasks.

## Project Structure

```
task-manager/
├── public/
│ ├── index.html # Frontend UI
│ └── style.css # Styling for task display
├── server.js # Express backend
├── taskData.js # Dummy task data used by backend
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Jayeshpansuriya/Task-Manager-Simulator.git

   ```

2. Navigate to the project directory:

   ```
   cd task-manager
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:

   ```
   npm start
   ```

2. The application will run on `http://localhost:3000`.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## 🔌 API Endpoints
```
GET /tasks → Returns high-priority, incomplete tasks

GET /log-tasks → Logs tasks one-by-one on terminal with delay
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
