// import {
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   InputLabel,
//   OutlinedInput,
//   TextField,
// } from "@mui/material";
// import { Controller } from "react-hook-form";

// function CustomValueChangeTextField(props) {
//   return (
//     <FormControl sx={{ mt: 1, width: "100%" }} variant="outlined">
//       <InputLabel htmlFor="outlined-adornment">{props.label}</InputLabel>
//       {/* <Controller
//         name={props.name}
//         control={props.control}
//         render={({ field: { onChange, ...field } }) => (
//           <TextField
//             {...field}
//             fullWidth
//             margin="normal"
//             type={props.number}
//             onChange={(e) => onChange(Number(e.target.value))}
//             error={props.error}
//             helperText={props.helperText}
//           />
//         )}
//       /> */}
//       <Controller
//         name={props.name}
//         control={props.control}
//         render={({ field: { onChange, ...field } }) => (
//           <OutlinedInput
//             {...field}
//             label={props.label}
//             type={props.type}
//             error={props.error}
//             {...props.register}
//             endAdornment={props.endAdornment}
//             startAdornment={props.startAdornment}
//             onChange={props.onChange}

//             // label={props.label}
//             // type={props.type}
//             // error={props.error}
//             // {...props.register}
//             // endAdornment={props.endAdornment}
//             // startAdornment={props.startAdornment}
//             // multiline={props.multiline}
//             // rows={props.rows}
//             // onChange={props.onChange}
//           />
//         )}
//       />
//       <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
//     </FormControl>
//   );
// }

// export default CustomValueChangeTextField;
