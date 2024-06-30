# E-Commerce Website

This project is an e-commerce store built using React for the frontend, Express for the backend, and MongoDB as the database. It supports user authentication with sign-in and sign-up functionalities.

## Features
- User authentication (sign-in and sign-up)
- Explore products
- User profile management
- Cart management
- Wishlist functionality
- Order tracking

## Technologies Used
- Frontend: React
- Backend: Express
- Database: MongoDB

## Pages

- Home Page:
  
    ![Vite + React - Google Chrome 6_29_2024 11_30_58 AM](https://github.com/shubbhhh/E-Commerce-website/assets/121121079/7df6e343-f168-45cf-9c00-8be33e852dfe)

- Explore Page:

    ![Screenshot 2024-06-29 113157](https://github.com/shubbhhh/E-Commerce-website/assets/121121079/2f7b15e2-8d19-4fe9-a81e-6a47708c1294)

- Profile Page:
  
    ![Screenshot 2024-06-29 113402](https://github.com/shubbhhh/E-Commerce-website/assets/121121079/fd10b907-3616-4b42-ba0e-b9faab9f4423)

- Profile/cart Page:

    ![Screenshot 2024-06-29 120803](https://github.com/shubbhhh/E-Commerce-website/assets/121121079/333820e8-1626-4af0-88f9-8177dca5f05b)







---

# Setup and Installation

1. Clone the repository:

    ```
    git clone ttps://github.com/shubbhhh/E-Commerce-website.git
    ```

2. Navigate to the project directory:
    ```
    cd E-Commerce-website
    ```

3. Install dependencies:

    - For the frontend:
        ```
        cd frontend
        npm install
        ```
    
    - For the backend:
        ```
        cd backend
        npm install
        ```

4. Configure the environment variables:

    - Change the `config.js` file in the backend directory and add the following:

        ```
        const key = your_jwt_secret
        const DATABASE_URL = your_mongodb_connection_string

        module.exports = { JWT_Secret: key, DATABASE_URL: DATABASE_URL }
        ```

5. Run the application:

    - Start the backend server:

        ```
        cd backend
        npm start
        ```

    - Start the frontend server:

        ```
        cd frontend
        npm start
        ```

6. Access the application:

    Open your browser and navigate to `http://localhost:5173` for the frontend.
