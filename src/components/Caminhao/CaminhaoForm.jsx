import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Formulário de criação de um caminhão
const CaminhaoForm = ({ onAddCaminhao }) => {
  const [placa, setPlaca] = useState("");
  const [frota, setFrota] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novoCaminhao = { placa, frota };
    try {
      const response = await axios.post(`${baseUrl}/caminhoes`, novoCaminhao);
      onAddCaminhao(response.data);
      setPlaca("");
      setFrota("");
    } catch (error) {
      setPlaca("");
      setFrota("");
      console.error("Erro ao cadastrar caminhão:", error);
      alert(
        `Erro ao cadastrar caminhao: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Placa:</label>
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Frota:</label>
        <input
          type="text"
          value={frota}
          onChange={(e) => setFrota(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Caminhão</button>
    </form>
  );
};

export default CaminhaoForm;
