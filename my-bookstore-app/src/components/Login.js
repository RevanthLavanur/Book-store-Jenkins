// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       // Make an API request to authenticate the user
//       const response = await axios.post('http://example.com/api/auth/login', {
//         username,
//         password,
//       });

//       // If authentication is successful, call the onLogin callback with the user data
//       onLogin(response.data);
//     } catch (error) {
//       setError('Invalid username or password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button onClick={handleLogin} disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </div>
//   );
// };

// export default Login;
