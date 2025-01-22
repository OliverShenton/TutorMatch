import { FaUserGraduate } from "react-icons/fa";
import { Button } from "../general/Button";

function LoginForm() {
  const inputClass =
    "rounded-md border-2 border-stone-200 p-4 focus:outline-blue-500 focus:shadow-sm focus:shadow-black";
  return (
    <form className="flex flex-col text-center gap-4">
      <img src={<FaUserGraduate />} />
      <p className="uppercase">TutorMatch</p>
      <p>Your Path to Success Begins Here.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className={inputClass}
        autoComplete="true"
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        className={inputClass}
        autoComplete="true"
        required
      />
      <Button text="Login" color="bg-blue-500" colorHover="hover:bg-blue-600" />
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
