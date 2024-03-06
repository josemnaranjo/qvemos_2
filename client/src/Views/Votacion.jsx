import { useState, useEffect } from "react";
import WaitingPage from "../Components/WaitingPage";
import VoteForm from "../Components/VoteForm";
import { useParams } from "react-router-dom";
import { obtenerPeliculasDeLaSesion } from "../api/peliculas.services";

const Votacion = () => {
  const { id } = useParams();
  const [anfi, setAnfi] = useState(false);
  const [recomendaciones, setRecomendaciones] = useState();

  const handleGetRecomendaciones = async () => {
    const response = await obtenerPeliculasDeLaSesion(id);
    setRecomendaciones(response.data);
  };

  useEffect(() => {
    handleGetRecomendaciones();
  }, []);

  return (
    <>
      {anfi ? (
        <VoteForm recomendaciones={recomendaciones} />
      ) : (
        <WaitingPage setAnfi={setAnfi} />
      )}
    </>
  );
};

export default Votacion;
