import { useCallback, useState, useRef } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";




import {
  Alert,
  Box,
  Button,
  FormHelperText,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";

const Page = () => {
 
 

  const [method, setMethod] = useState("email");

  const role = [
    {
      value: 'mobile user',
      label: 'Mobile User'
    },
    {
      value: 'desktop user',
      label: 'Desktop User'
    }
  
  ];
  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );
  
 
  

  return (
    <>
      <Head>
        <title>Edit User | Admin Panel</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack style={{ textAlign: "center" }} spacing={1} sx={{ mb: 5 }}>
              <Typography variant="h4">Edit User Profile</Typography>
            </Stack>

            {method === "email" && (
              <form noValidate>
              
                <Stack sx={{ mb: 5 }}>
                 
                </Stack>

                <Stack spacing={5}>
                  <TextField fullWidth label="Name" name="email" type="email" />
                  <TextField
                  fullWidth
                  label="Select Role"
                  name="Role"
                  onChange={handleChange}
                  select
                  SelectProps={{ native: true }}
                  value={role.value}
                >
                  {role.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField fullWidth label="Password" name="password" type="password" />
                  <TextField fullWidth label="City" name="city" type="text" />
               
                </Stack>

                <Stack>
                  <Button fullWidth size="large" sx={{ mt: 4 }}  variant="contained">
                    Submit
                  </Button>
                </Stack>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

// Page.getLayout = (page) => (
//   <AuthLayout>
//     {page}
//   </AuthLayout>
// );

export default Page;
