import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Layout from "./layout/Index";
import theme from "./theme/Index";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AddCourses from "./pages/AddCourses";
import CourseSelection from "./pages/CourseSelect";
import Dashboard from "./pages/Dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addcourses" element={<AddCourses />} />
              <Route path="/" element={<CourseSelection />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;