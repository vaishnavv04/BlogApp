# MyBlogApp: A Modern Blogging Platform

BlogApp is a full-featured blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with Appwrite for backend services. It provides a seamless and intuitive experience for both readers and writers, with a rich text editor for creating beautiful and engaging content.

## Features

-   **User Authentication:** Secure user registration and login functionality.
-   **Create, Read, Update, Delete (CRUD) Operations:** Users can create, edit, and delete their own blog posts.
-   **Rich Text Editor:** A powerful and intuitive rich text editor for writing and formatting blog posts.
-   **Post Management:** View all posts, manage your own posts, and read posts from other users.
-   **Responsive Design:** A clean and modern user interface that is fully responsive and works on all devices.

## Tech Stack

-   **Frontend:**
    -   React.js
    -   Redux Toolkit for state management
    -   React Router for routing
    -   Tailwind CSS for styling
-   **Backend:**
    -   Appwrite (for backend services like authentication, database, and storage)
-   **Rich Text Editor:**
    -   TinyMCE

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed on your machine.
-   An Appwrite account.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/vaishnavv04/BlogApp
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Set up environment variables**

    Create a `.env` file in the root of your project and add the following environment variables. You can get these from your Appwrite project settings.

    ```
    VITE_APPWRITE_URL="your_appwrite_url"
    VITE_APPWRITE_PROJECT_ID="your_appwrite_project_id"
    VITE_APPWRITE_DATABASE_ID="your_appwrite_database_id"
    VITE_APPWRITE_COLLECTION_ID="your_appwrite_collection_id"
    VITE_APPWRITE_BUCKET_ID="your_appwrite_bucket_id"
    ```

4.  **Run the development server**
    ```sh
    npm run dev
    ```

## Project Structure

The project is organized into the following directories:

-   `public/`: Contains the public assets and the `index.html` file.
-   `src/`: Contains the main source code for the application.
    -   `appwrite/`: Contains the Appwrite configuration and services.
    -   `assets/`: Contains static assets like images and SVGs.
    -   `components/`: Contains the reusable React components.
    -   `conf/`: Contains the configuration files for the application.
    -   `pages/`: Contains the pages for the application.
    -   `store/`: Contains the Redux store and slices.
-   `eslint.config.js`: ESLint configuration file.
-   `package.json`: Contains the project's dependencies and scripts.
-   `vite.config.js`: Vite configuration file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
