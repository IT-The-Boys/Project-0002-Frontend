import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideDialog, login } from 'store/auth/authSlice';

const LoginForm = ({ toggle }) => {
    const {fromURL} = useSelector(state => state.auth)
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
                console.log("successful")
                dispatch(hideDialog())
                navigate(fromURL)
            })
            .catch(() => {
                console.log("not successful")
            });

    }
    return (
        <div>
            <form>

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
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
