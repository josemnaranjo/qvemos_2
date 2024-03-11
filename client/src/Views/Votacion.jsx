import { useState, useEffect } from "react";
import WaitingPage from "../Components/WaitingPage";
import VoteForm from "../Components/VoteForm";
import { useParams } from "react-router-dom";
import { obtenerPeliculasDeLaSesion } from "../api/peliculas.services";
import { obtenerSesion } from "../api/sesion.services";

const Votacion = () => {
  const { id } = useParams();

  const [toggleVoteOrWaitingPage, setToggleVoteOrWaitingPage] = useState(false);
  const [recomendaciones, setRecomendaciones] = useState();
  const [stopInterval, setStopInterval] = useState(false);

  const handleGetRecomendaciones = async () => {
    const response = await obtenerPeliculasDeLaSesion(id);
    setRecomendaciones(response.data);
  };

  const handleGetAnfitrion = async () => {
    //! REVISAR: se hace llamado a juegos que no existen. funcion "obtenerSesion"
    const response = await obtenerSesion(id);
    const anfitrionPresente = response.data.estaAnfitrion;
    if (anfitrionPresente) {
      setToggleVoteOrWaitingPage(anfitrionPresente);
      setStopInterval(true);
    }
  };

  useEffect(() => {
    handleGetRecomendaciones();
    const interval = setInterval(handleGetAnfitrion, 5000);
    if (stopInterval) {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      {toggleVoteOrWaitingPage ? (
        <VoteForm recomendaciones={recomendaciones} />
      ) : (
        <WaitingPage />
      )}
    </>
  );
};

export default Votacion;
