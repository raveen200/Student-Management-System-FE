import { createSlice } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const slice = createSlice({
  name: "mgtRedux",
  initialState: {
    courses: [],
    course: {},
    enrollments: [],
    homework: [],
    isLoading: false,
    loginEmail_Role: {},
  },

  reducers: {
    setLoginEmail_Role: (state, action) => {
      state.loginEmail_Role = action.payload;
    },
    setCartCourses: (state, action) => {
      state.cartCourses = action.payload;
    },
  },

  extraReducers: (builder) => {
    Reducer.addCourse(builder);
    Reducer.getCourses(builder);
    Reducer.getCoursesById(builder);
    Reducer.addEnrollment(builder);
    Reducer.getEnrollments(builder);
    Reducer.updateEnrollment(builder);
    Reducer.addHomework(builder);
    Reducer.getHomework(builder);
  },
});

export const { setLoginEmail_Role } = slice.actions;
export const { setCartCourses } = slice.actions;

export default slice.reducer;
