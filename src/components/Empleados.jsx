import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Badge } from "react-bootstrap";
import Card from "./Card";
import empleado01 from "./img/empleado01.png";
import empleado02 from "./img/empleado02.png";
import empleado03 from "./img/empleado03.png";
import empleado04 from "./img/empleado04.png";
import empleado05 from "./img/empleado05.png";
import empleado06 from "./img/empleado06.png";
import empleado07 from "./img/empleado07.png";
import empleado08 from "./img/empleado08.png";
import empleado09 from "./img/empleado09.png";

const Empleados = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "empleado01.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "empleado02.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "empleado03.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "empleado04.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "empleado05.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "empleado06.png",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "empleado07.png",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "empleado08.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "empleado09.png",
    },
  ];

  return (
    <Container className="d-flex my-3">
      <div>
        <img
          src={empleado01}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
          }}
        ></img>
      </div>
      <div>
        <p className="mx-3 fw-bold">Laya Dueñas</p>
        <p className="mx-3">
          CEO <Badge bg="primary">Bussisness</Badge>
        </p>
      </div>
    </Container>
  );
};

export default Empleados;
