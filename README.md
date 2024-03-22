# Login App Using Flask and Angular

**Author:** Rami Nawahda

This is a simple authentication application built using Flask for the backend and Angular for the frontend.

## How to Run the Application

### Backend (Flask):

1. **Setting Up Virtual Environment:**
   - Navigate to the project directory in your terminal.
   - Create a virtual environment using the following command:
     ```
     python -m venv venv
     ```
   - Activate the virtual environment:
     - For Unix/macOS:
       ```
       source venv/bin/activate
       ```
     - For Windows:
       ```
       venv\Scripts\activate
       ```

2. **Install Dependencies:**
   - Install the required Python packages by running:
     ```
     pip install -r requirements.txt
     ```

3. **Configuration:**
   - Populate the configuration file with the data provided via email.

4. **Run the Flask Server:**
    ```
    python app.py
    ```

### Frontend (Angular):

1. **Install Dependencies:**
- Navigate to the project directory in your terminal.
- Run:
  ```
  npm install
  ```

2. **Run Angular Development Server:**

    ```
    npm start or ng serve
    ```


## Future Suggestions

- **Sign Up Endpoint:** Implement a sign-up endpoint to allow users to register for new accounts.
- **Enhanced Security:** Implement additional security measures such as password hashing and validation.
- **User Management:** Add features for user management, such as profile editing and password recovery.
- **UI/UX Improvements:** Enhance the frontend user interface and experience for better usability.
