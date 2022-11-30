import "./App.css";
import Header from "./components/Header/Header";
import Contador from "./components/Contador/Contador";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header nomeGrupo="Luísa Cristina!" integrantes="Me, Myself and I." />
      <Contador />
      <Footer />
    </div>
  );
}

export default App;
