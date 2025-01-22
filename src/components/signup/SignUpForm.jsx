import { FaUserGraduate } from "react-icons/fa";
import { Button } from "../general/Button";

function SignUpForm() {
  const inputClass =
    "rounded-md border-2 border-stone-200 p-4 focus:outline-blue-500 focus:shadow-sm focus:shadow-black";
  return (
    <form className="flex flex-col text-center gap-4">
      <img src={<FaUserGraduate />} />
      <p className="uppercase">TutorMatch</p>
      <p>Your Path to Success Begins Here.</p>
      <input type="name" placeholder="Enter your full name" className={inputClass} required />
      <input
        type="email"
        placeholder="Enter your email"
        className={inputClass}
        autoComplete="false"
        required
      />
      <input
        type="password"
        placeholder="Create a password"
        className={inputClass}
        autoComplete="false"
        required
      />
      <input
        type="password"
        placeholder="Confirm your password"
        className={inputClass}
        autoComplete="false"
        required
      />
      <select type="role" className={inputClass} required>
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
