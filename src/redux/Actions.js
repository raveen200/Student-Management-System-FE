import { createAsyncThunk } from "@reduxjs/toolkit";
import { REDUX_ACTIONS } from "../constants/index";
import {
  addCourse,
  getCourses,
  getCoursesById,
  addEnrollment,
  getEnrollments,
  updateEnrollment,
  addHomework,
  getHomework,
} from "../services/Index";

export const addCourseAction = createAsyncThunk(
  REDUX_ACTIONS.ADD_COURSE,
  async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await addCourse(data);
    } catch (error) {
      throw error;
    }
  }
);

export const getCoursesAction = createAsyncThunk(
  REDUX_ACTIONS.GET_COURSES,
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getCourses();
    } catch (error) {
      throw error;
    }
  }
);

export const getCoursesByIdAction = createAsyncThunk(
  REDUX_ACTIONS.GET_COURSES_BY_ID,
  async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getCoursesById(id);
    } catch (error) {
      throw error;
    }
  }
);

export const addEnrollmentAction = createAsyncThunk(
  REDUX_ACTIONS.ADD_ENROLLMENT,
  async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await addEnrollment(data);
    } catch (error) {
      throw error;
    }
  }
);

export const getEnrollmentsAction = createAsyncThunk(
  REDUX_ACTIONS.GET_ENROLLMENTS,
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getEnrollments();
    } catch (error) {
      throw error;
    }
  }
);

export const updateEnrollmentAction = createAsyncThunk(
  REDUX_ACTIONS.UPDATE_ENROLLMENT,
  async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await updateEnrollment(data);
    } catch (error) {
      throw error;
    }
  }
);

export const addHomeworkAction = createAsyncThunk(
  REDUX_ACTIONS.ADD_HOMEWORK,
  async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await addHomework(data);
    } catch (error) {
      throw error;
    }
  }
);

export const getHomeworkAction = createAsyncThunk(
  REDUX_ACTIONS.GET_HOMEWORK,
  async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return await getHomework(id);
    } catch (error) {
      throw error;
    }
  }
);
