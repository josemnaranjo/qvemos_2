import { useState } from "react";
import WaitingPage from "../Components/WaitingPage";
import VoteForm from "../Components/VoteForm";

const Votacion = () => {
  const [anfi, setAnfi] = useState(false);

  return <>{anfi ? <VoteForm /> : <WaitingPage setAnfi={setAnfi} />}</>;
};

export default Votacion;
