import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

function CustomRadio({
  title,
  roleType,
  name,
  control,
  error,
  value,
  onChange,
}) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <FormControl component="fieldset" sx={{ mt: 2 }} error={!!error}>
      <FormLabel component="legend">{title}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            row
            {...field}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              field.onChange(e);
            }}
          >
            {roleType.map((role) => (
              <FormControlLabel
                key={role}
                value={role}
                control={<Radio />}
                label={capitalizeFirstLetter(role)}
              />
            ))}

            {/* <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="Teacher"
            /> */}
          </RadioGroup>
        )}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
}

export default CustomRadio;
