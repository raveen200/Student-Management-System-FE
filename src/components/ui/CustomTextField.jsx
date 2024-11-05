import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";

function CustomTextField(props) {
  return (
    <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment">{props.label}</InputLabel>
      <OutlinedInput
        label={props.label}
        type={props.type}
        error={props.error}
        {...props.register}
        endAdornment={props.endAdornment}
        startAdornment={props.startAdornment}
        multiline={props.multiline}
        rows={props.rows}
        onChange={props.onChange}
      />
      <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
    </FormControl>
  );
}

export default CustomTextField;

CustomTextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  register: PropTypes.object,
  endAdornment: PropTypes.object,
  startAdornment: PropTypes.object,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func,
};
