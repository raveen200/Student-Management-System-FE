# Student Management System

A comprehensive MERN stack application designed to manage students, teachers, and courses effectively. The system enables user registration, course enrollment, and optional homework submission, streamlining academic processes.

---

## Features

### 1. **User Registration**
- Students, teachers, and courses can register with the following basic information:
  - Name
  - Email
  - Password
- Students and teachers can upload a profile picture during registration.

### 2. **Course Enrollment**
- Students can enroll in available courses.
- Each course is assigned to a specific teacher.

### 3. **Optional Homework Submission**
- Students can upload homework for the courses they are enrolled in.
- Homework submissions are associated with the respective course and student.

---

## Tech Stack

### **Frontend**
- **React**: For building a responsive and interactive user interface.
- **MUI**: For modern, material-design-inspired components.
- **React Hook Form**: For efficient form handling and validations.
- **Redux**: For managing application state.

### **Backend**
- **Node.js**: For server-side logic.
- **Express.js**: For building the API.
- **Multer**: For handling file uploads (profile pictures and homework).

### **Database**
- **MongoDB**: For storing user, course, and homework data.

### **Authentication**
- **JWT (JSON Web Tokens)**: For secure authentication.
- **bcrypt**: For password hashing.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student-management-system.git
   cd student-management-system
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Backend: Create a `.env` file in the `backend` folder and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the application:
   ```bash
   # Start the backend
   cd backend
   npm start

   # Start the frontend
   cd ../frontend
   npm start
   ```

---

## Usage

1. Navigate to the application in your browser at `http://localhost:3000/`.
2. Register as a student or teacher, upload a profile picture, and log in.
3. Enroll in available courses or assign teachers to courses.
4. Optionally, upload homework for enrolled courses.

---

## Folder Structure

```
student-management-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
└── README.md
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

This project was inspired by real-world student management needs and built using the MERN stack. Special thanks to all open-source contributors for the tools and libraries used in this project.

---

## Contact

For questions or collaboration, feel free to reach out:
- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)
