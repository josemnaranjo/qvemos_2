import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home.jsx";
import CrearSala from "./Views/CrearSala.jsx";
import UnirseASala from "./Views/UnirseASala.jsx";
import EntregaCodigoDeSala from "./Views/EntregaCodigoDeSala.jsx";
import Recomendaciones from "./Views/Recomendaciones.jsx";
//* quizás esta pagina es necesaria, se probará conditional rendering en página de votación import EsperaRecomendaciones from "./Views/EsperaRecomendaciones.jsx";
import Votacion from "./Views/Votacion.jsx";
import EsperaVotación from "./Views/EsperaVotacion.jsx";
import Resultados from "./Views/Resultados.jsx";
import Evaluacion from "./Views/Evaluacion.jsx";
import Login from "./Views/Login.jsx";
import Registrarse from "./Views/Registrarse.jsx";
import Navbar from "./Components/Navbar.jsx";
import Reglas from "./Views/Reglas.jsx";
// import MovieInfo from "./Components/MovieInfo.jsx";
import { UserProvider } from "./context/userContext.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/reglamento" element={<Reglas />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/crear-sala" element={<CrearSala />} />
          <Route path="/unirse-a-sala" element={<UnirseASala />} />
          <Route
            path="/anfitrion-entrega-codigo-de-sala/:id"
            element={<EntregaCodigoDeSala />}
          />
          <Route
            path="/sala/:id/recomendaciones"
            element={<Recomendaciones />}
          />
          <Route path="/sala/:id/votacion" element={<Votacion />} />
          <Route
            path="/sala/:id/espera-votacion"
            element={<EsperaVotación />}
          />
          <Route path="/sala/:id/resultados" element={<Resultados />} />
          <Route path="/sala/:id/evaluacion" element={<Evaluacion />} />
        </Route>

        {/* <Route path="/movie-info/:title" element={<MovieInfo />} /> BORRAR SI NO SE USA! */}
      </Routes>
    </UserProvider>
  );
}

export default App;
