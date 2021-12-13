import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'store/auth/authSlice';
import { AUTH_MODE_SIGNUP } from 'utils/constants/config';

const RegistrationForm = () => {
    const [successful, setSuccessful] = useState(false);
    const { authMode } = useSelector(state => state.modal)
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
        <> {authMode === AUTH_MODE_SIGNUP ? (
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={form.username}
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
        ) : null}
        </>

    )
}



export default RegistrationForm
