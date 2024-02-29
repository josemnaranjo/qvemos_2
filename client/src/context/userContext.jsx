import { createContext, useContext, useEffect, useState } from "react";

//*obtengo la información guardada en "useralmacenamiento" que está en localstorage
const rawDefaultUser = window.localStorage.getItem("useralmacenamiento");

//* transformamos "rawDefaultUser", que es un JSON, a un objeto
const defaultUser = JSON.parse(rawDefaultUser);

//* creamos el contexto con el objeto defaulUser
const userContext = createContext(defaultUser);

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    window.localStorage.setItem("useralmacenamiento", JSON.stringify(user));
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(useContext);
