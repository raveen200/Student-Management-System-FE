export const upcomingAssignments = [
  {
    id: 1,
    title: "React Project Submission",
    course: "Advanced Web Development",
    dueDate: "2024-03-20",
    status: "pending",
  },
  {
    id: 2,
    title: "Data Analysis Report",
    course: "Data Science Fundamentals",
    dueDate: "2024-03-22",
    status: "pending",
  },
];
export const API_CONSTANTS = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register",
  COURSES: "/api/courses",
  ENROLLMENTS: "/api/enrollments",
  HOMEWORK: "/api/homework",
  GET_HOMEWORK: "/homework/course",
};

export const REDUX_ACTIONS = {
  ADD_COURSE: "mgt/addCourse",
  GET_COURSES: "mgt/getCourses",
  GET_COURSES_BY_ID: "mgt/getCoursesById",
  ADD_ENROLLMENT: "mgt/addEnrollment",
  GET_ENROLLMENTS: "mgt/getEnrollments",
  UPDATE_ENROLLMENT: "mgt/updateEnrollment",
  ADD_HOMEWORK: "mgt/addHomework",
  GET_HOMEWORK: "mgt/getHomework",
};
