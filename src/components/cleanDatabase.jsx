import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../config.js";

// Componente para apagar TODOS os dados do banco
const CleanDatabase = () => {
  const handleCleanDatabase = async () => {
    try {
      console.log(`${baseUrl}/clean`);
      const response = await axios.delete(`${baseUrl}/clean`);
      alert(` ${response?.data?.message || error.message}`);
    } catch (error) {
      console.error("Erro ao limpar o banco de dados:", error);
      alert("Erro ao limpar o banco de dados:");
    }
  };

  return (
    <div>
      <h3>Limpar Banco de Dados</h3>
      <button onClick={handleCleanDatabase}>Limpar</button>
    </div>
  );
};

export default CleanDatabase;
