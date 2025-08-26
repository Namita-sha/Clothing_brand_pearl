
// import React, { useState } from 'react';
// import './Auth.css';
// import { FiEye, FiEyeOff } from 'react-icons/fi';

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const successMessages = [
//     "You just unlocked a new chapter — and it’s beautiful.",
//     "This is what becoming feels like.",
//     "You’re not just alive — you’re *aware*.",
//     "Every click writes your story. This one just turned gold.",
//     "Dreams don’t wait — and neither should you.",
//     "You weren’t made to fit in. Welcome to the uncommon.",
//     "This isn’t a login. It’s a soul step.",
//     "Living softly. Dreaming deeply. Styling freely.",
//     "Welcome back to the version of you you’ve always dreamed of.",
//     "Your soft revolution just began.",
//     "Real isn’t loud. Real is *you*, right here, right now.",
//     "You didn’t just sign up — you showed up.",
//     "For the dreamers who never stopped. Welcome home.",
//     "Style is survival. You’re thriving.",
//     "You breathe, you feel, you create — now you wear it."
//   ];

//   const toggleMode = () => setIsSignup((prev) => !prev);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = successMessages[Math.floor(Math.random() * successMessages.length)];
//     alert(message);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
//         <p className="auth-slogan">“Every masterpiece begins with a signature. Yours starts here.”</p>
//         <form onSubmit={handleSubmit}>
//           {isSignup && (
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               required
//               value={formData.username}
//               onChange={handleChange}
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <div className="input-wrapper">
//             <input
//               className="password-input"
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <span
//               className="toggle-password"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <FiEyeOff /> : <FiEye />}
//             </span>
//           </div>
//           {isSignup && (
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               required
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           )}
//           <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
//         </form>
//         <p onClick={toggleMode}>
//           {isSignup ? 'Already have an account? Login' : 'New here? Sign Up'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });

        setMessage(res.data.message || 'Login successful 🎉');

        // ✅ Store user data (optional)
        if (res.data.user) {
          localStorage.setItem('pearlUser', JSON.stringify(res.data.user));
        }

        // Redirect after a short delay
        setTimeout(() => {
          navigate('/');
        }, 1500);

      } else {
        const res = await axios.post('http://localhost:5000/api/auth/signup', {
          username,
          email,
          password,
        });

        setMessage(res.data.message || 'Signup successful 🎊');

        // Redirect after a short delay
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong ❌');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login to PEARL' : 'Join PEARL'}</h2>
        <p className="auth-slogan">Luxury fashion meets elegance.</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p>
          {isLogin ? "Don't have an account?" : 'Already a member?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
