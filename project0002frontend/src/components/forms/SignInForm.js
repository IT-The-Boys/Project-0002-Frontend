import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hidePopup } from 'store/app/appSlice';
import { hideDialog, login } from 'store/auth/authSlice';
import { AUTH_MODE_SIGNIN } from 'utils/constants/config';

const SignInForm = () => {
    const {toUrl} = useSelector(state => state.auth)
    const {authMode} = useSelector(state => state.app)
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
                console.log("not successful")
            });

    }
    return (
        <> {authMode===AUTH_MODE_SIGNIN ? (
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
        ):null
        }
        </>
    )
}

export default SignInForm
