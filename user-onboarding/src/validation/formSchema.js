import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().required('You must include your name').min(3, 'Your name must be more than 3 characters'),
    email: yup.string().email('Must include a valid email address').required('Must include an email address'),
    password: yup.string().required('Password is required').min(8, 'Password must be 8+ characters'),
    tos: yup.boolean().oneOf([true], 'You must accept the terms of service')
})

export default formSchema