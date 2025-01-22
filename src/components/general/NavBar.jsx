function NavBar() {
  const listClass = "hover:text-yellow-300";
  return (
    <nav>
      <ul className="uppercase flex gap-6 font-semibold items-center">
        <li className={listClass}>
          <a href="#">Home</a>
        </li>
        <li className={listClass}>
          <a href="#aboutus">About Us</a>
        </li>
        <li className={listClass}>
          <a href="#howitworks">How It Works</a>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
