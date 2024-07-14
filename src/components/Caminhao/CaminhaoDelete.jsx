import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Deleta um caminhão pela placa
const CaminhaoDelete = ({ onDeleteCaminhao }) => {
  const [placa, setPlaca] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`${baseUrl}/caminhoes/${placa}`);
      onDeleteCaminhao();
      setPlaca("");
      alert("Caminhão deletado com sucesso!");
    } catch (error) {
      setPlaca("");
      console.error("Erro ao deletar caminhão:", error);
      alert(
        `Erro ao deletar caminhão: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <div>
        <label>Placa do Caminhão:</label>
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
      </div>
      <button type="submit">Deletar Caminhão</button>
    </form>
  );
};

export default CaminhaoDelete;
