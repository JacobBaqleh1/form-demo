# customer-feedback-viewer

This project is a full-stack customer feedback viewer application built with React for the frontend and Node.js with Express and PostgreSQL for the backend. The application allows users to submit, view, filter, and manage customer feedback efficiently.

## Project Structure

- **client/**: Contains the frontend application built with React.
  - **src/**: Source files for the React application.
    - **components/**: Contains React components for displaying and managing feedback.
    - **services/**: Contains API service functions for making requests to the backend.
    - **types/**: TypeScript types and interfaces for type safety.
    - **utils/**: Utility functions and constants used throughout the application.
    - **App.tsx**: Main application component that sets up routing and layout.
    - **main.tsx**: Entry point for the React application.
    - **index.css**: Global CSS styles for the application.
  - **public/**: Contains static files, including the main HTML file.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **tsconfig.json**: TypeScript configuration file.
  - **vite.config.ts**: Configuration file for Vite, the build tool.

- **server/**: Contains the backend application built with Node.js and Express.
  - **src/**: Source files for the Express application.
    - **controllers/**: Contains controller functions for handling feedback-related requests.
    - **models/**: Defines the feedback model and database interactions.
    - **routes/**: Sets up routes for handling feedback submissions and retrieval.
    - **middleware/**: Contains middleware functions, such as CORS handling.
    - **config/**: Configuration files, including database connection settings.
    - **app.js**: Sets up the Express application with middleware and routes.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **server.js**: Entry point for the server application.

- **database/**: Contains database-related files.
  - **migrations/**: SQL migration scripts for setting up the database schema.
  - **seeds/**: SQL seed data for populating the database with sample entries.

- **.env.example**: Example environment variables needed for the application.
- **.gitignore**: Specifies files and directories to be ignored by version control.
- **README.md**: Documentation for the overall project.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd customer-feedback-viewer
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

4. Set up the database:
   - Create a PostgreSQL database and configure the connection details in the `.env` file based on the `.env.example` template.

5. Run database migrations and seed data:
   - Use a tool like `pg-migrate` or run the SQL scripts manually.

### Running the Application

1. Start the server:
   ```
   cd server
   node server.js
   ```

2. Start the client:
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Users can submit feedback through the provided form.
- Feedback entries can be viewed in a list format.
- Users can filter feedback based on various criteria.
- Detailed views of individual feedback entries are available for editing or deletion.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.