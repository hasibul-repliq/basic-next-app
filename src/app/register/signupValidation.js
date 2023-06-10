import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    firstName: Yup.string().min(3).max(20).required('Please enter your first name'),
    lastName: Yup.string().min(3).max(20).required('Please enter your last name'),
    division: Yup.string().required('Please select your division'),
    district: Yup.string().required('Please select your district'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(8).required('Please enter your password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please re-type your password')
})