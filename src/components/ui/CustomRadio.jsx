import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

function CustomRadio(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <FormControl component="fieldset" sx={{ mt: 2 }} error={!!props.error}>
      <FormLabel component="legend">{props.title}</FormLabel>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <RadioGroup
            row
            {...field}
            value={props.value}
            onChange={(e) => {
              props.onChange(e.target.value);
              field.onChange(e);
            }}
          >
            {props.roleType.map((role) => (
              <FormControlLabel
                key={role}
                value={role}
                control={<Radio />}
                label={capitalizeFirstLetter(role)}
              />
            ))}
          </RadioGroup>
        )}
      />
      {props.error && <FormHelperText>{props.error.message}</FormHelperText>}
    </FormControl>
  );
}

export default CustomRadio;

CustomRadio.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  roleType: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.object,
};
