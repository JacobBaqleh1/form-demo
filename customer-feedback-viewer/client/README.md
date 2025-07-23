# Customer Feedback Viewer Client

This is the client-side application for the Customer Feedback Viewer project. It is built using React and utilizes Blueprint.js and Kendo UI for a modern and responsive user interface.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Contains React components for displaying feedback.
    - **FeedbackList.tsx**: Displays a list of feedback entries.
    - **FeedbackDetail.tsx**: Shows details of a specific feedback entry.
    - **FeedbackFilters.tsx**: Provides filtering options for the feedback list.
    - **Layout.tsx**: Wraps around other components for consistent structure.
  - **services/**: Contains API service functions for backend communication.
    - **api.ts**: Functions for sending and retrieving feedback.
  - **types/**: Contains TypeScript types for type safety.
    - **feedback.ts**: Defines the structure of feedback data.
  - **utils/**: Contains utility functions and constants.
    - **constants.ts**: Exports constants used throughout the application.
  - **App.tsx**: Main application component that sets up routing.
  - **main.tsx**: Entry point for the React application.
  - **index.css**: Global CSS styles for the application.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd customer-feedback-viewer
   ```

2. **Navigate to the client directory**:
   ```
   cd client
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

## Dependencies

This project uses the following key libraries:
- React
- Blueprint.js
- Kendo UI
- TypeScript

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.