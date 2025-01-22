import { FaUserGraduate } from "react-icons/fa";
import { Button } from "../general/Button";
import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login Failed! Please check youir credentials");
    }
  };

  const inputClass =
    "rounded-md border-2 border-stone-200 p-4 focus:outline-blue-500 focus:shadow-sm focus:shadow-black";

  return (
    <form
      className="flex flex-col text-center gap-4 border-2 p-4 rounded-3xl"
      onSubmit={handleLogin}>
      <img src={FaUserGraduate} />
      <p className="uppercase">TutorMatch</p>
      <p>Your Path to Success Begins Here.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className={inputClass}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="true"
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        className={inputClass}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="true"
        required
      />
      <div classname="flex items-center mx-auto justify-center">
        <Button
          text="Login"
          color="bg-blue-500"
          colorHover="hover:bg-blue-600"
          width="w-2/3"
          type="submit"
        />
      </div>
      <a>
        <p>Forgott Password?</p>
      </a>
      <a>
        <p>Don't have an account? Sign up!</p>
      </a>
      <p className="text-sm">
        By logging in, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
}

export { LoginForm };
