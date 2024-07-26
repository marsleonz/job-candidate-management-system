# Job Candidate Management System

## Project Overview

This project is a web application for storing and managing information about job candidates. It consists of a backend service with RESTful API endpoints and a frontend application that utilizes these endpoints. The application allows for creating and updating candidate contact information, using email as a unique identifier.

## Tech Stack

- Frontend: Next.js 14.2.5, React 18.3.1
- Backend: Next.js API Routes
- Database: SQLite (local development), Turso (production)
- ORM: Drizzle ORM 0.32.0
- Styling: Tailwind CSS 3.4.6
- Form Validation: Zod 3.23.8
- UI Components: Shadcn UI

## Features

- Create and update candidate information
- View list of candidates in a paginated table
- Responsive design
- Form validation using Zod
- Dark mode support

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Option 1: Using Pre-configured Turso Database

1. Clone the repository:
   git clone https://github.com/marsleonz/job-candidate-management-system.git
   cd job-candidate-management-system

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

   The environment variable file is already included in the repository with the necessary `DATABASE_URL` and `DATABASE_TOKEN` for connection to the Turso database, which is always running.

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Option 2: Using Local Database

1. Clone the repository:
   git clone https://github.com/marsleonz/job-candidate-management-system.git
   cd job-candidate-management-system

2. Install dependencies:
   npm install

3. Install Turso CLI on your system. Follow the instructions at [Turso CLI Installation](https://docs.turso.tech/reference/cli).

4. Log in to Turso:
   turso auth login

5. Update the `.env.local` file:
   Uncomment the line with `DATABASE_URL=http://127.0.0.1:8080` and comment out the Turso database URL.

6. Run the local database:
   npm run db:local

7. In a new terminal window, start the development server:
   npm run dev

8. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployed Application

The application is deployed and accessible online at:
[https://job-candidate-management-system.pages.dev/](https://job-candidate-management-system.pages.dev/)

This deployed version is hosted on Cloudflare Pages and is connected to the online Turso database, providing a live demonstration of the application's functionality.

## Project Structure

- `app/`: Next.js app directory
- `api/`: API routes
- `candidates/`: Candidate list page
- `db/`: Database configuration and schema
- `success/`: Success page after form submission
- `components/`: Reusable React components
- `lib/`: Utility functions and types
- `actions/`: Server actions
- `migrations/`: Database migration files

## Database Schema

The `candidates` table includes the following fields:

- id (Primary Key)
- firstName
- lastName
- phoneNumber (optional)
- email (unique)
- callTimeInterval (optional)
- linkedinUrl (optional)
- githubUrl (optional)
- comment

## Assumptions

1. The application is designed to handle dozens of thousands of candidates in the future, but current implementation focuses on functionality rather than large-scale optimization.
2. Email is used as the unique identifier for candidates, assuming each candidate has a unique email address. This choice was made based on the requirement to update existing records if the email already exists.
3. The phone number, call time interval, LinkedIn URL and GitHub URL fields are considered optional, as they are not marked with an asterisk in the requirements.
4. The use of SQLite for local development and Turso for production assumes that these databases will be sufficient for the current scale of the application.
5. The application uses server-side rendering and server actions for form submission, assuming this approach provides better performance and SEO benefits.
6. Dark mode is implemented assuming users might prefer different color schemes for better visibility.
7. The application is assumed to be compatible with modern web browsers, without specific requirements for older browser versions.
8. The current implementation assumes a single user role with full access to all features. Future improvements may include different user roles and permissions.
9. The current implementation assumes a moderate number of concurrent users, without specific optimizations for high concurrency scenarios.
10. It's assumed that the provided data validation rules are sufficient for the current use case, with the understanding that they may need to be expanded in the future.

## Ways for Improvement

1. Implement server-side pagination for the candidate list to handle large datasets more efficiently.
2. Add authentication and authorization to secure the API and frontend.
3. Implement caching mechanisms for frequently accessed data to improve performance.
4. Add more comprehensive error handling and logging.
5. Implement a search functionality for the candidate list.
6. Add unit and integration tests to increase code coverage.
7. Optimize database queries and indexing for better performance with large datasets.
8. Implement a more robust frontend state management solution (e.g., Redux) for complex state scenarios.
9. Add form editing functionality for existing candidates directly from the dashboard.
10. Implement data export functionality (e.g., CSV download) for the candidate list.
11. Improve client-side form validation to provide real-time feedback to users as they fill out the form.
12. Further enhance the responsive design to ensure a seamless experience across a wider range of devices and screen sizes.
13. Add support for multiple languages to make the application accessible to a global audience.
14. Implement analytics to track user behavior and gather insights for further improvements.
15. Integrate performance monitoring tools to identify and address bottlenecks in the application.

## Total Time Spent

Approximately 20 hours were spent on this project.

## License

This project is licensed under the MIT License.
