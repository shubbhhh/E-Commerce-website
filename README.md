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
  
    ![Screenshot 2024-08-26 215140](https://github.com/user-attachments/assets/7e65ff8f-dd3b-4faa-8669-90b0e2ffd567)

- Explore Page:

    ![Screenshot 2024-08-26 215204](https://github.com/user-attachments/assets/e4fca481-fb68-464f-8d98-3646e67d7738)

- Product(explore/:id) Page:

    ![Screenshot 2024-08-26 215225](https://github.com/user-attachments/assets/c0aa3a3e-dbf6-4eaf-bee6-33da75053dd7)

- Profile Page:
  
    ![Screenshot 2024-06-29 113402](https://github.com/shubbhhh/E-Commerce-website/assets/121121079/fd10b907-3616-4b42-ba0e-b9faab9f4423)

- Profile/cart Page:

    ![Screenshot 2024-08-26 215247](https://github.com/user-attachments/assets/03b5e6e2-6ab2-480b-827d-55bedd575fde)




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
