"use client";

import React, { useState } from 'react';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        console.log('User email submitted:', email);
        setSubmitted(true);
    };

    return (
        <div style={styles.container} id="Waitlist">
            {!submitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.title}>Join the Contractual Waitlist</h2>
                    <p style={styles.description}>
                        Stay informed and get early access to the future of contract management.
                    </p>
                    <div style={styles.inputContainer}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={styles.input}
                        />
                        <button type="submit" style={styles.button}>
                            Join Waitlist
                        </button>
                    </div>
                    {error && <p style={styles.error}>{error}</p>}
                </form>
            ) : (
                <div style={styles.successMessage}>
                    <p>Thank you for joining the waitlist!</p>
                    <p style={styles.successDescription}>
                        We’ll be in touch with exclusive updates.
                    </p>
                </div>
            )}
        </div>
    );
};

// Define the styles as TypeScript objects
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        margin: '0 auto',
        width: '100%',
        maxWidth: '800px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '2rem 0',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#111',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    description: {
        fontSize: '1rem',
        color: '#666',
        textAlign: 'center',
        marginBottom: '2rem',
        maxWidth: '80%',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '50px',  // Oval shape for the container
        padding: '0.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        flex: 1,
        padding: '1.2rem',
        fontSize: '1rem',
        borderRadius: '50px 0 0 50px', // Oval shape on the left side
        border: '1px solid #ddd',
        outline: 'none',
        color: '#333',
        textAlign: 'center',
        borderRight: 'none',
    },
    button: {
        padding: '1.2rem',
        fontSize: '1rem',
        fontWeight: 500,
        color: '#ffffff',
        backgroundColor: '#0070f3',
        borderRadius: '0 50px 50px 0', // Oval shape on the right side
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        boxShadow: '0 4px 12px rgba(0, 112, 243, 0.4)',
    },
    successMessage: {
        textAlign: 'center',
        color: '#0070f3',
        fontSize: '1.5rem',
        fontWeight: 500,
        padding: '2rem',
    },
    successDescription: {
        fontSize: '1rem',
        color: '#666',
        marginTop: '1rem',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '-1rem',
        marginBottom: '1rem',
    },
};

export default WaitlistForm;
