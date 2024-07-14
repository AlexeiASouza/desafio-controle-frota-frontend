import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Lista as entregas realizadas por determinado caminhão
const BuscarEntregasPorPlaca = ({ onResults, atualizar }) => {
  const [placa, setPlaca] = useState("");
  const [placaSelecionada, setPlacaSelecionada] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPlacaSelecionada(placa);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/entregas/placa/${placaSelecionada}`
        );
        onResults(response.data);
        //setPlaca("");
      } catch (error) {
        setPlaca("");
        console.error("Erro ao buscar entregas:", error.response.data.message);
        onResults([]);
        alert(
          `Erro ao buscar entregas: ${
            error.response?.data?.message || error.message
          }`
        );
      }
    };
    fetchResults();
  }, [placaSelecionada, atualizar]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Placa do Caminhão:</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar Entregas</button>
      </form>
    </div>
  );
};

export default BuscarEntregasPorPlaca;
