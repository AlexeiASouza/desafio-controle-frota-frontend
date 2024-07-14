import React from "react";
import CleanDatabase from "../components/cleanDatabase";

const HomePage = () => {
  return (
    <div>
      <h1>Controle de Frota de Caminhões e Entregas</h1>
      <p>
        As regras de negócio são definidas no backend, arquivo:
        EntregaControllers.jsx, onde as entregas são criadas
      </p>
      <CleanDatabase />
    </div>
  );
};

export default HomePage;
