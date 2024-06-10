import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function openCrispChat() {
    if (window.$crisp) {
        window.$crisp.push(['do', 'chat:open']);
    } else {
        console.error('CrispChat not initialized');
    }
}

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignup = async () => {
        setErrors({
            email: '',
            password: '',
            confirmPassword: '',
        });
        setSuccessMessage('');

        // Validate form fields
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            setErrors({
                email: !formData.email ? 'Email is required' : '',
                password: !formData.password ? 'Password is required' : '',
                confirmPassword: !formData.confirmPassword ? 'Confirm Password is required' : '',
            });
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrors({
                ...errors,
                email: 'Invalid email address',
            });
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setErrors({
                ...errors,
                confirmPassword: 'Passwords do not match',
            });
            return;
        }

        try {
            const response = await fetch('http://10.1.3.42:8000/crispchat/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to signup');
            }

            const result = await response.json();
            // Handle successful signup, e.g., showing a success message
            setSuccessMessage('Signup successful! Please login.');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.form}>
                        <div className={styles.logo}>
                            <img src='/white_logo.svg' alt='logo' />
                        </div>
                        <div className={styles.inputs}>
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    Email Address
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                    />
                                    <div className={styles.error}>{errors.email}</div>
                                </div>
                            </div>
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    Create a Password
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                    />
                                    <div className={styles.error}>{errors.password}</div>
                                </div>
                            </div>
                            <div className={styles.fields}>
                                <div className={styles.label}>
                                    Confirm Password
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        className={styles.input}
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Retype password"
                                    />
                                    <div className={styles.error}>{errors.confirmPassword}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.login_button} onClick={handleSignup}>
                            Signup
                        </div>
                        {successMessage && (
                            <div className={styles.success}>{successMessage}</div>
                        )}
                        <div className={styles.signup}>
                            Already have an account? <Link to="/login" className={styles.link}>Login</Link> now.
                        </div>
                    </div>
                    <div className={styles.forgot_password}>
                        Need help creating an account? <span className={styles.contact_us} onClick={openCrispChat}>Contact us</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}
