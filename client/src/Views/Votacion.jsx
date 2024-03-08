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

  const handleGetRecomendaciones = async () => {
    const response = await obtenerPeliculasDeLaSesion(id);
    setRecomendaciones(response.data);
  };

  const handleGetAnfitrion = async () => {
    const response = await obtenerSesion(id);
    const anfitrionPresente = response.data.estaAnfitrion;
    console.log(anfitrionPresente);
    setToggleVoteOrWaitingPage(anfitrionPresente);
  };

  useEffect(() => {
    handleGetRecomendaciones();
    handleGetAnfitrion();
  }, [toggleVoteOrWaitingPage]);

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
