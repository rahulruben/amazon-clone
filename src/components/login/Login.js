import React, { useState } from 'react'
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Login</h1>

                <form>
                    <h5>E-mail</h5>
                    <input onChange={e => setEmail(e.target.value)} type="email" value={email} />

                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)} type="password" value={password} />

                    <button type="submit" onClick={signIn} className="login__sign-in-btn">Sign In</button>
                </form>
                <p className="login__info">
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of the Use
                    & Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Internet-Based Ads Notice.
                </p>
                <button className="login__register-btn" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
