# Chat Application

A full-stack chat application built with **Next.js**, **TypeScript**, **React**, **Redux Toolkit** for the client, and **Node.js**, **Express.js**, and **MongoDB** for the backend.

## Project Structure

```
/client
  ├── /components          # Reusable React components
  ├── /pages               # Next.js pages
  ├── /public              # Static assets (images, icons, etc.)
  ├── /slices              # Redux slices
  ├── /src                 # Source files
  ├── /state_manager       # Redux store and middleware
  ├── /styles              # Global styles (TailwindCSS, etc.)
  ├── /thunks              # Redux thunks for async logic
  ├── /types               # TypeScript types and interfaces
  ├── tsconfig.json        # TypeScript configuration file
  ├── package.json         # Client dependencies and scripts
  └── ...

/server
  ├── /models              # MongoDB models (schemas for collections)
  ├── /controllers         # Request handlers for routes
  ├── /routes              # Express routes
  ├── /middleware          # Middleware functions (authentication, etc.)
  ├── server.ts            # Main server file (Express setup and connection)
  ├── package.json         # Server dependencies and scripts
  └── ...
```

### Technologies Used:

- **Frontend:**

  - Next.js
  - TypeScript
  - React
  - Redux Toolkit
  - SCSS (for styling)

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB

## Installation

To get started with this project, follow the steps below.

### Prerequisites:

- **Node.js** (Recommended version: 16.x or higher)
- **Yarn** (for package management)
- **MongoDB** (either locally installed or via a cloud service like MongoDB Atlas)

### Steps to install:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EmmanuelVictor62/chat-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd chat-app
   ```

3. **Install dependencies for the client and server:**

   - For the **client**:

     ```bash
     cd client
     yarn install
     ```

   - For the **server**:
     ```bash
     cd ../server
     yarn install
     ```

4. **Set up MongoDB:**

   - Create a `.env` file in the `server` directory and add your MongoDB connection string:

     ```bash
     MONGODB_URI=your-mongodb-connection-string
     ```

### Running the Application

After setting up the project, you can run the client and server in development mode.

1. **Start the backend server**:

   - From the `server` folder:
     ```bash
     yarn dev
     ```

2. **Start the frontend client**:
   - From the `client` folder:
     ```bash
     yarn dev
     ```

The frontend will be accessible at `http://localhost:3000`, and the backend server will be running at `http://localhost:5000`.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

## License

Made with 💖 by Emmanuel Victor

---
