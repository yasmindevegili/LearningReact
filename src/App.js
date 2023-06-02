import "./App.css";
import Card from "./layout/card";
import Welcome from "./components/basics/welcome";
import Students from "./components/repetition/studentsList";
import Table from "./components/repetition/tableProducts";
import ParImpar from "./components/condicional/ParImpar";
import User from "./components/condicional/userInfo";
import DiretaPai from "./comunicacao/diretaPai";
import IndiretaPai from "./comunicacao/indiretaPai";
function App() {
  return (
    <div className="App">
      <div className="cards">
        <Card titulo="#1 Simple Text">
          <Welcome />
        </Card>
        <Card titulo="#2 List">
          <Students />
        </Card>
        <Card titulo="#3 Spreed Sheets">
          <Table />
        </Card>
        <Card titulo="#4 Logical">
          <ParImpar number="43" />
          <User user={{ nome: "" }} />
        </Card>
        <Card titulo="#5 Comunicação Direta">
          <DiretaPai/>
        </Card>
        <Card titulo="#6 Comunicação Indireta">
          <IndiretaPai/>
        </Card>
      </div>
    </div>
  );
}

export default App;
