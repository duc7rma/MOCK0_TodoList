import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import { signUpSchema } from 'utils/yup/sign-up';
import { signUp } from 'services/auth-service';
import './SignUpPage.scss';
import { RoutePaths } from 'routes/route-constants';

function SignUpPage() {
  const navigate = useNavigate();

  const handleOnSubmit = async (values) => {
    await signUp(values);
    navigate(RoutePaths.HOME);
  };

  return (
    <div className="signUp">
      <h1>Sign up</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={signUpSchema}
        onSubmit={handleOnSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="signUp_form" onSubmit={handleSubmit}>
            <TextField
              style={{ margin: '10px 0', width: '50%' }}
              id="name"
              label="Name"
              variant="outlined"
              name="name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              style={{ margin: '10px', width: '50%' }}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              style={{ margin: '10px', width: '50%' }}
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onChange={handleChange}
            />

            <LoadingButton
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={{ marginTop: '10px', marginBottom: '10px', width: '100px' }}
              //   loading={loading}
            >
              Sign up
            </LoadingButton>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpPage;
