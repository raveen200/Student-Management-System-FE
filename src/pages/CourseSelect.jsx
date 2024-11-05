import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Rating,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Search,
  BookOpen,
  Clock,
  Users,
  DollarSign,
  Bookmark,
  Share2,
} from "lucide-react";
import Grid from "@mui/material/Grid2";

const courses = [
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

const categories = ["All", "Development", "Data Science", "Design", "Business"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function CourseSelection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCourses, setSelectedCourses] = useState([]);

  console.log(selectedCourses);

  const addCourse = (course) => {
    if (
      !selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)
    ) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      console.log("Course already selected");
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Courses
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore our wide range of courses and start learning today
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size xs={12} md={6}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? "primary" : "default"}
                  variant={
                    selectedCategory === category ? "filled" : "outlined"
                  }
                />
              ))}
            </Box>
          </Grid>
          <Grid size xs={12}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {levels.map((level) => (
                <Chip
                  key={level}
                  label={level}
                  onClick={() => setSelectedLevel(level)}
                  color={selectedLevel === level ? "secondary" : "default"}
                  variant={selectedLevel === level ? "filled" : "outlined"}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2}>
        {filteredCourses.map((course) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={course.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Box
                sx={{
                  height: 200,
                  backgroundImage: `url(${course.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Avatar src={course.image} />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "white",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    {course.instructor}
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <Rating
                    value={course.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({course.rating})
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid size xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Clock size={16} />
                      <Typography variant="body2">
                        {course.duration} weeks
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Users size={16} />
                      <Typography variant="body2">
                        {course.enrolled}/{course.capacity}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DollarSign size={16} />
                  <Typography variant="h6" color="primary">
                    ${course.price}
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Save for later">
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <Bookmark size={16} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <Share2 size={16} />
                    </IconButton>
                  </Tooltip>
                  <Button
                    variant="contained"
                    startIcon={<BookOpen size={16} />}
                    size="small"
                    onClick={() => addCourse(course)}
                  >
                    Enroll Now
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
