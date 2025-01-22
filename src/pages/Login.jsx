import { Header } from "../components/general/Header";
import { SplitScreen } from "../components/general/SplitScreen";
import loginImg from "../assets/login-image.jpg";
import { LoginForm } from "../components/login/LoginForm";

function Login() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        <SplitScreen
          left={<img src={loginImg} alt="Login image of a man signing into a laptop" />}
          right={<LoginForm />}
        />
      </div>
    </>
  );
}

export { Login };
