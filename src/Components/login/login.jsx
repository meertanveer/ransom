import { useState } from "react";
import Swal from "sweetalert2";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginFxn = () => {
    if (username === 'anonymous' && password === 'Ransom@098#'){
localStorage.setItem('legitimate',username)
Swal.fire({
  title: "Welcome Officers!",
  icon: "success",
  draggable: true
});
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Unknown user!",
        footer: ''
      });
      return
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border mx-2">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Username
            </label>
            <input
            onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)}

              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
          onClick={loginFxn}
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring"
          >
            Login
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default LoginPage;
