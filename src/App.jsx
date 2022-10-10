import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import Card from "./components/Card";
import Empleados from "./components/Empleados";

function App() {
  return (
    <Container>
      <h1 className="text-center">Lista de Empleados</h1>
      <hr></hr>
      <Empleados></Empleados>
    </Container>
  );
}

export default App;
