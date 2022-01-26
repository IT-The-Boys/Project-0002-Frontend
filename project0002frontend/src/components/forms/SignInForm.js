import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hidePopup } from 'store/ui/modalSlice';
import { login } from 'store/auth/authSlice';
import { AuthFormGroup, AuthFormInput, AuthFormLabel, AuthFormSubmit } from 'components/styles/form/AuthForm.styled';

const AuthForm = () => {
    const { toUrl } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
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

        const { username, password } = form
        // sendDetailsToServer()    
        dispatch(login({ username, password }))
            .unwrap()
            .then(() => {
                dispatch(hidePopup("authPopup"))
                navigate(toUrl)
            })
            .catch(() => {
                // console.log("not successful")
            });

    }
    return (
        <form>
            <AuthFormGroup row="2">
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
            <AuthFormGroup row="2">
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
            <AuthFormSubmit
                type="submit"
                onClick={handleSubmit}
            >
                Login
            </AuthFormSubmit>
        </form>
    )
}

export default AuthForm
