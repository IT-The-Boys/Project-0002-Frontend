import { AuthFormGroup, AuthFormInput, AuthFormLabel, AuthFormSubmit } from 'components/styles/form/AuthForm.styled';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { register } from 'store/auth/authSlice';

const RegistrationForm = () => {
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        if (form.password === form.confirmPassword) {
            const { email, username, password } = form
            // sendDetailsToServer()    
            dispatch(register({ email, username, password }))
                .unwrap()
                .then(() => {
                    setSuccessful(true);
                    console.log(successful)
                })
                .catch(() => {
                    setSuccessful(false);
                    console.log(successful)
                });
        } else {
            // props.showError('Passwords do not match');
            console.log("data error")

        }
    }

    return (
        <form>
            <AuthFormGroup row="4">
                <AuthFormLabel htmlFor="email">Email address</AuthFormLabel>
                <AuthFormInput type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="on"
                />
            </AuthFormGroup>
            <AuthFormGroup row="4">
                <AuthFormLabel htmlFor="username">Username</AuthFormLabel>
                <AuthFormInput type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="on"
                />
            </AuthFormGroup>
            <AuthFormGroup row="4">
                <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
                <AuthFormInput type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="on"
                />
            </AuthFormGroup>
            <AuthFormGroup row="4">
                <AuthFormLabel htmlFor="password">Confirm Password</AuthFormLabel>
                <AuthFormInput type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="on"
                />
            </AuthFormGroup>
            <AuthFormSubmit
                type="submit"
                onClick={handleSubmit}
            >
                Register
            </AuthFormSubmit>
        </form>
    )
}



export default RegistrationForm
