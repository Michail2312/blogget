import Header from "./components/Header";
import { Main } from "./components/Main/Main";
import { tokenContext } from "./context/tokenContext";
import { AuthContextProvider } from "./context/authContext";
import { useToken } from "./hooks/useToken";

function App() {
  const [token, deleteToken] = useToken("");

  return (
    <tokenContext.Provider value={{ token, deleteToken }}>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </tokenContext.Provider>
  );
}

export default App;
