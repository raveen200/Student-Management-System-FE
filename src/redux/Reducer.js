import {
  addCourseAction,
  getCoursesAction,
  getCoursesByIdAction,
  addEnrollmentAction,
  getEnrollmentsAction,
  updateEnrollmentAction,
  addHomeworkAction,
  getHomeworkAction,
} from "./Actions";

const reducer = {
  addCourse: (builder) => {
    builder.addCase(addCourseAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addCourseAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses.push(action.payload);
    });

    builder.addCase(addCourseAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  getCourses: (builder) => {
    builder.addCase(getCoursesAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCoursesAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });

    builder.addCase(getCoursesAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  getCoursesById: (builder) => {
    builder.addCase(getCoursesByIdAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCoursesByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.course = action.payload;
    });

    builder.addCase(getCoursesByIdAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  addEnrollment: (builder) => {
    builder.addCase(addEnrollmentAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addEnrollmentAction.fulfilled, (state,) => {
      state.isLoading = false;
    });

    builder.addCase(addEnrollmentAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  getEnrollments: (builder) => {
    builder.addCase(getEnrollmentsAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getEnrollmentsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.enrollments = action.payload;
    });

    builder.addCase(getEnrollmentsAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  updateEnrollment: (builder) => {
    builder.addCase(updateEnrollmentAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateEnrollmentAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.enrollments = state.enrollments.map((enrollment) =>
        enrollment.id === action.payload.id ? action.payload : enrollment
      );
    });

    builder.addCase(updateEnrollmentAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  addHomework: (builder) => {
    builder.addCase(addHomeworkAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addHomeworkAction.fulfilled, (state) => {
      state.isLoading = false;
    
    });

    builder.addCase(addHomeworkAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  getHomework: (builder) => {
    builder.addCase(getHomeworkAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getHomeworkAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.homeworks = action.payload;
    });

    builder.addCase(getHomeworkAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
};

export default reducer;
