import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Lista todas as entregas
const EntregaList = () => {
  const [entregas, setEntregas] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/entregas`)
      .then((response) => {
        setEntregas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar entregas:", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Entregas</h2>
      <ul>
        {entregas.map((entrega) => (
          <li key={entrega._id}>
            {entrega.tipoCarga} - {entrega.valor} - {entrega.destino}
            {entrega.indicadores.valiosa && <span> (Valiosa)</span>}
            {entrega.indicadores.seguro && <span> (Seguro)</span>}
            {entrega.indicadores.perigosa && <span> (Perigosa)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntregaList;
