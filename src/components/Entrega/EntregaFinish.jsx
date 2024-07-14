import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Finaliza uma entrega e a envia para o arquivo
const FinalizarEntrega = ({ onFinalizarEntrega }) => {
  const [placa, setPlaca] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/entregas/finalizar/${placa}`
      );
      alert(response.data.message);
      onFinalizarEntrega();
      setPlaca("");
    } catch (error) {
      setPlaca("");
      console.error("Erro ao finalizar entrega:", error.response.data.message);
      alert("Erro ao finalizar entrega. Por favor, tente novamente.");
    }
  };

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
        <button type="submit">Finalizar Entrega</button>
      </form>
    </div>
  );
};

export default FinalizarEntrega;
