import Header from "./components/Header";
import { Main } from "./components/Main/Main";

import { useToken } from "./hooks/useToken";

function App() {
  const [token, deleteToken] = useToken("");

  return (
    <>
      <Header token={token} deleteToken={deleteToken} />
      <Main />
    </>
  );
}

export default App;
