import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary font-grotesk flex items-center justify-between px-[8px] shadow-md">
        <span className="font-bold text-lg text-secondary">
          {" "}
          <Link to={"/"}>Q-vemos</Link>
        </span>

        <div className="flex items-center gap-[27px]">
          <span className="font-normal text-label text-secondary">
            <Link to={"login"}>Login</Link>
          </span>
          <button className="font-normal text-label bg-secondary text-primary px-2 py-1 rounded-lg">
            <Link to={"registrarse"}>registrarse</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
