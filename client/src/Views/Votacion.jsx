import { useState } from "react";
import WaitingPage from "../Components/WaitingPage";

const Votacion = () => {
  const [anfi, setAnfi] = useState(false);

  function VoteForm() {
    return <h1> Formulario de votación</h1>;
  }
  return <>{anfi ? <VoteForm /> : <WaitingPage setAnfi={setAnfi} />}</>;
};

export default Votacion;
