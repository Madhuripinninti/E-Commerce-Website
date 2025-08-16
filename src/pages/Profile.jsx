import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Madhuri Pinninti',
    email: 'madhuri@example.com',
    phone: '+91 98765 43210',
    image: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
    address: '2nd Floor, Tech Park, Hyderabad, India - 500081',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      alert("✅ Profile updated successfully!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Profile</h2>

      <div style={styles.profileCard}>
        <img src={user.image} alt="Profile" style={styles.profileImage} />
        <div style={styles.details}>
          {isEditing ? (
            <>
              <label>
                <strong>Name:</strong>
                <input type="text" name="name" value={user.name} onChange={handleChange} style={styles.input} />
              </label>
              <label>
                <strong>Email:</strong>
                <input type="email" name="email" value={user.email} onChange={handleChange} style={styles.input} />
              </label>
              <label>
                <strong>Phone:</strong>
                <input type="text" name="phone" value={user.phone} onChange={handleChange} style={styles.input} />
              </label>
              <label>
                <strong>Address:</strong>
                <textarea name="address" value={user.address} onChange={handleChange} style={styles.textarea} />
              </label>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </>
          )}
          <button onClick={toggleEdit} style={styles.editButton}>
            {isEditing ? '💾 Save' : '✏️ Edit'}
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Account Settings</h3>
        <ul style={styles.list}>
          <li><a href="#" style={styles.link}>💳 Saved Cards</a></li>
          <li><a href="#" style={styles.link}>🎁 My Rewards</a></li>
          <li><a href="#" style={styles.link}>🔔 Notifications</a></li>
          <li><a href="#" style={styles.link}>📞 Customer Care</a></li>
          <li><a href="/logout" style={styles.link}>🚪 Logout</a></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>My Orders</h3>
        <p style={styles.subText}>You have not placed any orders yet.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#2c3e50',
    borderBottom: '2px solid #2c3e50',
    paddingBottom: '10px',
  },
  profileCard: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    marginBottom: '40px',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #2c3e50',
  },
  details: {
    flex: 1,
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.8',
  },
  input: {
    width: '100%',
    padding: '6px',
    margin: '6px 0 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '6px',
    margin: '6px 0 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
  },
  editButton: {
    padding: '8px 12px',
    fontSize: '1rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  section: {
    marginTop: '30px',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    marginBottom: '10px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem',
    display: 'block',
    margin: '10px 0',
  },
  subText: {
    color: '#777',
    fontSize: '0.95rem',
  },
};

export default Profile;
