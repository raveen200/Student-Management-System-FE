import api from "../configs/Axios";
import { API_CONSTANTS } from "../constants/Index";
import Cookies from "js-cookie";

export const login = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(API_CONSTANTS.LOGIN, data);
    const token = response.data.token;
    Cookies.set("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const signup = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(API_CONSTANTS.REGISTER, data);
    const token = response.data.token;
    Cookies.set("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCourse = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(API_CONSTANTS.COURSES, data);
    return response.payload;
  } catch (error) {
    throw error;
  }
};

export const getCourses = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get(API_CONSTANTS.COURSES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCoursesById = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get(`${API_CONSTANTS.COURSES}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEnrollment = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(API_CONSTANTS.ENROLLMENTS, {
      courseId: data
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEnrollments = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get(API_CONSTANTS.ENROLLMENTS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEnrollment = async (id, data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.put(`${API_CONSTANTS.ENROLLMENTS}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addHomework = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(API_CONSTANTS.HOMEWORK, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHomework = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get(`${API_CONSTANTS.GET_HOMEWORK}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
