import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function openCrispChat() {
    if (window.$crisp) {
        window.$crisp.push(['do', 'chat:open']);
    } else {
        console.error('CrispChat not initialized');
    }
}

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        const { email, password } = formData;
        try {
            const response = await fetch('http://10.1.3.42:8000/crispchat/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                // Store token in local storage
                localStorage.setItem('token', data.access);
                // Redirect to Dashboard component after successful login
                navigate('/dashboard');
            } else {
                // Handle login failure
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <div className={styles.logo}>
                        <img src='/white_logo.svg' alt='logo' />
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.fields}>
                            <div className={styles.label}>
                                Email
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.input}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className={styles.fields}>
                            <div className={styles.label}>
                                Password
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.login_button} onClick={handleLogin}>
                        Login
                    </div>
                    <div className={styles.signup}>
                        Don't have an account? <Link to="/signup" className={styles.link}>Signup</Link> now.
                    </div>
                </div>
                <div className={styles.forgot_password}>
                    Forgot password? <span className={styles.contact_us} onClick={openCrispChat}>Contact us</span>.
                </div>
            </div>
        </div>
    );
};

export default Login;
