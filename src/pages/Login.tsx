import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        alert("No account found. Please register.");
        return;
      }

      const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        resetFields();
        // Use setTimeout to ensure localStorage is written before redirect
        setTimeout(() => navigate("/", { replace: true }), 0);
      } else {
        alert("Invalid credentials.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Something went wrong during login.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("googleUser", JSON.stringify(user));
      resetFields();
      setTimeout(() => navigate("/", { replace: true }), 0);
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-300 hover:text-white"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold p-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold p-3 rounded-lg transition duration-300 flex justify-center items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        <p className="text-center mt-4 text-gray-200 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-300 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
