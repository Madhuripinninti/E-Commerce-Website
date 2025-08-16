import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://localhost:9999/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        email,
        phone_number: phone,
        username: email,
        password,
        confirm_password: confirmPassword
      })
    })
      .then((res) => {
        if (res.ok) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert("Registration failed!");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong.");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Hello, friend!</h2>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>👤</span>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>📧</span>
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>📱</span>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.terms}>
            <input type="checkbox" required />
            <label style={{ marginLeft: 5 }}>
              I read and agree to <a href="#" style={styles.link}>Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" style={styles.button}>CREATE ACCOUNT</button>

          <p style={styles.text}>
            Already have an account? <Link to="/login" style={styles.link}>Sign in</Link>
          </p>
        </form>

        <div style={styles.welcomeBox}>
          <h2 style={styles.welcomeTitle}>Welcome to M-Cart</h2>
          <p style={styles.welcomeText}>
             "Everything you need — fashion, gadgets, beauty, and more — all in one stylish place."  
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
    background: 'linear-gradient(to right, rgb(68, 148, 253), #6a34d9)',
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
    alignItems: 'center', // ✅ center items horizontally
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
    width: '100%',
    maxWidth: '300px',
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
  terms: {
    fontSize: '13px',
    margin: '10px 0',
    color: '#555',
    maxWidth: '300px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '25px',
    background: '#6a34d9',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px',
    width: '300px'
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

export default Register;
