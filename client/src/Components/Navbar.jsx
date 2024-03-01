import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../api/usuario.services";

const Navbar = () => {
  const { user, setUser } = useUser();

  const logoutUser = async () => {
    const response = await logout();
    const result = response.data.success
    if (result) setUser(null);
    else window.alert("Error. No hemos podido desloguear tu usuario");
  };

  const renderInfo = () => {
    if (user) {
      return (
        <nav className="bg-primary font-grotesk flex items-center justify-between px-[8px] shadow-md">
          <span className="font-bold text-lg text-secondary">
            {" "}
            <Link to={"/"}>Q-vemos</Link>
          </span>
          <div className="flex items-center gap-[27px]">
            <span className="font-normal text-label text-secondary">
              ¡Hola, {user}!
            </span>
            <button className="font-normal text-label bg-secondary text-primary px-2 py-1 rounded-lg" onClick={logoutUser}>
              logout
            </button>
          </div>
        </nav>
      );
    } else {
      return (
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
      );
    }
  };

  return <>{renderInfo()}</>;
};

export default Navbar;
