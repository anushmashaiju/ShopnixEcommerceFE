import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/home'); 
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff',
    },
    heading: {
      color: ' #40e0d0',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    },
    label: {
      marginBottom: '5px',
      color: '#4682b4', 
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%', 
    },
    button: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: ' #40e0d0', 
      color: '#fff',
      cursor: 'pointer',
    },
    link: {
      marginTop: '10px',
      color: '#4682b4', 
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Shopnix</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <div>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
