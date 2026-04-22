import { Link } from 'react-router-dom'
import '../auth.css'
import Navbar from '../components/Navbar'
import '../home.css'

function Login() {
  return (
    <div>
      <Navbar />
   
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="auth-btn">Login</button>
        <p className="auth-footer">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
     </div>
  );
}

export default Login;