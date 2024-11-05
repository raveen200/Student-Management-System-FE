import { Award, TrendingUp } from "lucide-react";

export const cartState = {
  items: [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "John Doe",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Introduction to Computer Science",
      instructor: "John Doe",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Introduction to Computer Science",
      instructor: "John Doe",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
  ],
  total: 59.97,
};

export const enrolledCourses = [
  {
    id: 1,
    title: "Advanced Web Development",
    progress: 75,
    nextLesson: "React Hooks Deep Dive",
    instructor: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 45,
    nextLesson: "Statistical Analysis",
    instructor: "Prof. Michael Brown",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

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

export const achievements = [
  {
    id: 1,
    title: "Perfect Attendance",
    description: "Attended all classes for 30 days",
    icon: <Award size={24} />,
  },
  {
    id: 2,
    title: "Quick Learner",
    description: "Completed 5 courses in record time",
    icon: <TrendingUp size={24} />,
  },
];

export const todayClasses = [
  {
    id: 1,
    subject: "Advanced Web Development",
    time: "09:00 AM - 10:30 AM",
    status: "completed",
    students: 25,
  },
  {
    id: 2,
    subject: "React Fundamentals",
    time: "11:00 AM - 12:30 PM",
    status: "ongoing",
    students: 30,
  },
  {
    id: 3,
    subject: "JavaScript Basics",
    time: "02:00 PM - 03:30 PM",
    status: "upcoming",
    students: 28,
  },
];

export const studentPerformance = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    course: "Advanced Web Development",
    progress: 85,
    grade: 92,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    course: "React Fundamentals",
    progress: 70,
    grade: 78,
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    course: "JavaScript Basics",
    progress: 60,
    grade: 65,
  },
  {
    id: 4,
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=4",
    course: "Advanced Web Development",
    progress: 90,
    grade: 95,
  },
];

export const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    instructor: "Dr. Sarah Chen",
    description:
      "Master modern web technologies including React, Node.js, and cloud deployment.",
    price: 499,
    duration: 12,
    capacity: 30,
    enrolled: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Development",
    level: "Advanced",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Prof. Michael Brown",
    description:
      "Learn essential data science concepts, Python programming, and statistical analysis.",
    price: 599,
    duration: 10,
    capacity: 25,
    enrolled: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Data Science",
    level: "Beginner",
  },
  {
    id: 3,
    title: "UX/UI Design Principles",
    instructor: "Emma Wilson",
    description:
      "Master the fundamentals of user experience and interface design.",
    price: 449,
    duration: 8,
    capacity: 20,
    enrolled: 12,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    category: "Design",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Machine Learning Essentials",
    instructor: "Dr. James Rodriguez",
    description:
      "Explore core machine learning algorithms and their practical applications.",
    price: 699,
    duration: 14,
    capacity: 25,
    enrolled: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Data Science",
    level: "Advanced",
  },
];
export const categories = ["All", "Development", "Data Science", "Design", "Business"];
export const levels = ["All", "Beginner", "Intermediate", "Advanced"];
