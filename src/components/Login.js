import React, { useState } from 'react';

const Login = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setErrorMessage('Both fields are required');
        } else {
            // Here you can add logic to authenticate the user
            console.log('Username:', username);
            console.log('Password:', password);
            setErrorMessage('');
            // Close the login form after submission
            onClose();
        }
    };

    return (
        <div className="login-form">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Login;
