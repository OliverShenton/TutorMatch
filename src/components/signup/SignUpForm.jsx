import { FaUserGraduate } from "react-icons/fa";
import { Button } from "../general/Button";
import axios from "axios";
import { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      alert("Sign up successful!");
    } catch (err) {
      alert("Sign up failed!");
    }
  };

  const inputClass =
    "rounded-md border-2 border-stone-200 p-4 focus:outline-blue-500 focus:shadow-sm focus:shadow-black";

  return (
    <form
      className="flex flex-col text-center gap-4 border-2 p-4 rounded-3xl"
      onSubmit={handleSubmit}>
      <img src={<FaUserGraduate />} />
      <p>Create an Account</p>
      <input
        type="name"
        placeholder="Enter your full name"
        className={inputClass}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Enter your email"
        className={inputClass}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        autoComplete="false"
        required
      />
      <input
        type="password"
        placeholder="Create a password"
        className={inputClass}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        autoComplete="false"
        required
      />
      <input
        type="password"
        placeholder="Confirm your password"
        className={inputClass}
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        autoComplete="false"
        required
      />
      <select
        type="role"
        className={inputClass}
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required>
        <option disabled={true} defaultValue={true}>
          Please pick a role
        </option>
        <option>Student</option>
        <option>Tutor</option>
      </select>
      <div className="flex gap-4 items-center justify-center">
        <input type="checkbox" />
        <p>I agree to the Terms of Service and Privacy Policy.</p>
      </div>
      <Button text="Sign Up" color="bg-blue-500" colorHover="hover:bg-blue-600" />
      <a>
        <p>Already have an account? Log in!</p>
      </a>
    </form>
  );
}

export { SignUpForm };
