import { Header } from "../components/general/Header";
import { SplitScreen } from "../components/general/SplitScreen";
import loginImg from "../assets/login-image.jpg";
import { SignUpForm } from "../components/signup/SignUpForm";

function SignUp() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        <SplitScreen
          left={<img src={loginImg} alt="Sign Up image of a man signing into a laptop" />}
          right={<SignUpForm />}
        />
      </div>
    </>
  );
}

export { SignUp };
