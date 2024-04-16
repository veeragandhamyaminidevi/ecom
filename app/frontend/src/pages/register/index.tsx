import React, { ReactNode } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for schema validation
import axios from 'axios';
import BlankLayout from 'src/@core/layouts/BlankLayout';

const Signup = () => {
    const paperStyle = { padding: 40, width: 400, margin: "0 auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e', marginBottom: 20 };
    const marginTop = { marginTop: 20 };

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        gender: Yup.string().required('Gender is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    });

    const handleSubmit = async (values: any, { resetForm, setSubmitting }: any) => {
        try {
            const response = await axios.post('http://localhost:5000/api/signup', values);
            console.log('Signup successful:', response.data);
            // Redirect to login page or show success message
            resetForm();
        } catch (error) {
            console.error('Signup failed:', error.response.data);
            // Handle error, e.g., display error message to the user
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Grid container justifyContent="center">
            <Paper style={paperStyle}>
                <Grid container direction="column" alignItems="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <Typography variant='h5' style={headerStyle}>Sign Up</Typography>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <Formik initialValues={{ name: '', email: '', gender: '', phoneNumber: '', password: '', confirmPassword: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    {(formikProps) => (
                        <Form>
                            <Field as={TextField} name="name" label="Name" fullWidth style={marginTop} />
                            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} name="email" type="email" label="Email" fullWidth style={marginTop} />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} name="gender" label="Gender" fullWidth select style={marginTop} SelectProps={{ native: true }}>
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} name="phoneNumber" label="Phone Number" fullWidth style={marginTop} />
                            <ErrorMessage name="phoneNumber" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} name="password" type="password" label="Password" fullWidth style={marginTop} />
                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                            <Field as={TextField} name="confirmPassword" type="password" label="Confirm Password" fullWidth style={marginTop} />
                            <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />

                            <Button type='submit' variant='contained' color='primary' style={marginTop} disabled={formikProps.isSubmitting}>Sign up</Button>
                            <Typography variant="body2" style={marginTop}>
                                Already have an account? <Link href='/login'>Sign in</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};
Signup.guestGuard = true;
Signup.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Signup;
