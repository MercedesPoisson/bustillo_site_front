import React from "react";
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Home from "./Views/home";
import Inicio from "./Views/inicio";
import Departamentos from "./Views/departamentos";
import Reservas from "./Views/reservas";
import Experiencias from "./Views/experiencias";
import Galeria from "./Views/galeria";
import Contacto from "./Views/contacto";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route index element= {<Inicio />}/>
          <Route path="departamentos" element={<Departamentos />}/>
          <Route path="reservas" element={<Reservas />}/>
          <Route path="experiencias" element={<Experiencias />}/>
          <Route path="galeria" element={<Galeria />}/>
          <Route path="contacto" element={<Contacto />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
