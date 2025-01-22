import { Link, useLocation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Button } from "./Button";

function Header() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <header className="sticky bg-indigo-400 text-stone-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <p className="uppercase font-bold text-xl">TutorMatch</p>
        </Link>
        <div className="flex items-center gap-6">
          {!hideNavBar && <NavBar />}
          <Button
            text={<Link to="/signup">Sign Up</Link>}
            color="bg-orange-500"
            colorHover="hover:bg-orange-600"
          />
          <Button
            text={<Link to="/login">Login</Link>}
            color="bg-orange-500"
            colorHover="hover:bg-orange-600"
          />
        </div>
      </div>
    </header>
  );
}

export { Header };
