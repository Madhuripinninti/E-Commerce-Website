import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add login API call here
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left: Login Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Welcome Back!</h2>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>📧</span>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>🔒</span>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.forgotContainer}>
            <Link to="/forgot-password" style={styles.link}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" style={styles.button}>LOGIN</button>

          <p style={styles.text}>
            Don't have an account? <Link to="/" style={styles.link}>Register</Link>
          </p>
        </form>

        {/* Right: Welcome section */}
        <div style={styles.welcomeBox}>
          <h2 style={styles.welcomeTitle}>Glad to see you!</h2>
          <p style={styles.welcomeText}>
            We're excited to have you back. Login and continue exploring amazing deals!
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#eef1f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    background: 'linear-gradient(to right,rgb(253, 68, 197), #6a34d9)',
    borderRadius: '20px',
    padding: '40px',
    width: '90%',
    maxWidth: '1000px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: '20px 0 0 20px',
    padding: '40px 30px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#333'
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '15px',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    color: '#999',
  },
  input: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    fontSize: '15px',
    outline: 'none',
  },
  forgotContainer: {
    textAlign: 'right',
    margin: '10px 0',
    fontSize: '13px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '25px',
    background: '#6a34d9',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  text: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px'
  },
  link: {
    color: '#6a34d9',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  welcomeBox: {
    width: '50%',
    padding: '40px',
    borderRadius: '0 20px 20px 0',
    backgroundColor: '#ffffff11',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  welcomeText: {
    fontSize: '16px',
    lineHeight: '1.5',
  }
};

export default Login;
