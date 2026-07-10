import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";

function Form() {
  const regEmail =/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const regContact = /^09\\d{8,15}$/;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("done");
    handleClick();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "this field is required" : ""}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ width: "48%" }}
          id="filled-basic"
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "this field is required" : ""}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ width: "48%" }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </div>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "please provide a valid email address" : ""
        }
        {...register("email", { required: true, pattern: regEmail })}
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.contactnumber)}
        helperText={
          errors.contactnumber
            ? "please provide a valid phone number "
            : ""
        }
        {...register("contactnumber", { required: true, pattern: regContact })}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />

      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />

      <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          defaultValue={"user"}
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value={"user"}>user</MenuItem>
          <MenuItem value={"manager"}>manager</MenuItem>
          <MenuItem value={"admin"}>admin</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "30%", textTransform: "capitalize" }}
        >
          create new user
        </Button>
        <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
         autoHideDuration={6000} 
         onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            sx={{ width: "100%" }}
          >
            Account created successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Form;
