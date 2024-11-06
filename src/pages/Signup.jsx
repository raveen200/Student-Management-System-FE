import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
  FormHelperText,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import UploadIcon from "@mui/icons-material/Upload";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema/yupSchema";
import CustomTextField from "../components/ui/CustomTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomRadio from "../components/ui/CustomRadio";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/Index";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoginEmail_Role } from "../redux/Slice";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", role);
    formData.append("profilePicture", data.profilePicture[0]);

    try {
      const response = await signup(formData);
      console.log(response);
      if (response._id) {
        {
          role === "student"
            ? navigate("/dashboard")
            : navigate("/teacher-dashboard");
        }
        dispatch(setLoginEmail_Role(response));
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Account creation failed");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const actors = ["student", "teacher"];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join our learning community today
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
            <Box sx={{ position: "relative", width: "fit-content" }}>
              <Avatar
                src={previewUrl || ""}
                sx={{
                  width: 100,
                  height: 100,
                  mb: 5,
                  bgcolor: "primary.main",
                }}
              >
                {!previewUrl && <PersonIcon size={40} />}
              </Avatar>
              <Button
                component="label"
                variant="outlined"
                size="small"
                startIcon={<UploadIcon size={16} />}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                }}
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  {...register("profilePicture")}
                  onChange={(e) => {
                    register("profilePicture").onChange(e);
                    handleImageChange(e);
                  }}
                />
              </Button>
            </Box>
          </Box>
          {errors.profilePicture && (
            <FormHelperText error sx={{ textAlign: "center", mb: 2 }}>
              {errors.profilePicture.message}
            </FormHelperText>
          )}

          <CustomTextField
            label="Full Name"
            type="name"
            error={!!errors.name}
            register={register("name")}
            helperText={errors.name?.message}
          />

          <CustomTextField
            label="Email"
            type="email"
            error={!!errors.email}
            register={register("email")}
            helperText={errors.email?.message}
          />

          <CustomTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            error={!!errors.password}
            register={register("password")}
            helperText={errors.password?.message}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <CustomRadio
            title="I am a:"
            name="role"
            control={control}
            error={errors.role}
            value={role}
            onChange={setRole}
            roleType={actors}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? <AutorenewIcon className="animate-spin" /> : null
            }
            sx={{
              mt: 3,
              py: 1.5,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?
              <Link
                onClick={() => navigate("/login")}
                className="cursor-pointer"
                underline="hover"
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
