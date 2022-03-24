import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'vasco',
        email: 'vasco@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPassword(email, password, email))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name!'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email!'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password!'))
            return false;
        }
        dispatch(removeError())

        return true;
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError && (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" className="auth__input" />

                <input type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email" className="auth__input" />

                <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" className="auth__input" />

                <input type="password" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirm password" className="auth__input" />

                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

                <Link to="/auth/register" className="link">
                    Already Registered?
                </Link>
            </form>
        </div>
    )
}
