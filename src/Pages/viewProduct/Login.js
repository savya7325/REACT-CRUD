// import * as React from 'react';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { SignInPage } from '@toolpad/core/SignInPage';
// import { useTheme } from '@mui/material/styles';

// const providers = [{ id: 'credentials', name: 'Credentials' }];
// // preview-start
// const BRANDING = {
//   logo: (
//     <img
//       src="https://mui.com/static/logo.svg"
//       alt="MUI logo"
//       style={{ height: 24 }}
//     />
//   ),
//   title: 'MUI',
// };
// // preview-end

// const signIn = async (provider) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Sign in with ${provider.id}`);
//       resolve();
//     }, 500);
//   });
//   return promise;
// };

// export default function BrandingSignInPage() {
//   const theme = useTheme();
//   return (
//     // preview-start
//     <AppProvider branding={BRANDING} theme={theme}>
//       <SignInPage
//         signIn={signIn}
//         providers={providers}
//         slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
//       />
//     </AppProvider>
//     // preview-end
//   );
// }



import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { login } = useAuth()
  
  //  const handleLogin = () => {
  //   console.log('Email:', email);
  //   console.log('Password:', password);

  //   login(email, password)
  //  }  
   const { secureLogin } = useAuth();

const handleLogin = () => {
  secureLogin(email, password);
};  

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <Box component="form">
        <TextField fullWidth label="Email" margin="normal"  onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type="password" margin="normal" onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin} >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
