import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Lista todos os caminhões.
const CaminhaoList = () => {
  const [caminhoes, setCaminhoes] = useState([]);

  useEffect(() => {
    fetchCaminhoes();
  }, []);

  const fetchCaminhoes = async () => {
    try {
      const response = await axios.get(`${baseUrl}/caminhoes`);
      setCaminhoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar caminhões:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Caminhões</h2>
      <ul>
        {caminhoes.map((caminhao) => (
          <li key={caminhao._id}>
            {caminhao._id} - {caminhao.placa} -{caminhao.frota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaminhaoList;
