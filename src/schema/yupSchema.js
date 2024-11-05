import { object, string, mixed, number } from "yup";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const loginSchema = object({
  email: string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = object({
  name: string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),

  role: string()
    .oneOf(["student", "teacher"], "Please select a valid role")
    .required("Please select a role"),

  profilePicture: mixed()
    .test("fileSize ", "File too large, 5MB Max", (value) => {
      return value && value[0].size <= MAX_FILE_SIZE;
    })
    .test("fileType", "Unsupported file format", (value) => {
      return value && ACCEPTED_IMAGE_TYPES.includes(value[0].type);
    })
    .optional(),
});

export const courseSchema = object({
  title: string()
    .min(1, "Course title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),
  description: string()
    .min(1, "Course description is required")
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),
  price: number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  })
    .min(0, "Price cannot be negative")
    .max(99999, "Price cannot exceed 99,999"),
  duration: number({
    required_error: "Duration is required",
    invalid_type_error: "Duration must be a number",
  })
    .min(1, "Duration must be at least 1 hour")
    .max(1000, "Duration cannot exceed 1000 hours"),
  capacity: number({
    required_error: "Capacity is required",
    invalid_type_error: "Capacity must be a number",
  })
    .min(1, "Capacity must be at least 1 student")
    .max(1000, "Capacity cannot exceed 1000 students"),
});
